import { configureStore } from "@reduxjs/toolkit";
import upgradesReducer from "../upgrade/upgradeSlice";

export const store = configureStore({
  reducer: {
    upgrades: upgradesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
