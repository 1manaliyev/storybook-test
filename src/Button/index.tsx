import clsx from "clsx";
import { FC, JSX } from "react";
import { Link } from "react-router-dom";
import s from "./Button.module.scss";

type ButtonHeight = "small" | "auto" | string;
type ButtonWidth = "auto" | string;

interface Props {
  children: JSX.Element | string;
  className?: string;
  href?: string;
  blank?: boolean;
  type?: "submit";
  disabled?: boolean;
  htmlType?: "white" | "grey" | "clear" | "disabled" | "default" | "light-grey";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  height?: ButtonHeight;
  width?: ButtonWidth;
  fontSize?: string;
  fontWeight?: string;
  padding?: React.CSSProperties["padding"];
}

const getHeightStyle = (height: ButtonHeight) =>
  ({
    small: "45px",
    auto: "100%",
  }[height] || `${height}px`);

const getWidthStyle = (width: ButtonWidth) =>
  ({
    auto: "100%",
    full: "100%",
  }[width] || `${width}px`);

export const Button: FC<Props> = ({
  children,
  className,
  href,
  blank,
  type,
  disabled = false,
  htmlType = "default",
  height = "52",
  width = "full",
  fontSize = "16",
  fontWeight = "700",
  padding,
  onClick,
}) => {
  const style = {
    height: getHeightStyle(height),
    width: getWidthStyle(width),
    fontSize: `${fontSize}px`,
    fontWeight: fontWeight,
    padding,
  };

  const classes = clsx(
    s.btn,
    {
      [s.default]: htmlType !== "clear" && htmlType,
      [s.disabled]: disabled,
      [s.whiteColor]: htmlType === "white",
      [s.grey]: htmlType === "grey",
      [s.light_grey]: htmlType === "light-grey",
    },
    className
  );

  const anchorProps = {
    onClick,
    className: classes,
    style: style,
    ...(blank && { target: "_blank", rel: "noopener noreferrer" }),
  };

//   return (
//       <button
//         disabled={disabled}
//         type={type === "submit" ? "submit" : "button"}
//         {...anchorProps}
//       >
//         {children}
//       </button>
//   );

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