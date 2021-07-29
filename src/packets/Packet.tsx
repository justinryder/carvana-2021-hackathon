// visual for an individual reg packet

import {useState} from "react";
import {KonvaNodeEvents, Rect, Group, TextPath} from "react-konva";
import Konva from "konva";
import { CarmaTheme } from '../theme/CarmaTheme';

type ShapeProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  draggable: boolean;
}

type PacketProps = {
  labelreg: string | undefined;
  labelbold: string | undefined;
  onClick: KonvaNodeEvents['onClick'];
  backgroundColor?: string;
  textColor?: string;
} & ShapeProps;

export const Packet = ({
  labelreg,
  labelbold,
  backgroundColor = CarmaTheme.color.callToAction,
  textColor = CarmaTheme.font.color.white,
  x,
  y,
  width,
  height,
  onClick,
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

  const finalWidth = width * scalar;
  const finalHeight = height * scalar;
  const deltaWidth = width - finalWidth;
  const deltaHeight = height - finalHeight;
  const halfDeltaWidth = deltaWidth / 2;
  const halfDeltaHeight = deltaHeight / 2;

  return (
    <>
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
      // onMouseDown={handleMouseDown}
      // onMouseUp={handleMouseUp}
      >
      <Rect
        width={finalWidth}
        height={finalHeight}
        x={x + halfDeltaWidth}
        y={y + halfDeltaHeight}
        fill={backgroundColor}
      />
      <TextPath
        text={labelreg}
        fontFamily={CarmaTheme.font.family}
        width={finalWidth}
        height={finalHeight}
        x={x + halfDeltaWidth}
        y={y + halfDeltaHeight}
        fill={textColor}
        verticalAlign="middle"
        align="center"
        listening={false}
        data={`M ${x - (width/2)},${y + height + 5} L ${x - (width/2)},${y-40}`}
      />
      <TextPath
        text={labelbold}
        fontFamily={CarmaTheme.font.family}
        fontStyle="bold"
        width={finalWidth}
        height={finalHeight}
        x={x + halfDeltaWidth}
        y={y + halfDeltaHeight}
        fill={textColor}
        verticalAlign="middle"
        align="center"
        listening={false}
        data={`M ${x - (width/2)},${y + height - 47} L ${x - (width/2)},${y-40}`}
      />
      </Group>
    </>
    
  )
};

