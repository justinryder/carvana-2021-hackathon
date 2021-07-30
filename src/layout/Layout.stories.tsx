import React from "react";
import { BoundingBox } from "./BoundingBox";
import { layoutBox } from "./layoutBox";

export default {
  title: "Layout",
  argTypes: {
    align: {
      options: [
        "top left",
        "center left",
        "bottom left",
        "top center",
        "center center",
        "bottom center",
        "top right",
        "center right",
        "bottom right",
      ],
      control: { type: "select" },
    },
    padding: {
      control: {
        type: "range",
        min: -10,
        max: 100,
      },
    },
    width: {
      control: {
        type: "range",
        min: 1,
        max: 100,
      },
    },
    height: {
      control: {
        type: "range",
        min: 1,
        max: 100,
      },
    },
  },
};

const box = {
  x: 15,
  y: 25,
  width: 200,
  height: 150,
};

export const LayoutBox = ({ align, padding, width, height }) => {
  return (
    <>
      <BoundingBox {...box} />

      <BoundingBox
        {...layoutBox({
          bounds: box,
          align,
          padding,
          width,
          height,
        })}
      />
    </>
  );
};

LayoutBox.args = {
  align: "center right",
  padding: 15,
  width: 50,
  height: 50,
};
