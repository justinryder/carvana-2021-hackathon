import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Stage, Layer, Rect, Circle } from 'react-konva';

function App() {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={50} height={50} fill="red" onClick={() => alert('clicked rect')} />
        <Circle x={200} y={200} stroke="black" radius={50} onClick={() => alert('clicked circle')} />
      </Layer>
    </Stage>
  );
}

export default App;
