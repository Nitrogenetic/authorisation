import React, { memo } from 'react'

export interface AuthorisationFormProps {
  children: JSX.Element
  title: string
}

const AuthorisationForm: React.FC<AuthorisationFormProps> = props => {
  const { children, title } = props

  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default memo(AuthorisationForm)