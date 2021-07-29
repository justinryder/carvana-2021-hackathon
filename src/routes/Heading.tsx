import { Text } from 'react-konva';
import {CarmaTheme} from "../theme/CarmaTheme";

export const Heading = ({ text, x = 0, y = 0, width = 400, height = 100, fontSize = CarmaTheme.font.size.xxlarge }) => {
  return (
    <Text
      x={x}
      y={y}
      width={width}
      height={height}
      text={text}
      fontStyle="bold"
      fontFamily={CarmaTheme.font.family}
      fontSize={fontSize}
      align="center"
      verticalAlign="middle"
    />
  );
};
