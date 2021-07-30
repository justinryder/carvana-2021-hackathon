import {ShapeProps} from "../types/shapes";
import {FunctionComponent} from "react";
import { Group, Rect, Text } from "react-konva";
import { CarmaTheme } from "../theme/CarmaTheme"

type BucketProps = {
  fill?: string;
  stroke?: string;
  label: string;
} & ShapeProps;

export const Bucket: FunctionComponent<BucketProps> = ({
  fill = CarmaTheme.color.team.insideAdvocate,
  stroke = CarmaTheme.color.black,
  label,
  x,
  y,
  width = 100,
  height = 120,
}) => {
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
        fill={fill === (CarmaTheme.color.white) ? CarmaTheme.color.black : CarmaTheme.color.white}
        fontStyle="bold"
        fontSize={CarmaTheme.font.size.xxlarge}
        fontFamily={CarmaTheme.font.family}
        align="center"
      />
    </Group>
  );
};
