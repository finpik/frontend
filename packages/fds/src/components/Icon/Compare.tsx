import type { IconProps } from '.'

export const Compare = (props: IconProps) => {
  const { color = '#2E2E2E', size = 24 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.0479 14.4727L7.39941 19.1201L6.35352 18.0664L9.20801 15.2129H2.16016V13.7334H9.20801L6.35352 10.8799L7.39941 9.82617L12.0479 14.4727ZM16.4473 5.51465L13.5938 8.36816H20.6406V9.84766H13.5938L16.4473 12.7012L15.4004 13.7549L10.7529 9.1084L15.4004 4.45996L16.4473 5.51465Z"
        fill={color}
      />
    </svg>
  )
}
