import { v4 as uuid } from "uuid";
import { Packet, Envelope } from "./types";
import { PacketTypeLabelMap } from "../packets/PacketTypeLabelMap";

const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

const chooseRandomPacketLabel = () => {
  const rndNum = getRandomNumber(5);

  return Object.values(PacketTypeLabelMap)[rndNum];
};

export const makePacket = (): Packet => {
  return {
    id: uuid(),
    label: chooseRandomPacketLabel(),
    color: "blue",
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
