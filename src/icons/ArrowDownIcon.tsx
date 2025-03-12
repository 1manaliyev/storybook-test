interface Props {
  color?: string;
}

export const ArrowDownIcon: React.FC<Props> = ({ color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.76693 7.7418L10.0003 10.9752L13.2336 7.7418C13.5586 7.4168 14.0836 7.4168 14.4086 7.7418C14.7336 8.0668 14.7336 8.59183 14.4086 8.91683L10.5836 12.7418C10.2586 13.0668 9.73362 13.0668 9.40862 12.7418L5.58359 8.91683C5.25859 8.59183 5.25859 8.0668 5.58359 7.7418C5.90859 7.42513 6.44193 7.4168 6.76693 7.7418Z"
        fill={color}
      />
    </svg>
  );
};
