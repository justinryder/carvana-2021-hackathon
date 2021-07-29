import {Group, Line, Rect, TextPath} from 'react-konva';
import {ShapeProps} from "../types/shapes";
import {FunctionComponent} from "react";
import {CarmaTheme} from "../theme/CarmaTheme";

type EnvelopeProps = {

} & ShapeProps;

export const Envelope: FunctionComponent<EnvelopeProps> = ({ x, y, height, width}) => {
  const labelreg = "CAR";
  const labelbold ="VANA";
  const carWidth = 32;
  return (
    <Group>
      <Rect
        width={width}
        height={height}
        x={0}
        y={0}
        fill={CarmaTheme.color.white}
      />
      <TextPath
        text={labelreg}
        fontFamily={CarmaTheme.font.family}
        width={width}
        height={height}
        x={10}
        y={0}
        fill={CarmaTheme.color.primary}
        verticalAlign="middle"
        align="left"
        listening={false}
        data={`M 0, ${height - 5} L 0, ${height - carWidth}`}
      />
      <TextPath
        text={labelbold}
        fontFamily={CarmaTheme.font.family}
        fontStyle="bold"
        width={width}
        height={height}
        x={10}
        y={0}
        fill={CarmaTheme.color.primary}
        verticalAlign="middle"
        align="left"
        listening={false}
        data={`M 0, ${height - carWidth} L 0, ${height - 80}`}
      />
      <Line
        stroke={"black"}
        strokeWidth={1}
        points={[width - 20, 3, width - 2, 3]}
      />
      <Line
        stroke={"black"}
        strokeWidth={1}
        points={[width - 13, 6, width - 2, 6]}
      />
      <Line
        stroke={"black"}
        strokeWidth={1}
        points={[width - 10, 9, width - 2, 9]}
      />
    </Group>
  )
};
