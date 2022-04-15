
export enum UserTypes {
  LOGIN, LOGOUT
}

export type User = {
  name: string,
  surname: string,
  date: string
}

export type UserState = {
  login: boolean,
  user: User | undefined
}

export type UserAction = {
  type: UserTypes,
  payload: User | undefined
}

const initialState: UserState = {
  login: false,
  user: undefined
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserTypes.LOGIN: return { login: true, user: action.payload }
    case UserTypes.LOGOUT: return { login: false, user: action.payload }
    default: return state
  }
}