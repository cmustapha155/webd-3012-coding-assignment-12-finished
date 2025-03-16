import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// Meta object containing component metadata
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

// Stories
export const Primary: Story = {
  args: {
    text: "Click Me",
    className: "button",
    id: "",
    hoverBackgroundColor: "", // Default (#3284ad) set in Button.tsx
    type: "button",
    onClick: () => console.log("Click"),
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    text: "Click Me",
    className: "button",
    id: "",
    hoverBackgroundColor: "", // Default (#3284ad) set in Button.tsx
    type: "button",
    onClick: () => {}, // No behaviour
    disabled: true,
  },
};

export const PurpleGrey: Story = {
  args: {
    text: "Click Me",
    className: "button",
    id: "",
    hoverBackgroundColor: "#4c5172",
    type: "button",
    onClick: () => console.log("Click"),
    disabled: false,
  },
};
