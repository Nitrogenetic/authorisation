import React, { memo } from 'react'
import { IconProps } from '~svg'
import cls from 'classnames'

const ArrowChevronDownIcon: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.96967 0.96967C0.676777 1.26256 0.676777 1.73744 0.96967 2.03033L5.46967 6.53033C5.76256 6.82322 6.23744 6.82322 6.53033 6.53033L11.0303 2.03033C11.3232 1.73744 11.3232 1.26256 11.0303 0.96967C10.7374 0.676777 10.2626 0.676777 9.96967 0.96967L6 4.93934L2.03033 0.96967C1.73744 0.676777 1.26256 0.676777 0.96967 0.96967Z"
        fill=""
      />
    </svg>
  )
}

export default memo(ArrowChevronDownIcon)
