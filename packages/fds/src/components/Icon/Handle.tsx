import type { IconProps } from '.'

export const Handle = (props: IconProps) => {
  const { color = '#F6F6F6', size = 50 } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="7" viewBox="0 0 51 7" fill="none">
      <g filter="url(#filter0_i_1049_23732)">
        <rect x="0.5" width={size} height="6.14876" rx="3" fill={color} />
      </g>
      <defs>
        <filter
          id="filter0_i_1049_23732"
          x="0.5"
          y="0"
          width={size}
          height="6.14893"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.894118 0 0 0 0 0.894118 0 0 0 0 0.894118 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1049_23732" />
        </filter>
      </defs>
    </svg>
  )
}
