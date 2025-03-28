import { Meta, StoryObj } from "@storybook/react";
import { AddNotificationWrapper } from "./addNotificationWrapper";
import { NotificationStoreProvider } from "./store/NotificationStore";

const meta: Meta<typeof AddNotificationWrapper> = {
  title: "Components/Notification",
  component: AddNotificationWrapper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        code: `
import {Notifications} from "ooia-ui-library-test-1";
import { useNotificationStore } from "ooia-ui-library-test-1";
const {showNotifiсation} = useNotificationStore();
const onClick = () => {
    showNotifiсation(status, title, text);
}
<div onClick={onClick}>Add notification</div>
<Notifications>{...}</Notifications>`,
      },
    },
  },
  decorators: [
    (Story) => (
      <NotificationStoreProvider>
        <div style={{ minHeight: "400px" }}>
          <Story />
        </div>
      </NotificationStoreProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AddNotificationWrapper>;

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