interface Props {
  color?: string;
}

const InfoIconNoBg = ({ color = "#9797A0" }: Props) => {
  return (
    <svg
      width="2"
      height="12"
      viewBox="0 0 2 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 7V1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V7C2 7.55228 1.55228 8 1 8C0.447715 8 0 7.55228 0 7Z"
        fill={color}
      />
      <path
        d="M1 10C1.55228 10 2 10.4477 2 11C2 11.5523 1.55228 12 1 12C0.447715 12 0 11.5523 0 11C0 10.4477 0.447715 10 1 10Z"
        fill={color}
      />
    </svg>
  );
};

export default InfoIconNoBg;
