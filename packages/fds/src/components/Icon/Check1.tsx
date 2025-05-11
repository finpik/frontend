import type { IconProps } from '.'

export const Check1Default = (props: IconProps) => {
  const { color = '#C1C1C1', size = 20 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_1357_27341)">
        <path
          d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
          fill="white"
          stroke={color}
          stroke-width="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1357_27341">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Check1Selected = (props: IconProps) => {
  const { color = '#4160FF', size = 20 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_1357_27343)">
        <path
          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
          fill={color}
        />
        <path
          d="M8.50401 14.7263L15.974 7.25628L14.8032 6.08545L8.50401 12.3846L5.33734 9.21795L4.1665 10.3888L8.50401 14.7263Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1357_27343">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
