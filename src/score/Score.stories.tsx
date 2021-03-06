import React, { useReducer } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Score } from "./Score";
import { initialState, scoreReducer } from "./scoreReducer";
import { Button } from "../inputs/Button";
import ScoreActions from "./ScoreActions";

export default {
  title: "Score",
  component: Score,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Score>;

export const Primary: ComponentStory<typeof Score> = (args) => {
  const [score, dispatch] = useReducer(scoreReducer, initialState);

  return (
    <>
      <Score
        {...args}
        score={{
          money: 1234.42,
          packetsCompleted: 82652346,
          incomePerPacket: 3.14,
        }}
      />
      {/*{[1, 5, 10, 25, 50, 100].map((cost, index) =>*/}
      {/*  <Button*/}
      {/*    key={cost}*/}
      {/*    onClick={() => dispatch(ScoreActions.upgradePurchased(cost))}*/}
      {/*    x={5 + 125 * index}*/}
      {/*    y={200}*/}
      {/*    label={`Purchase Upgrade ($${cost})`}*/}
      {/*  />*/}
      {/*)}*/}
      {/*<Button*/}
      {/*  onClick={() => dispatch(ScoreActions.packetCompleted())}*/}
      {/*  x={5}*/}
      {/*  y={250}*/}
      {/*  label="Complete Packet"*/}
      {/*/>*/}
    </>
  );
};
Primary.storyName = "Score";
Primary.args = {
  x: 5,
  y: 5,
  // width: 200,
  // height: 200,
};
