import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Upgrade } from "./types";
import { upgrades } from "./upgrades";

export type UpgradeState = {
  upgrades: Upgrade[];
  storeList: Upgrade[];
};

const initialState: UpgradeState = {
  upgrades: [],
  storeList: upgrades,
};

export const upgradeSlice = createSlice({
  name: "upgrades",
  initialState,
  reducers: {
    purchase: (state, action: PayloadAction<Upgrade>) => {
      return {
        storeList: state.storeList.filter(
          (upgrade) => upgrade.id !== action.payload.id
        ),
        upgrades: [...upgrades, action.payload],
      };
    },
  },
});

export const { purchase } = upgradeSlice.actions;
export default upgradeSlice.reducer;
