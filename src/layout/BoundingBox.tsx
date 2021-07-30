import { Rect } from "react-konva";
import { CarmaTheme } from "../theme/CarmaTheme";
import React from "react";
import { Bounds } from "./types";

export type BoundingBoxProps = Bounds & React.ComponentProps<typeof Rect>;

export const BoundingBox = ({
  x,
  y,
  width,
  height,
  ...props
}: BoundingBoxProps) => (
  <Rect
    x={x}
    y={y}
    width={width}
    height={height}
    fill={CarmaTheme.color.background}
    stroke={CarmaTheme.color.border}
    {...props}
  />
);
