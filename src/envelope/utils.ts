import { Packet, Envelope } from "./types";

export const makePacket = (): Packet => {
  return {
    id: "def",
    label: "reg",
    color: "blue",
  };
};

export const makeEnvelope = (): Envelope => {
  return {
    id: "abc",
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
