export enum UserActionTypes {
  login = 'login',
  logout = 'logout',
}

export type User = {
  name: string
  surname: string
}

export type UserState = {
  isLogin: boolean
  date: string
  user: User
}

export type UserAction = {
  type: UserActionTypes
  user: User
}

const initialState: UserState = {
  date: '',
  isLogin: false,
  user: {
    name: '',
    surname: '',
  },
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.login:
      return { isLogin: true, date: new Date().toDateString(), user: action.user }
    case UserActionTypes.logout:
      return { isLogin: false, date: '', user: { name: '', surname: '' } }
    default:
      return state
  }
}
