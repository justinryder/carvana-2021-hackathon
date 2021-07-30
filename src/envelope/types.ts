import { PacketType } from "../packets/types";

export type Packet = {
  id: string;
  packetType: PacketType;
};

export type Envelope = {
  id: string;
  packet: Packet;
};
