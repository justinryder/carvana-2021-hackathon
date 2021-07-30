import { CarmaTheme } from "../theme/CarmaTheme";
import { Envelope } from "./Envelope";

export default {
  title: "Envelope",
};

export const EnvelopeBox = ({ width, height, x, y }) => (
  <Envelope
    packetBackgroundColor={CarmaTheme.color.team.insideAdvocate}
    width={width}
    height={height}
    x={x}
    y={y}
  />
);

EnvelopeBox.args = {
  x: 100,
  y: 100,
};
