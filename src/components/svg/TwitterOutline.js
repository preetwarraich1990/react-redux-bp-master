import * as React from 'react';

function TwitterOutline() {
  return (
    <svg
      width="54"
      height="49"
      viewBox="0 0 54 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="26" cy="23.0293" r="19.5" stroke="white" />
      <g filter="url(#filter0_d_2840_19143)">
        <path
          d="M37 15.0386C36.0424 15.6625 34.9821 16.1396 33.86 16.4517C33.2577 15.8121 32.4573 15.3588 31.567 15.153C30.6767 14.9473 29.7395 14.9991 28.8821 15.3013C28.0247 15.6036 27.2884 16.1417 26.773 16.843C26.2575 17.5443 25.9877 18.3749 26 19.2225V20.1461C24.2426 20.1881 22.5013 19.8282 20.931 19.0982C19.3607 18.3682 18.0103 17.2909 17 15.9622C17 15.9622 13 24.2745 22 27.9689C19.9405 29.2601 17.4872 29.9075 15 29.8161C24 34.4341 35 29.8161 35 19.1948C34.9991 18.9375 34.9723 18.6809 34.92 18.4282C35.9406 17.4986 36.6608 16.3249 37 15.0386Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2840_19143"
          x="-0.00012207"
          y="0.0292969"
          width="54.0001"
          height="48.5723"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2840_19143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2840_19143"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default TwitterOutline;
