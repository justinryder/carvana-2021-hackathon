import { Bounds } from "./layout/types";

export const bounds = (x, y, width, height): Bounds => ({
  x,
  y,
  width,
  height,
});

export const move = ({ width, height }, x, y) => bounds(x, y, width, height);
