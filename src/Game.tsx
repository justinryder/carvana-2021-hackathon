import { Group } from "react-konva";
import { UpgradeList } from "./upgrade/UpgradeList";
import {
  completePacket,
  getBuckets,
  getEnvelopeCount,
  getNextEnvelope,
  getPackets,
  openEnvelope,
  updatePacket,
} from "./upgrade/upgradeSlice";
import { Score } from "./score/Score";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Packet } from "./packets/Packet";
import { CarmaTheme } from "./theme/CarmaTheme";
import { boxIntersection } from "./collision/boxIntersections";
import { bounds, move } from "./bounds";
import { useWindowBounds } from "./useWindowSize";
import { Bucket } from "./bucket/Bucket";
import { layoutBox, moveRight } from "./layout/layoutBox";
import { PacketType } from "./packets/types";
import { getBucketLabel, getPacketColor } from "./packets/PacketTypeLabelMap";
import {
  BUCKET_HEIGHT,
  BUCKET_WIDTH,
  PACKET_HEIGHT,
  PACKET_WIDTH,
} from "./constants";
import { EnvelopeStack } from "./envelope/EnvelopeStack";
import { Envelope } from "./envelope/Envelope";
import { debounce } from "lodash";
import { Bin } from "./bin/Bin";
import { getNewPacketBounds } from "./envelope/utils";

const padding = 15;

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

const getNewPacketType = () => randomItem(packetTypes);

const packetTypes = Object.values(PacketType);

export const Game = () => {
  const { money, packetsComplete } = useSelector(
    (state: RootState) => state.upgrades
  );
  const dispatch = useDispatch();

  const windowBounds = useWindowBounds();

  const handlePacketDrag = useCallback(
    debounce((event, packet) => {
      dispatch(
        updatePacket({
          ...packet,
          bounds: move(packet.bounds, event.target.x(), event.target.y()),
          isDragging: true,
        })
      );
    }, 10),
    [dispatch]
  );

  const envelopeCount = useSelector(getEnvelopeCount);
  const nextEnvelope = useSelector(getNextEnvelope);
  const packets = useSelector(getPackets);
  const buckets = useSelector(getBuckets);

  const openTopEnvelope = () => {
    dispatch(openEnvelope(nextEnvelope));
  };

  return (
    <Group x={0} y={0}>

      <Score
        {...layoutBox({
          bounds: windowBounds,
          width: 300,
          height: 100,
          align: 'top left',
          padding,
        })}
        score={{
          money,
          packetsCompleted: packetsComplete,
          incomePerPacket: 10,
        }}
      />

      <UpgradeList {...layoutBox({
        bounds: windowBounds,
        width: 300,
        height: 900,
        align: 'top right',
        padding,
      })} />

      <Bin
        title={`Inbound Envelopes (${envelopeCount})`}
        x={windowBounds.width / 2 - BUCKET_WIDTH - padding / 2}
        y={padding}
        width={BUCKET_WIDTH}
        height={BUCKET_HEIGHT}
        hasEnvelope={Boolean(nextEnvelope)}
        onClick={openTopEnvelope}
      />

      {buckets.map((bucket: any) => (
        <Bucket
          key={bucket.bucketType}
          {...bucket.bounds}
          label={bucket.label}
          fill={bucket.color}
          stroke={bucket.borderColor}
          packetType={bucket.bucketType}
        />
      ))}

      <Bin
        title={`Opened Packets (${packets.length})`}
        x={windowBounds.width / 2 + padding / 2}
        y={padding}
        width={BUCKET_WIDTH}
        height={BUCKET_HEIGHT}
        hasEnvelope={false}
      />

      {packets.map((packet) => (
        <Packet
          key={packet.id}
          packetType={packet.packetType}
          draggable={true}
          x={packet.bounds.x}
          y={packet.bounds.y}
          onDrag={(event) => handlePacketDrag(event, packet)}
          onDragEnd={() => {
            const bucketCollision = buckets.find(
              (bucket: any) => bucket.packet?.id === packet.id
            ) as any;
            if (bucketCollision?.packetMatch) {
              dispatch(completePacket(packet));
            } else if (!packet.isInWindow || bucketCollision?.packetError) {
              dispatch(
                updatePacket({
                  ...packet,
                  isDragging: false,
                  bounds: getNewPacketBounds(),
                })
              );
              return;
            }

            dispatch(
              updatePacket({
                ...packet,
                isDragging: false,
              })
            );
          }}
        />
      ))}
    </Group>
  );
};
