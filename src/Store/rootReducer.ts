import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { userReducer } from "./User/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  // test: testReducer
})

type RootType = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector
