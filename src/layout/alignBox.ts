import {Align, AlignX, AlignY, Bounds} from "./types";

export type AlignBoxArgs = {
  bounds: Bounds;
  width: number;
  height: number;
  align: Align;
};

const horizontalAlign = (bounds: Bounds, align: AlignX, width: number): Bounds => {
  switch (align) {
    case 'center':
      return {
        ...bounds,
        x: bounds.x + (bounds.width - width) / 2,
      };
    case 'right':
      return {
        ...bounds,
        x: bounds.x + bounds.width - width,
      };
    case 'left':
    default:
      return bounds;
  }
};

const verticalAlign = (bounds: Bounds, align: AlignY, height: number): Bounds => {
  switch (align) {
    case 'center':
      return {
        ...bounds,
        y: bounds.y + (bounds.height - height) / 2,
      };
    case 'bottom':
      return {
        ...bounds,
        y: bounds.y + bounds.height - height,
      };
    case 'top':
    default:
      return bounds;
  }
};

export const alignBox = (bounds: Bounds, align: Align, width: number, height: number): Bounds => {
  const [alignY = 'top', alignX = 'left'] = align.split(' ');

  return {
    ...horizontalAlign(
      verticalAlign(
        bounds,
        alignY as AlignY,
        height,
      ),
      alignX as AlignX,
      width
    ),
    width,
    height,
  };
};
