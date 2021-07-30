import { Bucket } from "./Bucket";
import {PacketType} from "../packets/types";

export default {
  title: "Bucket",
};

export const BucketBox = ({ width, height, x, y, packetType }) => (
  <Bucket label="Trades" width={width} height={height} x={x} y={y} packetType={packetType} />
);

BucketBox.args = {
  x: 100,
  y: 100,
  packetType: PacketType.Cats,
};
