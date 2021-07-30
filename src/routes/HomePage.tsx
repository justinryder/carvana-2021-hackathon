import {Group, Image, Layer, Rect, Text} from "react-konva";
import { useWindowBounds } from "../useWindowSize";
import { layoutBox, moveBelow } from "../layout/layoutBox";
import { Heading } from "./Heading";
import { useLinks } from "./useLinks";
import { Button } from "../inputs/Button";
import { CarmaTheme } from "../theme/CarmaTheme";
import useImage from "use-image";

export const HomePage = () => {
  const links = useLinks();
  const windowBounds = useWindowBounds();
  const [image] = useImage('/hero_image_blue_trees.png');
  const [logo] = useImage('/4_Hackathon_theme_secondary_singlecolor_light.png');

  const bounds = layoutBox({
    bounds: windowBounds,
    width: 700,
    height: 600,
    align: "center center",
    padding: 50,
  });

  const headingBounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 100,
    },
    width: 400,
    height: 20,
    align: "top center",
  });

  const subheadingBounds = moveBelow({
    bounds: headingBounds,
    margin: 60,
  });

  const subheading2Bounds = moveBelow({
    bounds: subheadingBounds,
    margin: 5,
  });

  const playButtonBounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 320,
    },
    width: 200,
    height: 50,
    align: "top center",
  });

  const creditsButtonBounds = moveBelow({
    bounds: playButtonBounds,
    margin: 20,
  });

  return (
    <Layer>
      <Rect {...windowBounds} fill={CarmaTheme.color.background} />
      <Image {...windowBounds} image={image} />
      <Image
        image={logo}
        {...layoutBox({
          bounds: windowBounds,
          // 1068x625
          width: 1068 * 0.3,
          height: 625 * 0.3,
          align: 'top left',
          padding: 25,
        })}
      />
      <Group {...bounds}>
        <Rect
          {...bounds}
          x={0}
          y={0}
          fill={CarmaTheme.color.background}
          stroke={CarmaTheme.color.border}
        />
        <Heading text="Packets, Please" fontSize={42} {...headingBounds} />
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
};
