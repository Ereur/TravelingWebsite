import React from "react";

import IconProps from "@assets/IconProps";

const LogmentSolid: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16.3337 1.51867L17.8398 5.59423C18.1302 6.39253 18.0216 7.28155 17.5475 7.98641C17.0096 8.77053 16.1321 9.25362 15.1819 9.28882C13.6989 9.4021 12.3598 8.40349 12.0455 6.9498C12.0455 6.9498 11.9923 6.9498 11.9834 6.9498C11.6898 8.35955 10.4187 9.34944 8.97992 9.28882C7.54776 9.34058 6.28672 8.35271 5.99413 6.9498C5.99413 6.9498 5.94097 6.9498 5.93211 6.9498C5.76058 7.72942 5.28575 8.40869 4.61248 8.83759C3.93921 9.26649 3.12291 9.40972 2.34384 9.23566C1.65136 9.12184 1.02264 8.76347 0.571857 8.22563C-0.012655 7.48529 -0.161012 6.49063 0.18202 5.61195L1.65277 1.51867C1.9983 0.647483 2.85114 0.0848248 3.78801 0.109938H14.1984C15.1353 0.0848248 15.9881 0.647483 16.3337 1.51867Z"
        fill="white"
      />
      <path
        d="M15.2705 10.6444V15.1629C15.2566 15.6588 15.0461 16.1288 14.6855 16.4695C14.3249 16.8102 13.8437 16.9935 13.3479 16.9792H10.8405V14.1884C10.7928 13.2568 10.0002 12.5395 9.06852 12.5847C8.60806 12.5797 8.1624 12.7472 7.81927 13.0543C7.48915 13.3389 7.29849 13.7525 7.29654 14.1884V16.9792H4.78918C4.28729 16.9935 3.80074 16.8053 3.4391 16.457C3.07746 16.1087 2.87113 15.6296 2.86658 15.1275V10.6444H2.93746C4.04791 10.6465 5.12026 10.2396 5.94983 9.50145C7.68852 11.0183 10.2802 11.0183 12.0189 9.50145C12.8517 10.2459 13.932 10.6534 15.049 10.6444H15.2705Z"
        fill="white"
      />
    </svg>
  );
};

export default LogmentSolid;