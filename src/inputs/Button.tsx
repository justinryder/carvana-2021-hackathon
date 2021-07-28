import {FunctionComponent, useState} from "react";
import {KonvaNodeEvents, Rect, Text} from "react-konva";
import Konva from "konva";

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

type ButtonProps = {
  children: string | undefined;
  onClick: KonvaNodeEvents['onClick'];
  backgroundColor?: string;
  backgroundColorHover?: string;
  textColor?: string;
} & ShapeProps;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  backgroundColor = 'red',
  backgroundColorHover = 'blue',
  textColor = 'black',
  x,
  y,
  width = 100,
  height = 100,
  onClick,
}) => {
  const [hovering, setHovering] = useState(false);

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
      container.style.cursor = 'pointer';
    }
  };

  return (
    <>
      <Rect
        width={width}
        height={height}
        fill={hovering ? backgroundColorHover : backgroundColor}
        x={x}
        y={y}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Text
        text={children}
        width={width}
        height={height}
        x={x}
        y={y}
        fill={textColor}
        verticalAlign="middle"
        align="center"
        listening={false}
      />
    </>
  )
};

