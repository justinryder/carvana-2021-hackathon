import {Align, Bounds} from "./types";
import {alignBox} from "./alignBox";
import {padBox} from "./padBox";

export type LayoutBoxArgs = {
  bounds: Bounds;
  width: number;
  height: number;
  padding?: number;
  align?: Align;
};

export const layoutBox = ({
  bounds,
  width,
  height,
  padding = 0,
  align = 'top left',
}: LayoutBoxArgs) => {
  return alignBox(
    padBox(
      bounds,
      padding,
    ),
    align,
    width,
    height,
  );
};

export const moveBelow = ({
  bounds,
  margin,
}) => {
  return {
    ...bounds,
    y: bounds.y + bounds.height + margin,
  };
};
