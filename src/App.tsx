import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import { Stage, Layer, Text } from "react-konva";
import { UpgradeList } from "./upgrade/UpgradeList";

function App() {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Provider store={store}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Store List" />
          <UpgradeList x={100} y={100} />
          <Text text="Upgrade List" />
          {/* <UpgradeList x={200} y={200} upgradeBucket="upgrades" /> */}
        </Layer>
        {/* <Layer>
        <Rect x={100} width={50} height={50} fill="red" onClick={() => alert('clicked rect 2')} />
        <Circle x={400} y={200} stroke="black" radius={50} onClick={() => alert('clicked circle 2')} />
      </Layer> */}
      </Stage>
    </Provider>
  );
}

export default App;
