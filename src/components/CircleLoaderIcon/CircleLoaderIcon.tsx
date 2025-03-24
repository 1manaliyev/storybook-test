import s from "./CircleLoaderIcon.module.scss";

interface Props {
  stroke?: string;
  background?: string;
}

export const CircleLoaderIcon: React.FC<Props> = ({
  stroke = "rgba(227, 79, 79, 1)",
  background = "rgba(67, 210, 108, 0.2)",
}) => {
  return (
    <svg className={s.icon_circleChart} viewBox="0 0 36 36">
      <path
        className={s.icon_circleBackground}
        d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
        stroke={background}
      />
      <path
        className={s.icon_circleProgress}
        d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
        stroke={stroke}
      />
    </svg>
  );
};
