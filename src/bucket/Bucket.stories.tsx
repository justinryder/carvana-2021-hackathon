import { Bucket } from "./Bucket";

export default {
  title: "Bucket",
};

export const BucketBox = ({ width, height, x, y }) => (
  <Bucket label="Trades" width={width} height={height} x={x} y={y} />
);

BucketBox.args = {
  x: 100,
  y: 100,
};
