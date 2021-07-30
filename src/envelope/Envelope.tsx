import { Group, Line, Rect, TextPath } from "react-konva";
import { ShapeProps } from "../types/shapes";
import { FunctionComponent, useState } from "react";
import { CarmaTheme } from "../theme/CarmaTheme";
import { Packet } from "../packets/Packet";
import { PacketType } from "../packets/types";
import { useDispatch } from "react-redux";
import { openEnvelope } from "../upgrade/upgradeSlice";
import { Envelope as EnvelopeType } from "./types";
import { PACKET_HEIGHT, PACKET_WIDTH } from "../constants";

type EnvelopeProps = {} & ShapeProps;

// TODO: make this look more like an envelope and less like a packet

export const Envelope: FunctionComponent<EnvelopeProps> = ({
  x,
  y,
  height = PACKET_HEIGHT,
  width = PACKET_WIDTH,
}) => {
  const labelreg = "CAR";
  const labelbold = "VANA";
  const carWidth = 32;

  return (
    <Group
      x={x}
      y={y}
      width={width}
      height={height}
      // onClick={handleOnClick}
      listening={false}
    >
      <Rect
        width={width}
        height={height}
        x={0}
        y={0}
        // fill={CarmaTheme.color.white}
        fill="#F1D592"
        stroke={CarmaTheme.color.background}
        listening={false}
      />
      {/* <Rect
        width={width}
        height={height}
        x={0}
        y={0}
        // fill={CarmaTheme.color.white}
        fill="#F1D592"
        stroke={CarmaTheme.color.background}
      /> */}
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
        listening={false}
      />
      <Line
        stroke={"black"}
        strokeWidth={1}
        points={[width - 13, 6, width - 2, 6]}
        listening={false}
      />
      <Line
        stroke={"black"}
        strokeWidth={1}
        points={[width - 10, 9, width - 2, 9]}
        listening={false}
      />
    </Group>
  );
};
