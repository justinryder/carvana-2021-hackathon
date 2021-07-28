import { FunctionComponent } from 'react';
import { Rect, Text } from 'react-konva';
import { Upgrade as UpgradeType} from './types';

type ShapeProps = {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

type UpgradeProps = {
  upgrade: UpgradeType;
} & ShapeProps;


export const Upgrade: FunctionComponent<UpgradeProps> = ({
  upgrade,
  x,
  y,
  width = 100,
  height = 100
}) => {
  return (
    <>
      <Rect
        width={width}
        height={height}
        fill="red"
        x={x}
        y={y}
        onClick={() => alert('clicked rect 1')}
      />
      <Text
        text={upgrade.name}
        width={width}
        height={height}
        x={x}
        y={y}
        verticalAlign="middle"
        align="center"
      />
    </>
  )
};

