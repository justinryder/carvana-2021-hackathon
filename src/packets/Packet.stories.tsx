import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Packet } from './Packet';

export default {
  title: 'Example/Packet',
  component: Packet,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Packet>;

const Template: ComponentStory<typeof Packet> = (args) => <Packet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labelreg: "CAR",
  labelbold:"VANA",
  onClick: () => console.log('Now drag?'),
  x: 50,
  y: 50,
  width: 85,
  height: 110,
};