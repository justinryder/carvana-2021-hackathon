import { Bounds } from "./types";

export const padBox = (bounds: Bounds, padding: number): Bounds => {
  const doublePadding = padding * 2;

  return {
    x: bounds.x + padding,
    y: bounds.y + padding,
    width: bounds.width - doublePadding,
    height: bounds.height - doublePadding,
  };
};
