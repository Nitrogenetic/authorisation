import { gql } from '@apollo/client'

export const signUpMutation = gql`
  mutation SignUp($email: String!, $password: String!) {
    res: signUp(email: $email, password: $password) {
      successful
    }
  }
`

export const signInMutation = gql`
  mutation SignIn($email: String!, $password: String!) {
    res: signIn(email: $email, password: $password) {
      successful
    }
  }
`
