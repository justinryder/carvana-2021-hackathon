import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import upgradesReducer, {setWindowBounds} from "../upgrade/upgradeSlice";
import {bounds} from "../bounds";

export const store = configureStore({
  reducer: {
    upgrades: upgradesReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

window.addEventListener("resize", () => {
  store.dispatch(setWindowBounds(bounds(0, 0, window.innerWidth, window.innerHeight)));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
