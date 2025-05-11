import type { IconProps } from '.'

export const ArrowBackIos = (props: IconProps) => {
  const { color = '#2E2E2E', size = 48 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      <mask id="mask0_1357_14198" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
        <path d="M36 12H12V36H36V12Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1357_14198)">
        <path
          d="M22.6849 32.9856C22.3028 33.3546 21.6971 33.3546 21.315 32.9856L13.091 25.0429C12.6839 24.6497 12.6839 23.9974 13.091 23.6043L21.315 15.6615C21.6971 15.2925 22.3028 15.2925 22.6849 15.6615C23.0862 16.0491 23.0862 16.6923 22.6849 17.0799L15.1844 24.3236L22.6849 31.5672C23.0862 31.9549 23.0862 32.598 22.6849 32.9856Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
