import type { IconProps } from '.'

export const ArrowDown = (props: IconProps) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2695 14.8439C11.6648 15.2673 12.336 15.2673 12.7314 14.8439L17.2891 9.96254C17.5638 9.66841 17.5561 9.2096 17.2717 8.92485C16.9714 8.6241 16.481 8.63417 16.1933 8.94701L12.0004 13.5057L7.80904 8.94715C7.52129 8.63418 7.0308 8.62389 6.73018 8.92452C6.4453 9.2094 6.43743 9.66879 6.71238 9.96326L11.2695 14.8439Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowUp = (props: IconProps) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2695 9.1564C11.6648 8.73302 12.336 8.73302 12.7314 9.1564L17.2891 14.0378C17.5638 14.3319 17.5561 14.7907 17.2717 15.0755C16.9714 15.3762 16.481 15.3662 16.1933 15.0533L12.0004 10.4946L7.80904 15.0532C7.52129 15.3662 7.0308 15.3764 6.73018 15.0758C6.4453 14.7909 6.43743 14.3316 6.71238 14.0371L11.2695 9.1564Z"
        fill={color}
      />
    </svg>
  )
}
