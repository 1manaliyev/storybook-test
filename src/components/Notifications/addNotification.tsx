import { FC } from "react";
import Notifications from ".";
import { useNotificationStore } from "./store/NotificationStore";

interface Props {
  status: "success" | "warning" | "error" | "copied";
  title: string;
  text: string;
}

export const AddNotification: FC<Props> = ({status, title, text}) => {
    const {showNotifiсation} = useNotificationStore();
    const onClick = () => {
        showNotifiсation(status, title, text);
    }
    return (
      <>
        <div
          onClick={onClick}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Add notification
        </div>
        <Notifications/>
      </>
    );
}