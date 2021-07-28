// display for the current score

import {CarmaTheme} from "../theme/CarmaTheme";
import {Rect} from "react-konva";
import { Score as ScoreType } from './types';

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

type ScoreProps = {
  score: ScoreType;
} & ShapeProps;

export const Score = ({
  x,
  y,
  width = 300,
  height = 100,
  score,
}: ScoreProps) => {
  return (
    <Rect
      width={width}
      height={height}
      fill={CarmaTheme.color.background}
      stroke={CarmaTheme.color.border}
      x={x}
      y={y}
    />
  )
};
