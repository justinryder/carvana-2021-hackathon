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
  disabled?: boolean;
  label: string | undefined;
  onClick: KonvaNodeEvents['onClick'];
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorDisabled?: string;
  textColor?: string;
  fontSize?: number;
} & ShapeProps;

export const Button = ({
  disabled,
  label,
  backgroundColor = CarmaTheme.color.callToAction,
  backgroundColorHover = CarmaTheme.color.callToActionInteractive,
  backgroundColorDisabled = CarmaTheme.color.shadow,
  textColor = CarmaTheme.font.color.white,
  fontSize = CarmaTheme.font.size.normal,
  x,
  y,
  width = 120,
  height = 45,
  onClick,
}: ButtonProps) => {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const handleMouseOver = (event: Konva.KonvaEventObject<MouseEvent>) => {
    if (disabled) {
      return;
    }

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
    if (disabled) {
      return;
    }

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

  let bgColor = backgroundColor;
  if (hovering) {
    bgColor = backgroundColorHover;
  }
  if (disabled) {
    bgColor = backgroundColorDisabled;
  }

  return (
    <>
      <Rect
        width={width}
        height={height}
        x={x}
        y={y}
        fill="transparent"
        onClick={disabled ? null : onClick}
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
        fill={bgColor}
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
        fontSize={fontSize}
        fill={textColor}
        verticalAlign="middle"
        align="center"
        ellipsis
        listening={false}
      />
    </>
  )
};

