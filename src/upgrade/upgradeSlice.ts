import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Upgrade } from "./types";
import { Packet, Envelope } from "../envelope/types";
import { upgrades } from "./upgrades";
import {createWorkForDay, getNewPacketBounds} from "../envelope/utils";
import { layoutBox, moveRight } from "../layout/layoutBox";
import { BUCKET_HEIGHT, BUCKET_WIDTH, PACKET_WIDTH } from "../constants";
import { getBucketLabel, getPacketColor } from "../packets/PacketTypeLabelMap";
import { CarmaTheme } from "../theme/CarmaTheme";
import { PacketType } from "../packets/types";
import { createSelector } from "reselect";
import { Bounds } from "../layout/types";
import { bounds } from "../bounds";
import { boxIntersection } from "../collision/boxIntersections";

export type UpgradeState = {
  upgrades: Upgrade[];
  money: number;
  packetsComplete: number;
  packetsCompleteByType: Record<PacketType, number>;
  packets: Packet[];
  envelopes: Envelope[];
  buckets: Array<{
    bucketType: PacketType;
  }>;
  windowBounds: Bounds;
};

const initialState: UpgradeState = {
  upgrades: upgrades,
  money: 0,
  packetsComplete: 0,
  packetsCompleteByType: {
    [PacketType.Registration]: 0,
    [PacketType.Title]: 0,
    [PacketType.Trade]: 0,
    [PacketType.Treasury]: 0,
    [PacketType.Cats]: 0,
  },
  packets: [],
  envelopes: createWorkForDay(30),
  buckets: Object.values(PacketType).map((bucketType) => ({
    bucketType,
  })),
  windowBounds: bounds(0, 0, window.innerWidth, window.innerHeight),
};

export const upgradeSlice = createSlice({
  name: "upgrades",
  initialState,

  // 👀
  reducers: {
    purchase: (state, action: PayloadAction<Upgrade>) => {
      return {
        ...state,
        upgrades: state.upgrades?.map((upgrade) =>
          upgrade.id === action.payload.id
            ? { ...upgrade, isPurchased: true }
            : upgrade
        ),
        // TODO: make sure UI doesn't let you do this if you're poor
        money: state.money - action.payload.cost,
      };
    },
    completePacket: (state, action: PayloadAction<Packet>) => {
      return {
        ...state,
        money: state.money + 1,
        packetsComplete: state.packetsComplete + 1,
        packetsCompleteByType: {
          ...state.packetsCompleteByType,
          [action.payload.packetType]: state.packetsCompleteByType[action.payload.packetType] + 1,
        },
        packets: state.packets.filter((packet) => packet.id !== action.payload.id),
      };
    },
    openEnvelope: (state: UpgradeState, action: PayloadAction<Envelope>) => {
      return {
        ...state,
        envelopes: state.envelopes.filter(
          (envelope) => envelope.id !== action.payload.id
        ),
        packets: [
          ...state.packets,
          {
            ...state.envelopes.find((envelope) => envelope.id === action.payload.id).packet,
            bounds: getNewPacketBounds(),
          }
        ],
      };
    },
    generateWorkForDay: (
      state: UpgradeState,
      action: PayloadAction<number>
    ) => {
      return {
        ...state,
        envelopes: createWorkForDay(action.payload),
      };
    },
    updatePacket: (state, action: PayloadAction<Packet>) => ({
      ...state,
      packets: state.packets.map((packet) =>
        packet.id === action.payload.id
          ? {
              ...packet,
              ...action.payload,
            }
          : packet
      ),
    }),
    setWindowBounds: (state, action: PayloadAction<Bounds>) => {
      if (
        state.windowBounds.width === action.payload.width &&
        state.windowBounds.height === action.payload.height
      ) {
        return;
      }

      const defaultPacketBounds = getNewPacketBounds();
      return {
        ...state,
        windowBounds: action.payload,
        packets: state.packets.map((packet) =>
          packet.bounds.y === defaultPacketBounds.y || !boxIntersection(packet.bounds, action.payload)
            ? {
                ...packet,
                bounds: {...defaultPacketBounds},
              }
            : packet
        ),
      };
    },
  },
});

export const {
  purchase,
  completePacket,
  openEnvelope,
  generateWorkForDay,
  setWindowBounds,
  updatePacket,
} = upgradeSlice.actions;
export default upgradeSlice.reducer;

type RootState = {
  upgrades: UpgradeState;
};
const getState = (state: RootState) => state.upgrades;

export const getWindowBounds = createSelector(
  [getState],
  (state) => state.windowBounds
);

export const _getBuckets = createSelector([getState], (state) => state.buckets);

export const getUpgrades = createSelector(
  [getState],
  (state) => state.upgrades
);

export const getMoney = createSelector([getState], (state) => state.money);

export const getPacketsComplete = createSelector(
  [getState],
  (state) => state.packetsComplete
);

export const getPacketsCompleteByType = createSelector([
  getState,
], state => state.packetsCompleteByType);

export const _getPackets = createSelector([getState], (state) => state.packets);

export const getPackets = createSelector(
  [_getPackets, getWindowBounds],
  (packets, windowBounds) =>
    packets.map((packet) => ({
      ...packet,
      isInWindow: boxIntersection(windowBounds, packet.bounds),
    }))
);

export const getDraggedPacket = createSelector([getPackets], (packets) =>
  packets.find((packet) => packet.isDragging)
);

export const getEnvelopes = createSelector(
  [getState],
  (state) => state.envelopes
);

export const getEnvelopeCount = createSelector(
  [getEnvelopes],
  (envelopes) => envelopes.length
);

export const getNextEnvelope = createSelector(
  [getEnvelopes, getEnvelopeCount],
  (envelopes, count) => (count ? envelopes[count - 1] : null)
);

export const __getBuckets = createSelector(
  [_getBuckets, getWindowBounds],
  (buckets, windowBounds) => {
    const bucketCount = buckets.length;
    const spacing =
      (windowBounds.width - bucketCount * BUCKET_WIDTH) / (bucketCount + 1);
    const y = windowBounds.height - BUCKET_HEIGHT - spacing;

    return buckets.map((bucket, index) => ({
      ...bucket,
      bounds: {
        x: spacing + index * (BUCKET_WIDTH + spacing),
        y,
        width: BUCKET_WIDTH,
        height: BUCKET_HEIGHT,
      },
      color: getPacketColor(bucket.bucketType),
      label: getBucketLabel(bucket.bucketType),
    }));
  }
);

export const getBuckets = createSelector(
  [__getBuckets, getDraggedPacket],
  (buckets, packet) =>
    packet
      ? buckets.map((bucket) => {
          const isPacketInBucket = boxIntersection(
            bucket.bounds,
            packet.bounds
          );

          const packetMatch =
            isPacketInBucket && packet.packetType === bucket.bucketType;
          const packetError =
            isPacketInBucket && packet.packetType !== bucket.bucketType;

          let color = getPacketColor(bucket.bucketType);
          let borderColor = CarmaTheme.color.black;
          if (packetMatch) {
            borderColor = 'green';
          }
          if (packetError) {
            borderColor = 'red';
          }

          return {
            ...bucket,
            color: getPacketColor(bucket.bucketType),
            borderColor,
            isPacketInBucket,
            packetMatch,
            packetError,
            packet: isPacketInBucket ? packet : null,
          };
        })
      : buckets
);
