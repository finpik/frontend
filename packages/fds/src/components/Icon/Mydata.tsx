import type { IconProps } from '.'

export const Mydata = (props: IconProps) => {
  const { color = '#2E2E2E', size = 46 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M31 32.25C31 29.489 27.418 27.25 23 27.25C18.582 27.25 15 29.489 15 32.25M23 23.75C21.6739 23.75 20.4021 23.2232 19.4645 22.2855C18.5268 21.3479 18 20.0761 18 18.75C18 17.4239 18.5268 16.1521 19.4645 15.2145C20.4021 14.2768 21.6739 13.75 23 13.75C24.3261 13.75 25.5979 14.2768 26.5355 15.2145C27.4732 16.1521 28 17.4239 28 18.75C28 20.0761 27.4732 21.3479 26.5355 22.2855C25.5979 23.2232 24.3261 23.75 23 23.75Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
