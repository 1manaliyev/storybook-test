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

export const AllButtons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h3>Default</h3>
      <Button htmlType="default">Default</Button>
      <h3>Default Large</h3>
      <Button htmlType="default" size="lg">
        Default Large
      </Button>
      <h3>Default Disabled</h3>
      <Button htmlType="default" disabled>
        Default Disabled
      </Button>
      <h3>White</h3>
      <Button htmlType="white">White</Button>
      <h3>White Disabled</h3>
      <Button htmlType="white" disabled>
        White Disabled
      </Button>
      <h3>Grey</h3>
      <Button htmlType="grey">Gray</Button>
      <h3>Grey Disabled</h3>
      <Button htmlType="grey" disabled>
        Gray Disabled
      </Button>
      <h3>Blue Bordered</h3>
      <Button htmlType="blue-border">Blue Border</Button>
      <h3>Blue Bordered Disabled</h3>
      <Button htmlType="blue-border" disabled>
        Blue Border Disabled
      </Button>
      <h3>Transparent</h3>
      <Button htmlType="transparent">Transparent</Button>
      <h3>Transparent Disabled</h3>
      <Button htmlType="transparent" disabled>
        Transparent Disabled
      </Button>
    </div>
  ),
};