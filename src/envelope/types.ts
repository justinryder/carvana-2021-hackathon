export type Packet = {
  id: string;
  label: string;
  color: string;
};

export type Envelope = {
  id: string;
  packet: Packet;
};
