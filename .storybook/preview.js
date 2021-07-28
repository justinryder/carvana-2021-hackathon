import {Layer, Stage} from "react-konva";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Story />
      </Layer>
    </Stage>
  ),
];
