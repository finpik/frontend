import type { IconProps } from '.'

export const EllipseShort = (props: IconProps) => {
  const { color = '#C1C1C1' } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
      <g clipPath="url(#clip0_1357_27301)">
        <path
          d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1357_27301">
          <rect width="4" height="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const EllipseLong = (props: IconProps) => {
  const { color = '#4160FF' } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="4" viewBox="0 0 17 4" fill="none">
      <g clipPath="url(#clip0_1357_27303)">
        <path
          d="M15 0H2C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4H15C16.1046 4 17 3.10457 17 2C17 0.89543 16.1046 0 15 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1357_27303">
          <rect width="17" height="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
