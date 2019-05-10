import { combineReducers } from "redux";
import AuthenticationReducer, {
  IAuthenticationState
} from "./AuthenticationReducer";

export interface ApplicationState {
  authentication: IAuthenticationState;
}

const rootReducer = combineReducers<ApplicationState>({
  authentication: AuthenticationReducer
});

export default rootReducer;
