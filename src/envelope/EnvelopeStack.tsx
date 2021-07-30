import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ShapeProps } from "../types/shapes";
import { Envelope } from "./Envelope";

type EnvelopeStackProps = {} & ShapeProps;

export const EnvelopeStack: FunctionComponent<EnvelopeStackProps> = ({
  x,
  y,
  width,
  height,
}) => {
  const envelopes = useSelector((state: RootState) => state.upgrades.envelopes);
  return (
    <>
      {envelopes.map((envelope) => (
        <Envelope
          key={envelope.id}
          x={x}
          y={y}
          height={height}
          width={width}
          packetType={envelope.packet.packetType}
        />
      ))}
    </>
  );
};
