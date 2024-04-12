import React from "react";

import IconProps from "@assets/IconProps";

const Food: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.01619 14.4295L6.89242 10.9418L8.20809 12.6199L5.6722 15.8448C4.70101 17.0788 2.90389 15.7784 4.01619 14.4295ZM7.37524 6.48703C7.64917 5.59332 7.52327 4.82964 6.49398 3.6952L3.97884 0.669569C3.62191 0.25038 2.78076 0.866021 3.13216 1.37375L5.14372 3.85154C5.52417 4.31361 4.81722 4.9251 4.42432 4.44919L2.34359 1.88702C1.95622 1.44293 1.15519 2.02951 1.56055 2.53725C2.14713 3.24281 3.05469 4.39524 3.64128 5.1008C4.04801 5.51446 3.42961 6.12733 3.0284 5.6113L0.96289 3.06573C0.659912 2.73646 0.164632 2.94122 0.0332026 3.32582C-0.107911 3.73671 0.239339 4.03692 0.475911 4.34128L2.78076 7.3185C3.49601 8.14719 4.29565 8.63832 5.22534 8.36024C5.36784 8.31736 5.54215 8.2302 5.72892 8.11537L11.9213 16.109C12.2547 16.5393 12.898 16.5849 13.3158 16.2377L13.4113 16.1588C13.8817 15.7673 13.9578 15.0521 13.5552 14.59L6.99756 7.05564C7.18848 6.84258 7.32821 6.6406 7.37524 6.48703ZM9.12809 8.2302L10.1477 6.99338C8.83618 3.74224 13.6963 -0.590766 16.0523 1.40142C18.9147 3.82387 14.6606 9.66208 11.6709 8.21913L10.4631 9.75339L9.12809 8.2302Z"
        fill="white"
      />
    </svg>
  );
};

export default Food;