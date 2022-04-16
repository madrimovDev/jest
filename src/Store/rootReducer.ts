import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { testReducer } from "./Test/testReducer";
import { userReducer } from "./User/userReducer";

export const rootReducer = combineReducers({
  userReducer,
  testReducer
})

type RootType = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector
