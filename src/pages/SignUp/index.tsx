import React, {memo, useState} from 'react'
import AuthorisationForm from "../../elements/AuthorisationForm";
import AuthorisationInput from "../../elements/AuthirisationInput";
import AuthorisationButton from "../../elements/AuthorisationButton";
import {gql, useMutation} from "@apollo/client";
import {signUpMutation} from "../../graphql/authorisation";

const SignUp = () => {
  const [valueLogin, setValueLogin] = useState('12345qwert@mail.ru')
  const [valuePassword, setValuePassword] = useState('12345qwert')
  const [ signUp ] = useMutation(signUpMutation)

  function registerSuccess(valueLogin:string, valuePassword:string) {
    signUp({
      variables: {
        email: valueLogin,
        password: valuePassword
      }
    }).then(data => {
      if (data.data.res.successful){alert("Вы успешно зарегистрировались")}
      else{alert("Пользователь с там логином уже существует")}
    })
  }

  return (
    <div>
      <AuthorisationForm title={"Регистрация"}>
        <AuthorisationInput title={"Логин"} onChange={(e) => setValueLogin(e.target.value)}/>
        <AuthorisationInput title={"Пароль"} onChange={(e) => setValuePassword(e.target.value)}/>
        <AuthorisationButton title={"Зарегистрироваться"} onClick={() =>
          registerSuccess(valueLogin, valuePassword)
        }/>
      </AuthorisationForm>
    </div>
  )
}

export default memo(SignUp)