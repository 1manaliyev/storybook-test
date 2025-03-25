import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { CheckMarkIcon, CloseIcon, InfoIconNoBg } from "../../icons";
import { CircleLoaderIcon } from "../CircleLoaderIcon/CircleLoaderIcon";
import s from "./Notification.module.scss";

interface Props {
  id: number;
  onRemove: (id: number) => void;
  title: string;
  status: "success" | "warning" | "copied" | "error";
  text: string;
}

enum colors {
  green = "rgba(67, 210, 108, 1)",
  red = "rgba(227, 79, 79, 1)",
  orange = "rgba(233, 190, 80, 1)",
  blue = "rgba(41, 119, 236, 1)",
  light_green = "rgba(67, 210, 108, 0.2)",
  light_red = "rgba(227, 79, 79, 0.2)",
  light_orange = "rgba(236, 185, 55, 0.2)",
  light_blue = "rgba(41, 119, 236, 0.2)",
}

export const Notification: React.FC<Props> = ({ id, onRemove, title, status, text }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  useEffect(() => {
    if (!visible) {
      onRemove(id);
    }
  }, [visible, id, onRemove]);

  const circleLoaderBg = useMemo(() => {
    switch (status) {
      case "warning":
        return colors.light_orange;
      case "success":
        return colors.light_green;
      case "error":
        return colors.light_red;
      case "copied":
        return colors.light_blue;
    }
  }, [status]);

  const circleLoaderStroke = useMemo(() => {
    switch (status) {
      case "warning":
        return colors.orange;
      case "success":
        return colors.green;
      case "error":
        return colors.red;
      case "copied":
        return colors.blue;
    }
  }, [status]);

  return (
    <div className={clsx(s.wrapper, { [s.hidden]: !visible })}>
      <div className={s.info}>
        <div className={clsx(s.icon)}>
          <CircleLoaderIcon
            stroke={circleLoaderStroke}
            background={circleLoaderBg}
          />
          <div
            className={clsx(
              s.icon_inner,
              status === "warning" && s.orange,
              status === "success" && s.green,
              status === "copied" && s.blue
            )}
          >
            {status === "success" && <CheckMarkIcon color={colors.green} />}
            {status === "error" && <CloseIcon color={colors.red} />}
            {status === "warning" && <InfoIconNoBg color={colors.orange} />}
            {status === "copied" && <CheckMarkIcon color={colors.blue} />}
          </div>
        </div>
        <div className={s.content}>
          <div className={s.title}>{title}</div>
          {text && <div className={s.text}>{text}</div>}
        </div>
      </div>
      <div
        className={s.close}
        onClick={() => {
          onRemove(id);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};