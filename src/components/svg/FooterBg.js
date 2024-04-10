import * as React from 'react';

function FooterBg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="431"
      fill="none"
      viewBox="0 0 1440 431"
    >
      <g filter="url(#filter0_d_1316_9645)">
        <path
          fill="#000"
          fillOpacity="0.1"
          d="M46 74h1347.5l52.5 40.541V427H6V114.541L46 74z"
          shapeRendering="crispEdges"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1316_9645"
          width="1580"
          height="493"
          x="-64"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-4"></feOffset>
          <feGaussianBlur stdDeviation="35"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.85098 0 0 0 0 0.0313726 0 0 0 0 0.0862745 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1316_9645"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1316_9645"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default FooterBg;
