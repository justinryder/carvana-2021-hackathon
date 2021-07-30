import { v4 as uuid } from "uuid";
import { Packet, Envelope } from "./types";
import { PacketType } from "../packets/types";
import { layoutBox } from "../layout/layoutBox";
import {
  BUCKET_HEIGHT,
  BUCKET_PACKET_DELTA_WIDTH,
  PACKET_HEIGHT,
  PACKET_WIDTH,
} from "../constants";

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
const packetTypes = Object.values(PacketType);
const getNewPacketType = () => randomItem(packetTypes);

const padding = 15; // matches Game.tsx's padding constant
export const getNewPacketBounds = () => ({
  x: window.innerWidth / 2 + padding / 2 + BUCKET_PACKET_DELTA_WIDTH / 2,
  y: padding + BUCKET_HEIGHT - PACKET_HEIGHT - 10,
  width: PACKET_WIDTH,
  height: PACKET_HEIGHT,
});

export const makePacket = (): Packet => {
  return {
    id: uuid(),
    packetType: getNewPacketType(),
    bounds: getNewPacketBounds(),
    isDragging: false,
  };
};

export const makeEnvelope = (): Envelope => {
  return {
    id: uuid(),
    packet: makePacket(),
  };
};

export const createWorkForDay = (numEvelopes: number): Envelope[] => {
  const envelopes = [];

  for (let i = 0; i < numEvelopes; i++) {
    envelopes.push(makeEnvelope());
  }

  return envelopes;
};
