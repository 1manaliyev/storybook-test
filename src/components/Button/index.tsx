import clsx from "clsx";
import { FC, JSX } from "react";
import { Link } from "react-router-dom";
import s from "./Button.module.scss";

export interface ButtonProps {
  children: JSX.Element | string;
  className?: string;
  href?: string;
  blank?: boolean;
  type?: "submit";
  disabled?: boolean;
  size: "md" | "lg";
  htmlType?:
    | "white"
    | "grey"
    | "clear"
    | "default"
    | "transparent"
    | "blue-border";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  href,
  blank,
  type,
  disabled = false,
  size = "md",
  htmlType = "default",
  onClick,
}) => {
  const classes = clsx(
    s.btn,
    {
      [s.default]: htmlType !== "clear" && htmlType,
      [s.disabled]: disabled,
      [s.whiteColor]: htmlType === "white",
      [s.grey]: htmlType === "grey",
      [s.bordered]: htmlType === "blue-border",
      [s.transparent]: htmlType === "transparent",
      [s.lg]: size === "lg",
    },
    className
  );

  const anchorProps = {
    onClick,
    className: classes,
    ...(blank && { target: "_blank", rel: "noopener noreferrer" }),
  };

  return href ? (
    <Link to={href} {...anchorProps}>
      <button
        disabled={disabled}
        type={type === "submit" ? "submit" : "button"}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      {...anchorProps}
    >
      {children}
    </button>
  );
};

export default Button;