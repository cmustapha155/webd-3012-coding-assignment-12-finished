import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

// Meta object containing component metadata
const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

// Stories
export const Primary: Story = {
  args: {
    text: "Label Text",
    className: "label",
    id: "",
    htmlFor: "",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    text: "Label Text",
    className: "label",
    id: "",
    htmlFor: "",
    disabled: true,
  },
};

export const PurpleGrey: Story = {
  args: {
    text: "Label Text",
    className: "label",
    id: "",
    htmlFor: "",
    disabled: false,
    textColor: "#4c5172",
  },
};
