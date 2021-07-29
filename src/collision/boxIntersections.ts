import {Bounds} from "../layout/types";

const lineIntersection = (aMin: number, aMax: number, bMin: number, bMax: number) => {
  return aMax >= bMin && bMax >= aMin;
};

export const boxIntersection = (a: Bounds, b: Bounds) => {
  const aRight = a.x + a.width;
  const aBottom = a.y + a.height;
  const bRight = b.x + b.width;
  const bBottom = b.y + b.height;

  return lineIntersection(a.x, aRight, b.x, bRight) && lineIntersection(a.y, aBottom, b.y, bBottom);
};
