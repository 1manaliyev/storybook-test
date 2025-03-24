import { Notification } from "./notification";
import s from "./NotificationItems.module.scss";
import { useNotificationsStore } from "./store/NotificationsStore";

const NotificationItems = () => {
  const { components, removeComponent, title, status, setTitle, setStatus } =
    useNotificationsStore();

  return (
    <div className={s.notifications}>
      {components.map((comp) => (
        <Notification
          key={comp.id}
          id={comp.id}
          onRemove={removeComponent}
          title={title}
          status={status}
          setTitle={setTitle}
          setStatus={setStatus}
        />
      ))}
    </div>
  );
};

export default NotificationItems;
