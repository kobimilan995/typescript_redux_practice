export const SET_AUTHENTICATION_TOKEN = 'set_authentication_token';
export const REMOVE_AUTHENTICATION_TOKEN = 'remove_authentication_token';

interface SetAuthenticationTokenAction {
  type: typeof SET_AUTHENTICATION_TOKEN,
  payload: string
}

interface RemoveAuthenticationTokenAction {
  type: typeof REMOVE_AUTHENTICATION_TOKEN
}

export type AuthenticationActionTypes = SetAuthenticationTokenAction | RemoveAuthenticationTokenAction;
