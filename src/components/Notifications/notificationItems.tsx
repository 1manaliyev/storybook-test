import { Notification } from "./notification";
import s from "./NotificationItems.module.scss";
import { useNotificationStore } from "./store/NotificationStore";

export const NotificationItems = () => {
    const { components, removeComponent, title, status, text } =
      useNotificationStore();
    return (
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
    );
}