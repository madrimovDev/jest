import axios from "axios";
import { Dispatch } from "redux";
import { User, UserAction, UserTypes } from "./userReducer";
import api from '../API.json'

export const loginAction = (user: User): UserAction => {
  return {
    type: UserTypes.LOGIN,
    payload: user
  }
}

export const logoutAction = (): UserAction => {
  return {
    type: UserTypes.LOGOUT,
    payload: undefined
  }
}
