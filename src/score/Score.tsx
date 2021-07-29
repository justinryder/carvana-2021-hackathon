// display for the current score

import {CarmaTheme} from "../theme/CarmaTheme";
import {Group, Rect, Text} from "react-konva";
import { Score as ScoreType } from './types';
import {padBox} from "../layout/padBox";
import {layoutBox} from "../layout/layoutBox";

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

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const Score = ({
  x,
  y,
  width = 300,
  height = 100,
  padding = 5,
  score,
}: ScoreProps) => {
  const bounds = padBox({
    x: 0,
    y: 0,
    width,
    height,
  }, padding);

  const packetsCompletedBounds = layoutBox({
    bounds,
    width: bounds.width,
    height: textHeight,
  });

  const moneyBounds = layoutBox({
    bounds: {
      ...bounds,
      y: packetsCompletedBounds.y + packetsCompletedBounds.height + padding,
    },
    width: bounds.width,
    height: textHeight,
  });

  const incomePerPacketBounds = layoutBox({
    bounds: {
      ...bounds,
      y: moneyBounds.y + moneyBounds.height + padding,
    },
    width: bounds.width,
    height: textHeight,
  });

  return (
    <Group
      x={x}
      y={y}
      width={width}
      height={height}
    >
      <Rect
        width={width}
        height={height}
        fill={CarmaTheme.color.background}
        stroke={CarmaTheme.color.border}
        x={0}
        y={0}
      />
      <Text
        text={`Packets Completed: ${score.packetsCompleted.toString()}`}
        fill={CarmaTheme.font.color.darkest}
        fontFamily={CarmaTheme.font.family}
        fontSize={CarmaTheme.font.size.large}
        {...packetsCompletedBounds}
      />
      <Text
        text={`Money: ${currencyFormatter.format(score.money)}`}
        fill={CarmaTheme.font.color.darkest}
        fontFamily={CarmaTheme.font.family}
        fontSize={CarmaTheme.font.size.large}
        {...moneyBounds}
      />
      <Text
        text={`Income per Packet: ${currencyFormatter.format(score.incomePerPacket)}`}
        fill={CarmaTheme.font.color.darkest}
        fontFamily={CarmaTheme.font.family}
        fontSize={CarmaTheme.font.size.large}
        {...incomePerPacketBounds}
      />
    </Group>
  )
};
