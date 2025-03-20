import clsx from "clsx";
import { FC, JSX, useMemo } from "react";
import s from "./Typography.module.scss";

interface Props {
  children: JSX.Element | string;
  variant?:
    | "t1"
    | "t2"
    | "t3"
    | "t4"
    | "h1"
    | "h2"
    | "a1"
    | "b1"
    | "b2"
    | "f1";
}

const Typography: FC<Props> = ({ children, variant = "b1" }) => {
  const className = useMemo(() => {
    switch (variant) {
      case "t1":
        return s.t1;
      case "t2":
        return s.t2;
      case "t3":
        return s.t3;
      case "t4":
        return s.t4;
      case "h1":
        return s.h1;
      case "h2":
        return s.h2;
      case "a1":
        return s.a1;
      case "b1":
        return s.b1;
      case "b2":
        return s.b2;
      case "f1":
        return s.f1;
    }
  }, []);

  return <div className={clsx(s.wrapper, className)}>{children}</div>;
};

export default Typography;
