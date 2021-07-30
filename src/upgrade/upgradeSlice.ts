import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Upgrade } from "./types";
import { Packet, Envelope } from "../envelope/types";
import { upgrades } from "./upgrades";
import { createWorkForDay } from "../envelope/utils";

export type UpgradeState = {
  upgrades: Upgrade[];
  money: number;
  packetsComplete: number;
  packets: Packet[];
  envelopes: Envelope[];
};

const initialState: UpgradeState = {
  upgrades: upgrades,
  money: 0,
  packetsComplete: 0,
  packets: [],
  envelopes: createWorkForDay(30),
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
    completePacket: (state, action: PayloadAction<string>) => {
      console.log(" I was dispatched");
      return {
        ...state,
        money: state.money + 1,
        packetsComplete: state.packetsComplete + 1,
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
          state.envelopes.find((envelope) => envelope.id === action.payload.id)
            .packet,
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
  },
});

export const { purchase, completePacket, openEnvelope, generateWorkForDay } =
  upgradeSlice.actions;
export default upgradeSlice.reducer;
