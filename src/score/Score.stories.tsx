import React, {useReducer} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Score } from './Score';
import { Score as ScoreType } from './types';
import {initialState, scoreReducer} from "./scoreReducer";
import {Button} from "../inputs/Button";
import ScoreActions from "./ScoreActions";

export default {
  title: 'Example/Score',
  component: Score,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Score>;

const Template: ComponentStory<typeof Score> = (args) => <Score {...args} />;

export const Primary: ComponentStory<typeof Score> = (args) => {
  const [score, dispatch] = useReducer(scoreReducer, initialState);

  return (
    <>
      <Score
        {...args}
        score={score}
      />
      {[1, 5, 10, 25, 50, 100].map((cost, index) =>
        <Button
          key={cost}
          onClick={() => dispatch(ScoreActions.upgradePurchased(cost))}
          x={5 + 125 * index}
          y={200}
        >
          {`Purchase Upgrade ($${cost})`}
        </Button>
      )}
      <Button
        onClick={() => dispatch(ScoreActions.packetCompleted())}
        x={5}
        y={250}
      >
        Complete Packet
      </Button>
    </>
  );
}
Primary.args = {
  x: 5,
  y: 5,
  // width: 200,
  // height: 200,
};
