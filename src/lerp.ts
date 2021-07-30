export const lerp = (start: number, end: number, time: number) =>
  start + time * (end - start);

type Vector = {
  x: number;
  y: number;
};

export const lerpVector = (start: Vector, end: Vector, time: number) => ({
  x: lerp(start.x, end.x, time),
  y: lerp(start.y, end.y, time),
});
