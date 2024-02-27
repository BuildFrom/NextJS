import exp from "constants";
import React from "react";

type Props = {
  width: number;
  height: number;
  color?: string;
  className?: string;
};

const Bell: React.FC<Props> = ({
  width = 20,
  height = 20,
  color = "#000000",
}: Props) => {
  return (
    <svg
      className="w-full"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.438 8.063a5.563 5.563 0 0 1 11.125 0v2.626c0 1.182.34 2.34.982 3.332L17.5 15.5h-15l.955-1.479c.641-.993.982-2.15.982-3.332V8.062Z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 15.5v0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v0"
      />
    </svg>
  );
};

export default Bell;
