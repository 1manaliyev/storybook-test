import { FC } from "react";
import Notifications from ".";
import { AddNotification } from "./addNotification";

interface Props {
  status: "success" | "warning" | "error" | "copied";
  title: string;
  text: string;
}

export const AddNotificationWrapper: FC<Props> = ({status, title, text}) => {
    return (
      <>
        <Notifications>
          <AddNotification status={status} title={title} text={text}/>
        </Notifications>
      </>
    );
}