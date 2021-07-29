import { Upgrade } from "./types";

export const upgrades: Upgrade[] = [
  {
    id: "open_envelope",
    name: "Open Envelope",
    description:
      "An advanced robot that we sourced from the future, capable or opening envelopes at lightning speed.",
    cost: 3.5,
    isPurchased: false,
    apply: () => {},
  },
  {
    id: "auto_sort_trades",
    name: "Auto Sort Trades",
    description:
      "Puts Trades documents in correct bin after they are auto opened.",
    cost: 3.5,
    isPurchased: false,
    apply: () => {},
    prerequisite: "open_envelope",
  },
  {
    id: "auto_sort_reg_packets",
    name: "Auto Sort Reg Packets",
    description: "Puts Reg Packets in correct bin after they are auto opened.",
    cost: 3.5,
    isPurchased: false,
    apply: () => {},
    prerequisite: "open_envelope",
  },
];
