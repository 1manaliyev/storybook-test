import { FC } from "react";
import Notifications from ".";
import { useNotificationsStore } from "./store/NotificationsStore";

interface Props {
  status: "success" | "warning" | "error" | "copied";
  title: string;
  text: string;
}

export const AddNotification: FC<Props> = ({status, title, text}) => {
    const {showNotifiсation} = useNotificationsStore();
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