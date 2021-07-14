import React, { memo } from 'react'

export interface AuthorisationButtonProps {
  title: string
  onClick: void
}

const AuthorisationButton: React.FC<AuthorisationButtonProps> = props => {
  const { title, onClick } = props

  return (
    <div className={"pt-20"}>
      <button className={"inline h40 w-200 border"} onClick={onClick}>{title}</button>
    </div>
  )
}

export default memo(AuthorisationButton)