import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CarmaTheme } from '../theme/CarmaTheme';
import { Packet } from './Packet';

export default {
  title: 'Example/Packet',
  component: Packet,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Packet>;

const Template: ComponentStory<typeof Packet> = (args) => {
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);

  console.log('x', x, 'y', y);

  return (
    <Packet
      {...args}
      x={x}
      y={y}
      onDrag={event => {
        setX(event.target.x());
        setY(event.target.y());
      }}
      onDragEnd={() => {
        alert(`Dragged to ${x}, ${y}`);
      }}
    />
  );
}

export const Primary = Template.bind({});
Primary.args = {
  labelreg: "CAR",
  labelbold:"VANA",
  backgroundColor:CarmaTheme.color.callToAction, //white, warning, success, callToAction, or error
  textColor:CarmaTheme.font.color.white, //Change to blue for white packets
  onClick: () => console.log('Now drag?'),
  width: 85,
  height: 110,
  draggable: true,
};
