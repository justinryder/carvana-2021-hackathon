import { v4 as uuid } from "uuid";
import { Packet, Envelope } from "./types";
import { PacketType } from "../packets/types";

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
const packetTypes = Object.values(PacketType);
const getNewPacketType = () => randomItem(packetTypes);

export const makePacket = (): Packet => {
  return {
    id: uuid(),
    packetType: getNewPacketType(),
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
