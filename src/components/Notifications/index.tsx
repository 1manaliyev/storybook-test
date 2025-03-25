import { FC } from "react";
import { Notification } from "./notification";
import s from "./NotificationItems.module.scss";
import { NotificationStoreProvider, useNotificationStore } from "./store/NotificationStore";

interface Props{
  children?: JSX.Element;
}

const Notifications: FC<Props> = ({ children }) => {
  const { components, removeComponent, title, status, text } =
    useNotificationStore();

  return (
    <NotificationStoreProvider>
      {children}
      <div className={s.notifications}>
        {components.map((comp) => (
          <Notification
            key={comp.id}
            id={comp.id}
            onRemove={removeComponent}
            title={title}
            status={status}
            text={text}
          />
        ))}
      </div>
    </NotificationStoreProvider>
  );
};

export default Notifications;
