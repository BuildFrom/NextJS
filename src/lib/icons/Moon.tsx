import React from "react";

type Props = {
  width: number;
  height: number;
  color?: string;
  className?: string;
};

const Moon: React.FC<Props> = ({ width, height, color = "#000000" }: Props) => {
  return (
    <svg
      className="hidden dark:block"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
          stroke={color}
        ></path>{" "}
      </g>
    </svg>
  );
};

export default Moon;
