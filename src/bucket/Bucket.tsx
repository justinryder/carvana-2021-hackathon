import { ShapeProps } from "../types/shapes";
import { FunctionComponent } from "react";
import { Group, Rect, Text } from "react-konva";
import { CarmaTheme } from "../theme/CarmaTheme";
import {getPacketsCompleteByType} from "../upgrade/upgradeSlice";
import {useSelector} from "react-redux";
import {PacketType} from "../packets/types";

type BucketProps = {
  fill?: string;
  stroke?: string;
  label: string;
  packetType: PacketType;
} & ShapeProps;

export const Bucket: FunctionComponent<BucketProps> = ({
  fill = CarmaTheme.color.team.insideAdvocate,
  stroke = CarmaTheme.color.black,
  label,
  x,
  y,
  width = 100,
  height = 120,
  packetType,
}) => {
  const packetsCompleteByType = useSelector(getPacketsCompleteByType);

  return (
    <Group x={x} y={y}>
      <Rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
      />
      <Text
        text={label}
        x={0}
        y={10}
        width={width}
        fill={CarmaTheme.color.black}
        fontStyle="bold"
        fontSize={CarmaTheme.font.size.xxlarge}
        fontFamily={CarmaTheme.font.family}
        align="center"
      />

      <Text
        text={`Completed (${packetsCompleteByType[packetType]})`}
        x={0}
        y={40}
        width={width}
        fill={CarmaTheme.color.black}
        fontStyle="bold"
        fontSize={CarmaTheme.font.size.medium}
        fontFamily={CarmaTheme.font.family}
        align="center"
      />
    </Group>
  );
};
