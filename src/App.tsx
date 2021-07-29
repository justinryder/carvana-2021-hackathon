import "./App.css";
import {Layer, Stage} from "react-konva";
import {Provider} from "react-redux";
import {store} from "./app/store";
import React from "react";
import {useWindowSize} from "./useWindowSize";
import {BrowserRouter} from "react-router-dom";
import { Routes } from './routes/Routes';

function App() {
  const { width, height } = useWindowSize();

  return (
    <Stage width={width} height={height}>
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
    </Stage>
  );
}

export default App;
