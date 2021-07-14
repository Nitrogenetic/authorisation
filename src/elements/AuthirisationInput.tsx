import React, { memo } from 'react'

export interface AuthorisationInputProps {
  title: string
  onChange: void
}

const AuthorisationInput: React.FC<AuthorisationInputProps> = props => {
  const { title, onChange } = props

  return (
    <>
      <h2 className={"text-violet-2"}>{title}</h2>
      <input type="text" className={"inline-block border rounded-md border-violet-1"} onChange={onChange}/>
    </>
  )
}

export default memo(AuthorisationInput)