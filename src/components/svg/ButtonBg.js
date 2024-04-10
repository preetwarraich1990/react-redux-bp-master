import * as React from 'react';

function ButtonBg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="332"
      height="64"
      fill="none"
      viewBox="0 0 332 64"
    >
      <g filter="url(#filter0_b_1234_15832)">
        <path
          fill="#931A1A"
          d="M34.947 0H332v35.478L297.053 64H0V35.478L34.947 0z"
        ></path>
        <path
          stroke="#67070E"
          d="M.5 35.683L35.157.5H331.5v34.741L296.875 63.5H.5V35.683z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_1234_15832"
          width="339.426"
          height="71.426"
          x="-3.713"
          y="-3.713"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="1.856"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1234_15832"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1234_15832"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default ButtonBg;
