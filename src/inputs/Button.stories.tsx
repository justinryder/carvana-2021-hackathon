import React from 'react';
import { ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  onClick: () => console.log('clicked button'),
  x: 50,
  y: 50,
  width: 120,
  height: 40,
};
