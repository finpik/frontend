import type { IconProps } from '.'

export const Align = (props: IconProps) => {
  const { color = '#A0A0A0', size = 36 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
    >
      <mask id="mask0_1357_14306" maskUnits="userSpaceOnUse" x="6" y="6" width="24" height="24">
        <path d="M30 6H6V30H30V6Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1357_14306)">
        <path d="M9 24V22H27V24H9ZM9 19V17H27V19H9ZM9 14V12H27V14H9Z" fill={color} />
      </g>
    </svg>
  )
}
