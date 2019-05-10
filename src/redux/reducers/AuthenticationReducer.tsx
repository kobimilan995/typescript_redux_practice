import {
  REMOVE_AUTHENTICATION_TOKEN,
  SET_AUTHENTICATION_TOKEN
} from "../actions/authentication/types";
import { AuthenticationActionTypes } from "../actions/authentication/types";

export interface IAuthenticationState {
  token: string;
}

const initialState: IAuthenticationState = {
  token: ""
};

export default (
  state: IAuthenticationState = initialState,
  action: AuthenticationActionTypes
): IAuthenticationState => {
  switch (action.type) {
    case SET_AUTHENTICATION_TOKEN:
      return {
        ...state,
        token: action.payload
      };

    case REMOVE_AUTHENTICATION_TOKEN:
      return {
        ...state,
        token: ""
      };
    default:
      return initialState;
  }
};
