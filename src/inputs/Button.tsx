import {useState} from "react";
import {KonvaNodeEvents, Rect, Text} from "react-konva";
import Konva from "konva";
import { CarmaTheme } from '../theme/CarmaTheme';
import {layoutBox} from "../layout/layoutBox";

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

type ButtonProps = {
  label: string | undefined;
  onClick: KonvaNodeEvents['onClick'];
  backgroundColor?: string;
  backgroundColorHover?: string;
  textColor?: string;
} & ShapeProps;

export const Button = ({
  label,
  backgroundColor = CarmaTheme.color.callToAction,
  backgroundColorHover = CarmaTheme.color.callToActionInteractive,
  textColor = CarmaTheme.font.color.white,
  x,
  y,
  width = 120,
  height = 45,
  onClick,
}: ButtonProps) => {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const handleMouseOver = (event: Konva.KonvaEventObject<MouseEvent>) => {
    setHovering(true);

    const container = event.target.getStage()?.container();
    if (container) {
      container.style.cursor = 'pointer';
    }
  };

  const handleMouseOut = (event: Konva.KonvaEventObject<MouseEvent>) => {
    setHovering(false);

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

  const scalar = clicking ? 0.9 : 1;

  const finalWidth = width * scalar;
  const finalHeight = height * scalar;
  const deltaWidth = width - finalWidth;
  const deltaHeight = height - finalHeight;
  const halfDeltaWidth = deltaWidth / 2;
  const halfDeltaHeight = deltaHeight / 2;

  return (
    <>
      <Rect
        width={width}
        height={height}
        x={x}
        y={y}
        fill="transparent"
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <Rect
        width={finalWidth}
        height={finalHeight}
        x={x + halfDeltaWidth}
        y={y + halfDeltaHeight}
        fill={hovering ? backgroundColorHover : backgroundColor}
        listening={false}
      />
      <Text
        {...layoutBox({
          bounds: {
            x,
            y,
            width,
            height,
          },
          align: 'center center',
          width,
          height,
          padding: 10,
        })}
        text={label}
        fontFamily={CarmaTheme.font.family}
        fontStyle="bold"
        fill={textColor}
        verticalAlign="middle"
        align="center"
        ellipsis
        listening={false}
      />
    </>
  )
};

