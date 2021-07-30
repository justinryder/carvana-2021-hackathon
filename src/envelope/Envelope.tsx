import { Group, Line, Rect, TextPath } from "react-konva";
import { ShapeProps } from "../types/shapes";
import { FunctionComponent, useState } from "react";
import { CarmaTheme } from "../theme/CarmaTheme";
import { Packet } from "../packets/Packet";
import { PacketType } from "../packets/types";

type EnvelopeProps = {
  packetType: PacketType;
} & ShapeProps;

export const Envelope: FunctionComponent<EnvelopeProps> = ({
  x,
  y,
  height = 100,
  width = 85,
  packetType,
}) => {
  const labelreg = "CAR";
  const labelbold = "VANA";
  const carWidth = 32;
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <>
      {isEnvelopeOpen && (
        <Packet
          x={x}
          y={y}
          packetType={packetType}
          draggable
          onDrag={() => {}}
          onDragEnd={() => {}}
        />
      )}
      {!isEnvelopeOpen && (
        <Group
          x={x}
          y={y}
          width={width}
          height={height}
          onClick={() => setIsEnvelopeOpen(true)}
        >
          <Rect
            width={width}
            height={height}
            x={0}
            y={0}
            fill={CarmaTheme.color.white}
            stroke={CarmaTheme.color.background}
          />
          <TextPath
            text={labelreg}
            fontFamily={CarmaTheme.font.family}
            width={width}
            height={height}
            x={10}
            y={0}
            fill={CarmaTheme.color.primary}
            verticalAlign="middle"
            align="left"
            listening={false}
            data={`M 0, ${height - 5} L 0, ${height - carWidth}`}
          />
          <TextPath
            text={labelbold}
            fontFamily={CarmaTheme.font.family}
            fontStyle="bold"
            width={width}
            height={height}
            x={10}
            y={0}
            fill={CarmaTheme.color.primary}
            verticalAlign="middle"
            align="left"
            listening={false}
            data={`M 0, ${height - carWidth} L 0, ${height - 80}`}
          />
          <Line
            stroke={"black"}
            strokeWidth={1}
            points={[width - 20, 3, width - 2, 3]}
          />
          <Line
            stroke={"black"}
            strokeWidth={1}
            points={[width - 13, 6, width - 2, 6]}
          />
          <Line
            stroke={"black"}
            strokeWidth={1}
            points={[width - 10, 9, width - 2, 9]}
          />
        </Group>
      )}
    </>
  );
};
