import type { IconProps } from '.'

export const Sort = (props: IconProps) => {
  const { color = '#4160FF', size = 36 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
    >
      <mask id="mask0_1357_14324" maskUnits="userSpaceOnUse" x="8" y="8" width="20" height="20">
        <path d="M28 8H8V28H28V8Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1357_14324)">
        <path
          d="M13.0005 24L10.0005 21L11.063 19.9375L12.2505 21.125V14.875L11.063 16.0625L10.0005 15L13.0005 12L16.0005 15L14.938 16.0625L13.7505 14.875V21.125L14.938 19.9375L16.0005 21L13.0005 24ZM18.0005 23V21.5H26.0005V23H18.0005ZM18.0005 18.75V17.25H26.0005V18.75H22.0005H18.0005ZM18.0005 14.5V13H26.0005V14.5H18.0005Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
