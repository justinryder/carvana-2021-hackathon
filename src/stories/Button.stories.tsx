import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../inputs/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  onClick: () => alert('clicked button'),
};