// display for the current score

import {CarmaTheme} from "../theme/CarmaTheme";
import {Rect, Text} from "react-konva";
import { Score as ScoreType } from './types';

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

type ScoreProps = {
  score: ScoreType;
  padding?: number;
} & ShapeProps;

const textHeight = 20;

export const Score = ({
  x,
  y,
  width = 300,
  height = 100,
  padding = 5,
  score,
}: ScoreProps) => {
  console.log('Score', score);

  const halfWidth = width / 2;

  return (
    <>
      <Rect
        width={width}
        height={height}
        fill={CarmaTheme.color.background}
        stroke={CarmaTheme.color.border}
        x={x}
        y={y}
      />
      <Text
        text={score.packetsCompleted.toString()}
        fill={CarmaTheme.font.color.darkest}
        fontFamily={CarmaTheme.font.family}
        fontSize={CarmaTheme.font.size.large}
        x={x + padding}
        y={y + padding}
        width={halfWidth - (2 * padding)}
        height={textHeight}
      />
    </>
  )
};
