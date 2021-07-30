import {Game} from "../Game";
import {Provider} from "react-redux";
import {store} from "../app/store";
import {Layer, Rect} from "react-konva";
import React from "react";
import {CarmaTheme} from "../theme/CarmaTheme";
import {useWindowBounds} from "../useWindowSize";

export const PlayPage = () => {
  const windowBounds = useWindowBounds();
  return (
    <Provider store={store}>
      <Layer>
        <Rect {...windowBounds} fill={CarmaTheme.color.background} />
        <Game />
      </Layer>
    </Provider>
  );
}
