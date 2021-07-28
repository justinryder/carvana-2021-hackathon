import React from 'react';
import './App.css';
import { Stage, Layer, Rect, Circle } from 'react-konva';
import { Upgrade } from './upgrade/Upgrade';
import { Upgrade as UpgradeType } from './upgrade/types';

const upgrade: UpgradeType = {
  name: 'Open Envelope',
  description: 'An advanced robot that we sourced from the future, capable or opening envelopes at lightning speed.',
  cost: 3.50,
  isPurchased: false,
  apply: () => { }
}

function App() {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Upgrade
          upgrade={upgrade}
          x={100}
          y={100}
          onPurchase={() => console.log('purchased')}
          onRefund={() => console.log('refunded')}
        />
      </Layer>
      {/* <Layer>
        <Rect x={100} width={50} height={50} fill="red" onClick={() => alert('clicked rect 2')} />
        <Circle x={400} y={200} stroke="black" radius={50} onClick={() => alert('clicked circle 2')} />
      </Layer> */}
    </Stage>
  );
}

export default App;
