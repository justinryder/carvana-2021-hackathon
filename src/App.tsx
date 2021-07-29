import "./App.css";
import {Layer, Stage} from "react-konva";
import {Provider} from "react-redux";
import {store} from "./app/store";
import React from "react";
import {Game} from "./Game";
import {useWindowSize} from "./useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <Stage width={width} height={height}>
      <Provider store={store}>
        <Layer>
          <Game/>
        </Layer>
      </Provider>
    </Stage>
  );
}

export default App;
