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
      <Button htmlType="default">Default</Button>
      <Button htmlType="default" size="lg">
        Default Large
      </Button>
      <Button htmlType="default" disabled>
        Default Disabled
      </Button>
      <Button htmlType="white">White</Button>
      <Button htmlType="white" disabled>
        White Disabled
      </Button>
      <Button htmlType="grey">Gray</Button>
      <Button htmlType="grey" disabled>
        Gray Disabled
      </Button>
      <Button htmlType="blue-border">Blue Border</Button>
      <Button htmlType="blue-border" disabled>
        Blue Border Disabled
      </Button>
      <Button htmlType="transparent">Transparent</Button>
      <Button htmlType="transparent" disabled>
        Transparent Disabled
      </Button>
    </div>
  ),
};