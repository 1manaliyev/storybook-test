import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button text",
    htmlType: "default",
  },
};

export const DefaultLarge: Story = {
  args: {
    children: "Button text",
    htmlType: "default",
    size: "lg"
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: "Button text",
    htmlType: "default",
    disabled: true,
  },
};

export const White: Story = {
  args: {
    children: "Button text",
    htmlType: "white",
  },
};

export const WhiteDisabled: Story = {
  args: {
    children: "Button text",
    htmlType: "white",
    disabled: true,
  },
};

export const Gray: Story = {
  args: {
    children: "Button text",
    htmlType: "grey",
  },
};

export const GrayDisabled: Story = {
  args: {
    children: "Button text",
    htmlType: "grey",
    disabled: true,
  },
};

export const BlueBorder: Story = {
  args: {
    children: "Button text",
    htmlType: "blue-border",
  },
};

export const BlueBorderDisabled: Story = {
  args: {
    children: "Button text",
    htmlType: "blue-border",
    disabled: true,
  },
};

export const Transparent: Story = {
  args: {
    children: "Button text",
    htmlType: "transparent",
  },
};

export const TransparentDisabled: Story = {
  args: {
    children: "Button text",
    htmlType: "transparent",
    disabled: true,
  },
};