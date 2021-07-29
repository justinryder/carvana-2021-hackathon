import { Envelope } from "./Envelope";

export default {
  title: "Envelope",
};

export const EnvelopeBox = ({ width, height, x, y }) => (
  <Envelope width={width} height={height} x={x} y={y} />
);

EnvelopeBox.args = {
  x: 100,
  y: 100,
};
