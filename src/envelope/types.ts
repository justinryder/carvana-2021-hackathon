import { PacketType } from "../packets/types";
import {Bounds} from "../layout/types";

export type Packet = {
  id: string;
  packetType: PacketType;
  bounds: Bounds;
  isDragging: boolean;
};

export type Envelope = {
  id: string;
  packet: Packet;
};
