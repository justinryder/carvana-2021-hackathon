import {Game} from "../Game";
import {Provider} from "react-redux";
import {store} from "../app/store";
import {Layer} from "react-konva";
import React from "react";

export const PlayPage = () => {
  return (
    <Provider store={store}>
      <Layer>
        <Game />
      </Layer>
    </Provider>
  );
}
