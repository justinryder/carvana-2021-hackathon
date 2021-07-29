import {Group, Layer, Text} from 'react-konva';
import {Heading} from "./Heading";
import {useWindowBounds} from "../useWindowSize";
import {layoutBox, moveBelow} from "../layout/layoutBox";

export const CreditsPage = () => {
  const windowBounds = useWindowBounds();

  const bounds = layoutBox({
    bounds: windowBounds,
    width: 400,
    height: 500,
    align: 'top center',
    padding: 50,
  });

  return (
    <Layer>
      <Group {...bounds}>
        <Heading
          text="Credits"
        />
      </Group>
    </Layer>
  );
}
