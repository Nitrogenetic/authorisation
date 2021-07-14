import React, { memo, useState } from 'react'
import AuthorisationForm from "../../elements/AuthorisationForm";
import AuthorisationInput from "../../elements/AuthirisationInput";
import AuthorisationButton from "../../elements/AuthorisationButton";
import {gql, useMutation} from "@apollo/client";
import {signInMutation} from "../../graphql/authorisation";

const SignIn = () => {
  const [ valueLogin, setValueLogin ] = useState('')
  const [ valuePassword, setValuePassword ] = useState('')
  const [ signIn ] = useMutation(signInMutation)

  function loginSuccess(valueLogin:string, valuePassword:string) {
    signIn({
      variables: {
        email: valueLogin,
        password: valuePassword
      }
    }).then(data => {
      if (data.data.res.successful){alert("Вы успешно авторизовались")}
      else{alert("Пользователя с там логином не существует")}
    })
  }

  return (
    <div>
      <AuthorisationForm title={"Авторизация"}>
        <AuthorisationInput title={"Логин"} onChange={(e) => setValueLogin(e.target.value)}/>
        <AuthorisationInput title={"Пароль"} onChange={(e) => setValuePassword(e.target.value)}/>
        <AuthorisationButton title={"Войти"} onClick={()=>
          loginSuccess(valueLogin, valuePassword)
        }/>
      </AuthorisationForm>
    </div>
  )
}

export default memo(SignIn)