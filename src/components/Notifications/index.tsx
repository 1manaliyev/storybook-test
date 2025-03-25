import { FC } from "react";
import { NotificationItems } from "./notificationItems";
import { NotificationStoreProvider } from "./store/NotificationStore";

interface Props{
  children?: JSX.Element;
}

const Notifications: FC<Props> = ({ children }) => {
  return (
    <NotificationStoreProvider>
      {children}
      <NotificationItems/>
    </NotificationStoreProvider>
  );
};

export default Notifications;
