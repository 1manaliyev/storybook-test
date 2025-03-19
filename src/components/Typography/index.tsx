import clsx from "clsx";
import { FC, JSX, useMemo } from "react";
import s from "./Typography.module.scss";

interface Props {
  children: JSX.Element | string;
  variant:
    | "h1Title"
    | "h2Title"
    | "h3Title"
    | "h4Title"
    | "h5Title"
    | "h6Title"
    | "h7Title"
    | "h8Title"
    | "h9Title"
    | "h10Title"
    | "h10_1Title"
    | "h11Title"
    | "h12Title"
    | "b1"
    | "b1_1"
    | "b2"
    | "b3"
    | "b4"
    | "b5"
    | "b6"
    | "b7"
    | "b8"
    | "b9"
}

const Typography: FC<Props> = ({ children, variant }) => {
  const className = useMemo(() => {
    switch (variant) {
      case "h1Title":
        return s.h1;
      case "h2Title":
        return s.h2;
      case "h3Title":
        return s.h3;
      case "h4Title":
        return s.h4;
      case "h5Title":
        return s.h5;
      case "h6Title":
        return s.h6;
      case "h7Title":
        return s.h7;
      case "h8Title":
        return s.h8;
      case "h9Title":
        return s.h9;
      case "h10Title":
        return s.h10;
      case "h10_1Title":
        return s.h10_1;
      case "h11Title":
        return s.h11;
      case "h12Title":
        return s.h12;
      case "b1":
        return s.b1;
      case "b1_1":
        return s.b1_1;
      case "b2":
        return s.b2;
      case "b3":
        return s.b3;
      case "b4":
        return s.b4;
      case "b5":
        return s.b5;
      case "b6":
        return s.b6;
      case "b7":
        return s.b7;
      case "b8":
        return s.b8;
      case "b9":
        return s.b9;
    }
  }, []);

  return <div className={clsx(s.wrapper, className)}>{children}</div>;
};

export default Typography;
