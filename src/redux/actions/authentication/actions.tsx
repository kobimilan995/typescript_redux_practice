import { SET_AUTHENTICATION_TOKEN, REMOVE_AUTHENTICATION_TOKEN, AuthenticationActionTypes } from './types'

export function setAuthenticationToken(token: string): AuthenticationActionTypes {
  return {
    type: SET_AUTHENTICATION_TOKEN,
    payload: token
  }
}

export function removeAuthenticationToken(): AuthenticationActionTypes {
  return {
    type: REMOVE_AUTHENTICATION_TOKEN
  }
}
