import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import upgradesReducer from "../upgrade/upgradeSlice";

export const store = configureStore({
  reducer: {
    upgrades: upgradesReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
