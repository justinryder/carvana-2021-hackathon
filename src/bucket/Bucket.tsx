import {ShapeProps} from "../types/shapes";
import {FunctionComponent} from "react";
import { Group, Rect, Text } from "react-konva";
import { CarmaTheme } from "../theme/CarmaTheme"

type BucketProps = {
  fill?: string;
  label: string;
} & ShapeProps;

export const Bucket: FunctionComponent<BucketProps> = ({ fill = CarmaTheme.color.team.insideAdvocate, label, x, y, width = 100, height = 120 }) => {
  return (
    <Group>
      <Text text={label} x={x} y={y} />
      <Rect
        x={x}
        y={y}
        offsetY={-20}
        width={width}
        height={height}
        fill={fill}
        stroke="black"
      />
    </Group>
  );
};
