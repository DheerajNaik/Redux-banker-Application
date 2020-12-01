import { combineReducers } from "redux";
import { bankingReducer } from "./BankingReducers";
import { AuthenticationReducer } from "./AuthenticationReducers";

export const rootReducer = combineReducers({
  auth: AuthenticationReducer,
  banking: bankingReducer,
});
