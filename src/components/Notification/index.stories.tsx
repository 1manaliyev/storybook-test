import { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./notification";
import { NotificationsStoreProvider } from "./store/NotificationsStore";

const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <NotificationsStoreProvider>
        <Story/>
      </NotificationsStoreProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof Notification>;

// export const NotificationWarning: Story = {
//   render: () => {
//     const [components, setComponents] = useState<{ id: number }[]>([]);

//     const removeComponent = useCallback((id: number) => {
//       setComponents((prev) => prev.filter((comp) => comp.id !== id));
//     }, []);

//     const [status, setStatus] = useState<"success" | "warning" | "attention">(
//       "warning"
//     );
//     const [title, setTitle] = useState("warning");

//     return (
//       <Notification
//         id={1}
//         onRemove={removeComponent}
//         title={title}
//         status={status}
//         setTitle={setTitle}
//         setStatus={setStatus}
//       />
//     );
//   },
// };

export const Success: Story = {
  args: {
    id: 1,
    onRemove: () => {},
    title: "Success",
    status: "success",
    setTitle: () => {},
    setStatus: () => {},
  },
};

export const Warning: Story = {
  args: {
    id: 1,
    onRemove: () => {},
    title: "Warning",
    status: "warning",
    setTitle: () => {},
    setStatus: () => {},
  },
};

export const Error: Story = {
  args: {
    id: 1,
    onRemove: () => {},
    title: "Error!",
    status: "error",
    setTitle: () => {},
    setStatus: () => {},
  },
};

export const Copied: Story = {
  args: {
    id: 1,
    onRemove: () => {},
    title: "Copied",
    status: "copied",
    setTitle: () => {},
    setStatus: () => {},
  },
};