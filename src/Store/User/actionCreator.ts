import { User, UserAction, UserActionTypes } from './userReducer'

export const loginAction = (user: User): UserAction => {
  return {
    type: UserActionTypes.login,
    user: user,
  }
}

export const logoutAction = (): UserAction => {
  return {
    type: UserActionTypes.logout,
    user: {
      name: '',
      surname: '',
    },
  }
}
