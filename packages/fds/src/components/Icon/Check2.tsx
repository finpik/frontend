import type { IconProps } from '.'

export const Check2Default = (props: IconProps) => {
  const { color = '#C1C1C1', size = 36 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M18 29C24.0751 29 29 24.0751 29 18C29 11.9249 24.0751 7 18 7C11.9249 7 7 11.9249 7 18C7 24.0751 11.9249 29 18 29Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

export const Check2Selected = (props: IconProps) => {
  const { color = '#4160FF', size = 36 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30Z"
        fill={color}
      />
      <path
        d="M16.205 23.6717L25.169 14.7077L23.764 13.3027L16.205 20.8617L12.405 17.0617L11 18.4667L16.205 23.6717Z"
        fill="white"
      />
    </svg>
  )
}
