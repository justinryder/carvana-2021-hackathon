import { Group, Layer, Rect, Text } from "react-konva";
import { Heading } from "./Heading";
import { useWindowBounds } from "../useWindowSize";
import { layoutBox, moveBelow } from "../layout/layoutBox";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useAnimationFrame } from "../useAnimationFrame";
import { CarmaTheme } from "../theme/CarmaTheme";

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const names = [
  "Team 115 Degrees",
  ...shuffle(["Justin Ryder", "Cesar Avitia", "Logan Lake", "Cole Harris"]),
];

// pixels per second
const scrollSpeed = 80;

export const CreditsPage = () => {
  const windowBounds = useWindowBounds();

  const [offset, setOffset] = useState(windowBounds.height);

  useEffect(() => {
    if (windowBounds.height) {
      setOffset(windowBounds.height);
    }
  }, [windowBounds.height]);

  // lol don't ever do this in a real app, but this is a hackathon so who cares?
  const update = useCallback(
    (deltaTime) => {
      const newOffset = offset - scrollSpeed * deltaTime;
      if (newOffset < -windowBounds.height) {
        setOffset(windowBounds.height);
      } else {
        setOffset(newOffset);
      }
    },
    [offset, windowBounds.height]
  );

  useAnimationFrame(update);

  const bounds = layoutBox({
    bounds: windowBounds,
    width: 500,
    height: 500,
    align: "top center",
    padding: 50,
  });

  const headingBounds = layoutBox({
    bounds: {
      ...bounds,
      x: 0,
      y: 50,
    },
    width: 500,
    height: 20,
    align: "top center",
  });

  const credits = names.reduce((result, name, index) => {
    const isFirst = index === 0;

    result.push({
      name,
      bounds: moveBelow({
        bounds: isFirst ? headingBounds : result[index - 1].bounds,
        margin: isFirst ? 200 : 100,
      }),
    });

    return result;
  }, []);

  return (
    <Layer>
      <Rect {...windowBounds} fill={CarmaTheme.color.background} />
      <Group {...windowBounds} y={offset}>
        <Group {...bounds}>
          <Heading
            text="Credits"
            // fontSize={CarmaTheme.font.size.xxlarge}
            fontSize={72}
            {...headingBounds}
          />
          {credits.map((credit) => (
            <Heading
              key={credit.name}
              text={credit.name}
              // fontSize={CarmaTheme.font.size.xlarge}
              fontSize={56}
              {...credit.bounds}
            />
          ))}
        </Group>
      </Group>
    </Layer>
  );
};
