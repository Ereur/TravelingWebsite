import React from "react";

import IconProps from "@assets/IconProps";

const Decrement: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.44 0H10.56C15.7736 0 20 4.22643 20 9.44V10.56C20 15.7736 15.7736 20 10.56 20H9.44C4.22643 20 0 15.7736 0 10.56V9.44C0 4.22643 4.22643 0 9.44 0ZM6 10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H6C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Decrement;
