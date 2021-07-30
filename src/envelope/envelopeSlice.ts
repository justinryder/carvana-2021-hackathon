import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Packet = {
  id: string;
  label: string;
  color: string;
};

export type Envelope = {
  id: string;
  packet: Packet;
};

export type EnvelopeState = {
  envelopes: Envelope[];
  packets: Packet[];
};

const initialState: EnvelopeState = {
  envelopes: [],
  packets: [],
};

export const envelopeSlick = createSlice({
  name: "envelopes",
  initialState,
  reducers: {
    openEnvelope: (state: EnvelopeState, action: PayloadAction<Envelope>) => {
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
  },
});
