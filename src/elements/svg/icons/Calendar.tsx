import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~svg'

const CalendarIcon: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M13.25 2H12.5V1.25C12.5 0.8 12.2 0.5 11.75 0.5C11.3 0.5 11 0.8 11 1.25V2H5V1.25C5 0.8 4.7 0.5 4.25 0.5C3.8 0.5 3.5 0.8 3.5 1.25V2H2.75C1.475 2 0.5 2.975 0.5 4.25V5H15.5V4.25C15.5 2.975 14.525 2 13.25 2ZM0.5 13.25C0.5 14.525 1.475 15.5 2.75 15.5H13.25C14.525 15.5 15.5 14.525 15.5 13.25V6.5H0.5V13.25ZM11.75 9.5C12.2 9.5 11.75 8.675 11.75 9.125C11.75 9.575 12.2 9.5 11.75 9.5C11.3 9.5 11.75 10.325 11.75 9.875C11.75 9.425 11.3 9.5 11.75 9.5ZM11.75 12.5C12.2 12.5 11.75 11.675 11.75 12.125C11.75 12.575 12.2 12.5 11.75 12.5C11.3 12.5 11.75 12.575 11.75 12.125C11.75 11.675 11.3 12.5 11.75 12.5ZM8 9.5C8.45 9.5 8.375 9.05 8.375 9.5C8.375 9.95 8.45 9.5 8 9.5C7.55 9.5 7.625 9.95 7.625 9.5C7.625 9.05 7.55 9.5 8 9.5ZM8 12.5C8.45 12.5 8 11.675 8 12.125C8 12.575 8.45 12.5 8 12.5C7.55 12.5 8 13.325 8 12.875C8 12.425 7.55 12.5 8 12.5ZM4.25 8.75C4.7 8.75 4.05244 8.18057 4.05244 8.63057C3.875 9.5 4.7 8.75 4.25 8.75C3.8 8.75 4.25 9.2 4.25 8.75C4.25 8.3 3.8 8.75 4.25 8.75ZM4.26579 12.4999C4.71579 12.4999 3.875 12.425 3.875 12.875C3.875 13.325 4.7 12.5 4.25 12.5C3.8 12.5 4.25 12.575 4.25 12.125C4.25 11.675 3.81579 12.4999 4.26579 12.4999Z"
        fill=""
      />
    </svg>
  )
}

export default memo(CalendarIcon)
