import React from "react";

import IconProps from "@assets/IconProps";

const Location: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 8 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 3C3.44767 3 3 3.44767 3 4C3 4.55233 3.44767 5 4 5C4.55233 5 5 4.55233 5 4C5 3.44767 4.55233 3 4 3ZM4 5.66667C3.07967 5.66667 2.33333 4.92067 2.33333 4C2.33333 3.07933 3.07967 2.33333 4 2.33333C4.92033 2.33333 5.66667 3.07933 5.66667 4C5.66667 4.92067 4.92033 5.66667 4 5.66667ZM4 0C1.791 0 0 1.791 0 4C0 5.67267 3.335 10.6703 4 10.6667C4.65467 10.6703 8 5.65 8 4C8 1.791 6.209 0 4 0Z"
        fill="white"
      />
    </svg>
  );
};

export default Location;
