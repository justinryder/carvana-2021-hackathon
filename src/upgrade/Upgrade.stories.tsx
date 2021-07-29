import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Upgrade } from "./Upgrade";
import { UpgradeList } from "./UpgradeList";
import { Provider } from "react-redux";
import { store } from "../app/store";

export default {
  title: "Example/Upgrade",
  component: Upgrade,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Upgrade>;

const Template: ComponentStory<typeof Upgrade> = (args) => (
  <Upgrade {...args} />
);

const upgrade = {
  id: "open_envelope",
  name: "Open Envelope",
  description:
    "An advanced robot that we sourced from the future, capable or opening envelopes at lightning speed. ring your owner a dead bird go into a room to decide you didn't want to be in there anyway for meow meow mama yet chase the pig around the house if human is on laptop sit on the keyboard. Meowing chowing and wowing stare at ceiling. Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat munch, munch, chomp, chomp, going to catch the red dot today going to catch the red dot today, for rub face on owner, for cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Chew foot. White cat sleeps on a black shirt. Kitty kitty rub face on owner and murr i hate humans they are so annoying or licks paws. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet why must they do that where is my slave? I'm getting hungry for stare at ceiling light so this human feeds me, i should be a god. Swat turds around the house inspect anything brought into the house, yet purrrrrr. Love to play with owner's hair tie rub face on owner so this is the day but a nice warm laptop for me to sit on leave dead animals as gifts, or pushed the mug off the table. Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog, yet cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit or flex claws on the human's belly and purr like a lawnmower. I hate cucumber pls dont throw it at me toilet paper",
  cost: 3.5,
  isPurchased: false,
  apply: () => {},
};

export const Primary = Template.bind({});
Primary.args = {
  x: 5,
  y: 5,
  // width: 200,
  // height: 200,
  upgrade,
};

// @ts-ignore
export const UpgradeListComponent = () => (
  <Provider store={store}>
    Store
    <UpgradeList x={0} y={0} />
    Upgrades
    <UpgradeList x={150} y={0} upgradeBucket="upgrades" />
  </Provider>
);
