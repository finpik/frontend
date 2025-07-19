import type { IconProps } from '.'

export const Up = (props: IconProps) => {
  const { color = '#2E2E2E', size = 24 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_1357_14204)">
        <mask
          id="mask0_1357_14204"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={size}
          height={size}
        >
          <path d="M24 0H0V24H24V0Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1357_14204)">
          <path
            d="M11 19.3481V7.17314L5.4 12.7731L4 11.3481L12 3.34814L20 11.3481L18.6 12.7731L13 7.17314V19.3481H11Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1357_14204">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
