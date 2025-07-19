import type { IconProps } from '.'

export const Go = (props: IconProps) => {
  const { color = '#2E2E2E', size = 24 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_1357_14212)">
        <mask
          id="mask0_1357_14212"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={size}
          height={size}
        >
          <path d="M24 0H0V24H24V0Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1357_14212)">
          <path
            d="M13 19L11.575 17.6L16.175 13H4V11H16.175L11.6 6.4L13 5L20 12L13 19Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1357_14212">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
