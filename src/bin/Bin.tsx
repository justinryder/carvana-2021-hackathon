import { Group, Text, Rect } from "react-konva";
import { CarmaTheme } from "../theme/CarmaTheme";
import { layoutBox, moveBelow } from "../layout/layoutBox";
import { Envelope } from "../envelope/Envelope";
import React from "react";
import { PACKET_HEIGHT, PACKET_WIDTH } from "../constants";

export const Bin = ({
  title,
  x,
  y,
  width,
  height,
  onClick = () => {},
  hasEnvelope,
}) => {
  const bounds = {
    x,
    y,
    width,
    height,
  };

  const textBounds = layoutBox({
    bounds,
    width,
    height,
    padding: 10,
    align: "top center",
  });

  const envelopeBounds = layoutBox({
    bounds,
    width: PACKET_WIDTH,
    height: PACKET_HEIGHT,
    align: "bottom center",
    padding: 10,
  });

  return (
    <>
      <Rect
        {...bounds}
        fill="#666666"
        stroke="#333333"
        onClick={hasEnvelope ? onClick : null}
      />
      <Text
        text={title}
        fontFamily={CarmaTheme.font.family}
        fontSize={CarmaTheme.font.size.large}
        fill={CarmaTheme.font.color.white}
        align="center"
        {...textBounds}
        listening={false}
      />
      {hasEnvelope && <Envelope {...envelopeBounds} />}
    </>
  );
};
