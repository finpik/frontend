import type { IconProps } from '.'

export const Close = (props: IconProps) => {
  const { color = '#838383', size = 24 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_1357_14294)">
        <mask id="mask0_1357_14294" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <path d="M24 0H0V24H24V0Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1357_14294)">
          <path
            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1357_14294">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
