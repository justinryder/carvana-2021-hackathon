import {Group, Layer, Rect, Text} from 'react-konva';
import {useWindowBounds} from "../useWindowSize";
import {layoutBox} from "../layout/layoutBox";
import {Heading} from "./Heading";
import {useLinks} from "./useLinks";
import {Button} from "../inputs/Button";
import {CarmaTheme} from "../theme/CarmaTheme";

export const HomePage = () => {
  const links = useLinks();
  const windowBounds = useWindowBounds();

  const bounds = layoutBox({
    bounds: windowBounds,
    width: 500,
    height: 500,
    align: 'center center',
    padding: 50,
  });

  const headingBounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 0,
    },
    width: 400,
    height: 100,
    align: 'top center',
  });

  const subheadingBounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 50,
    },
    width: 400,
    height: 100,
    align: 'top center',
  });

  const subheading2Bounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 80,
    },
    width: 400,
    height: 100,
    align: 'top center',
  });

  const playButtonBounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 220,
    },
    width: 200,
    height: 50,
    align: 'top center',
  });

  const creditsButtonBounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 300,
    },
    width: 200,
    height: 50,
    align: 'top center',
  });

  return (
    <Layer>
      <Rect {...windowBounds} fill={CarmaTheme.color.background} />
      <Group {...bounds}>
        <Rect
          {...bounds}
          x={0}
          y={0}
          fill={CarmaTheme.color.foreground}
          stroke={CarmaTheme.color.border}
        />
        <Heading
          text="TODO Make a Cool App Name"
          fontSize={CarmaTheme.font.size.xxlarge}
          {...headingBounds}
        />
        <Heading
          text="Built By Team 115 Degrees"
          fontSize={CarmaTheme.font.size.xlarge}
          {...subheadingBounds}
        />
        <Heading
          text="@ Carvana Camp Wannahackit 2021"
          fontSize={CarmaTheme.font.size.medium}
          {...subheading2Bounds}
        />
        <Button
          {...playButtonBounds}
          onClick={links.routeToPlay}
          label="Play"
          fontSize={CarmaTheme.font.size.large}
        />
        <Button
          {...creditsButtonBounds}
          onClick={links.routeToCredits}
          label="Credits"
          fontSize={CarmaTheme.font.size.large}
        />
      </Group>
    </Layer>
  );
}
