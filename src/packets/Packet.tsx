// visual for an individual reg packet

import React, { useState } from "react";
import {
  KonvaNodeEvents,
  Rect,
  Group,
  Text,
  TextPath,
  Line,
} from "react-konva";
import Konva from "konva";
import { CarmaTheme } from "../theme/CarmaTheme";
import { PACKET_HEIGHT, PACKET_WIDTH } from "../constants";
import { PacketType } from "./types";
import { getPacketColor, getPacketTypeLabel } from "./PacketTypeLabelMap";

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
  draggable: boolean;
};

type PacketProps = {
  labelreg?: string | undefined;
  labelbold?: string | undefined;
  onClick?: KonvaNodeEvents["onClick"];
  onDrag: KonvaNodeEvents["onDragMove"];
  onDragEnd: KonvaNodeEvents["onDragEnd"];
  backgroundColor?: string;
  textColor?: string;
  packetType?: PacketType;
} & ShapeProps;

export const Packet = ({
  labelreg = "CAR",
  labelbold = "VANA",
  //backgroundColor = CarmaTheme.color.callToAction,
  //textColor = CarmaTheme.font.color.white,
  x,
  y,
  width = PACKET_WIDTH,
  height = PACKET_HEIGHT,
  onClick,
  onDrag,
  onDragEnd,
  //draggable,
  packetType = PacketType.Title,
}: PacketProps) => {
  const [clicking, setClicking] = useState(false);

  const handleMouseOver = (event: Konva.KonvaEventObject<MouseEvent>) => {
    const container = event.target.getStage()?.container();
    if (container) {
      container.style.cursor = "pointer";
    }
  };

  const handleMouseOut = (event: Konva.KonvaEventObject<MouseEvent>) => {
    const container = event.target.getStage()?.container();
    if (container) {
      container.style.cursor = "default";
    }
  };

  const handleMouseDown = (event: Konva.KonvaEventObject<MouseEvent>) => {
    setClicking(true);
  };

  const handleMouseUp = (event: Konva.KonvaEventObject<MouseEvent>) => {
    setClicking(false);
  };

  const handleDragMove = (event: Konva.KonvaEventObject<DragEvent>) => {
    if (onDrag) {
      onDrag(event);
    }
  };

  const handleDragEnd = (event: Konva.KonvaEventObject<DragEvent>) => {
    if (onDragEnd) {
      onDragEnd(event);
    }

    setClicking(false);
  };

  const scalar = clicking ? 1.1 : 1;

  const carWidth = 45;

  return (
    <Group
      width={width}
      height={height}
      x={x}
      y={y}
      fill="transparent"
      draggable={true}
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      scaleX={scalar}
      scaleY={scalar}
      offsetX={(width - width * scalar) / -2}
      offsetY={(height - height * scalar) / -2}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <Rect
        width={width}
        height={height}
        x={0}
        y={0}
        fill={getPacketColor(packetType)}
        stroke={CarmaTheme.font.color.dark}
      />
      <Text
        text={getPacketTypeLabel(packetType)}
        x={10}
        y={10}
        fill={
          packetType === "trade"
            ? CarmaTheme.color.black
            : CarmaTheme.color.white
        }
        fontFamily={CarmaTheme.font.family}
        fontStyle="bold"
        fontSize={28}
      />

      <TextPath
        text={labelreg}
        fontFamily={CarmaTheme.font.family}
        fontSize={CarmaTheme.font.size.large}
        x={10}
        y={0}
        fill={
          packetType === "trade"
            ? CarmaTheme.color.callToAction
            : CarmaTheme.color.white
        } //Put this back in textColor
        verticalAlign="middle"
        align="left"
        listening={false}
        data={`M 5, ${height - 5} L 5, ${height - carWidth}`}
      />
      <TextPath
        text={labelbold}
        fontFamily={CarmaTheme.font.family}
        fontSize={CarmaTheme.font.size.large}
        fontStyle="bold"
        x={10}
        y={0}
        fill={
          packetType === "trade"
            ? CarmaTheme.color.callToAction
            : CarmaTheme.color.white
        }
        verticalAlign="middle"
        align="left"
        listening={false}
        data={`M 5, ${height - carWidth} L 5, ${height - 100}`}
      />
      {packetType !== "treasury" && (
        <>
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
        </>
      )}
    </Group>
  );
};
