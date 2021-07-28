import {FunctionComponent} from "react";
import {KonvaNodeEvents, Rect, Text} from "react-konva";

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

type ButtonProps = {
  children: string | undefined;
  onClick: KonvaNodeEvents['onClick'];
  backgroundColor: string;
  textColor: string;
} & ShapeProps;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  backgroundColor = 'red',
  textColor = 'black',
  x,
  y,
  width = 100,
  height = 100,
  onClick,
}) => {
  return (
    <>
      <Rect
        width={width}
        height={height}
        fill={backgroundColor}
        x={x}
        y={y}
        onClick={onClick}
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

