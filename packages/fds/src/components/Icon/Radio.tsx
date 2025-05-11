import type { IconProps } from '.'

export const RadioSelected = (props: IconProps) => {
  const { color = '#4160FF', size = 24 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_1357_27311)">
        <path
          d="M23.1501 12.0001C23.1501 5.84212 18.1581 0.850098 12.0001 0.850098C5.84212 0.850098 0.850098 5.84212 0.850098 12.0001C0.850098 18.1581 5.84212 23.1501 12.0001 23.1501C18.1581 23.1501 23.1501 18.1581 23.1501 12.0001Z"
          fill="white"
        />
        <path
          d="M23.1501 12.0001C23.1501 5.84212 18.1581 0.850098 12.0001 0.850098C5.84212 0.850098 0.850098 5.84212 0.850098 12.0001C0.850098 18.1581 5.84212 23.1501 12.0001 23.1501C18.1581 23.1501 23.1501 18.1581 23.1501 12.0001Z"
          stroke={color}
          stroke-width="1.7"
        />
        <path
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1357_27311">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const RadioDefault = (props: IconProps) => {
  const { color = '#C1C1C1', size = 24 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_1357_27315)">
        <path
          d="M23.1501 12.0001C23.1501 5.84212 18.1581 0.850098 12.0001 0.850098C5.84212 0.850098 0.850098 5.84212 0.850098 12.0001C0.850098 18.1581 5.84212 23.1501 12.0001 23.1501C18.1581 23.1501 23.1501 18.1581 23.1501 12.0001Z"
          fill="white"
        />
        <path
          d="M23.1501 12.0001C23.1501 5.84212 18.1581 0.850098 12.0001 0.850098C5.84212 0.850098 0.850098 5.84212 0.850098 12.0001C0.850098 18.1581 5.84212 23.1501 12.0001 23.1501C18.1581 23.1501 23.1501 18.1581 23.1501 12.0001Z"
          stroke={color}
          stroke-width="1.7"
        />
      </g>
      <defs>
        <clipPath id="clip0_1357_27315">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
