import { Meta, StoryObj } from "@storybook/react";
import { AddNotification } from "./addNotification";
import { NotificationsStoreProvider } from "./store/NotificationsStore";

const meta: Meta<typeof AddNotification> = {
  title: "Components/Notification",
  component: AddNotification,
  tags: ["autodocs"],
  parameters: {
    docs: {
      canvasHeight: 500,
    },
  },
  decorators: [
    (Story) => (
      <NotificationsStoreProvider>
        <Story />
      </NotificationsStoreProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AddNotification>;

export const Success: Story = {
  args: {
    status: "success",
    title: "Success!"
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    title: "Warning!",
  },
};

export const Error: Story = {
  args: {
    status: "error",
    title: "Error!",
  },
};

export const Copied: Story = {
  args: {
    status: "copied",
    title: "Copied",
  },
};

export const SuccessWithDescription: Story = {
  args: {
    status: "success",
    title: "Success!",
    text: "Your transaction has been successfully verified",
  },
};

export const WarningWithDescription: Story = {
  args: {
    status: "warning",
    title: "Warning!",
    text: "Your transaction has been successfully verified",
  },
};

export const ErrorWithDescription: Story = {
  args: {
    status: "error",
    title: "Error!",
    text: "Your transaction has been successfully verified",
  },
};

export const CopiedWithDescription: Story = {
  args: {
    status: "copied",
    title: "Copied!",
    text: "Your transaction has been successfully verified",
  },
};