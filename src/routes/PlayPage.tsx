import { Game } from "../Game";
import { Provider } from "react-redux";
import { store } from "../app/store";
import {Image, Layer, Rect} from "react-konva";
import React from "react";
import { CarmaTheme } from "../theme/CarmaTheme";
import { useWindowBounds } from "../useWindowSize";
import useImage from "use-image";

export const PlayPage = () => {
  const [image] = useImage('/hero_image_blue_trees.png');
  const windowBounds = useWindowBounds();
  return (
    <Provider store={store}>
      <Layer>
        <Rect {...windowBounds} fill={CarmaTheme.color.background} />
        <Image {...windowBounds} image={image} />
        <Game />
      </Layer>
    </Provider>
  );
};
