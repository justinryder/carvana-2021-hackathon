import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Upgrade, StoreList } from "./types";
import { upgrades } from "./upgrades";

export type UpgradeState = {
  upgrades: Upgrade[];
  money: number;
  packetsComplete: number;
};

const initialState: UpgradeState = {
  upgrades: upgrades,
  money: 0,
  packetsComplete: 0,
};

export const upgradeSlice = createSlice({
  name: "upgrades",
  initialState,
  reducers: {
    purchase: (state, action: PayloadAction<Upgrade>) => {
      return {
        ...state,
        upgrades: state.upgrades?.map((upgrade) =>
          upgrade.id === action.payload.id
            ? { ...upgrade, isPurchased: true }
            : upgrade
        ),
        // TODO: make sure UI doesn't let you do this if you're poor
        money: state.money - action.payload.cost,
      };
    },
    completePacket: (state, action: PayloadAction<string>) => {
      console.log(" I was dispatched");
      return {
        ...state,
        money: state.money + 1,
        packetsComplete: state.packetsComplete + 1,
      };
    },
  },
});

export const { purchase, completePacket } = upgradeSlice.actions;
export default upgradeSlice.reducer;
