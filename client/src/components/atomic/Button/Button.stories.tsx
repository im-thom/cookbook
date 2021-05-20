import React from "react";
import { Story } from "@storybook/react";

import Button from "./index";
import { ButtonProps } from "./types";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  /*👇 The args you need here will depend on your component */
  children: "Click me!",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  /*👇 The args you need here will depend on your component */
  children: "Secondary Btn!",
  type: "ghost",
};
