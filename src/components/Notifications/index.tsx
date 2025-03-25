import { FC } from "react";
import { Notification } from "./notification";
import s from "./NotificationItems.module.scss";
import { useNotificationsStore } from "./store/NotificationsStore";

interface Props{
  children?: JSX.Element;
}

const Notifications: FC<Props> = ({ children }) => {
  const { components, removeComponent, title, status, text } =
    useNotificationsStore();

  return (
    <>
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
    </>
  );
};

export default Notifications;
