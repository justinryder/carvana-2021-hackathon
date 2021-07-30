// visual for an individual reg packet

import {useState} from "react";
import {KonvaNodeEvents, Rect, Group, TextPath, Line} from "react-konva";
import Konva from "konva";
import { CarmaTheme } from '../theme/CarmaTheme';

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
  draggable: boolean;
}

type PacketProps = {
  labelreg?: string | undefined;
  labelbold?: string | undefined;
  onClick?: KonvaNodeEvents['onClick'];
  onDrag: KonvaNodeEvents['onDragMove'];
  onDragEnd: KonvaNodeEvents['onDragEnd'];
  backgroundColor?: string;
  textColor?: string;
} & ShapeProps;

export const Packet = ({
  labelreg = 'CAR',
  labelbold = 'VANA',
  backgroundColor = CarmaTheme.color.callToAction,
  textColor = CarmaTheme.font.color.white,
  x,
  y,
  width = 85,
  height = 100,
  onClick,
  onDrag,
  onDragEnd,
  draggable
}: PacketProps) => {
  const [clicking, setClicking] = useState(false);

  const handleMouseOver = (event: Konva.KonvaEventObject<MouseEvent>) => {

    const container = event.target.getStage()?.container();
    if (container) {
      container.style.cursor = 'pointer';
    }
  };

  const handleMouseOut = (event: Konva.KonvaEventObject<MouseEvent>) => {

    const container = event.target.getStage()?.container();
    if (container) {
      container.style.cursor = 'default';
    }
  };

  const handleMouseDown = (event: Konva.KonvaEventObject<MouseEvent>) => {
    setClicking(true);
  };

  const handleMouseUp = (event: Konva.KonvaEventObject<MouseEvent>) => {
    setClicking(false);
  };

  const scalar = clicking ? 1.1 : 1;

  const carWidth = 31;

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
      onDragMove={onDrag}
      onDragEnd={onDragEnd}
    >
      <Rect
        width={width}
        height={height}
        x={0}
        y={0}
        fill={backgroundColor}
      />
      <TextPath
        text={labelreg}
        fontFamily={CarmaTheme.font.family}
        width={width}
        height={height}
        x={10}
        y={0}
        fill={textColor}
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
        fill={textColor}
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
  )
};

