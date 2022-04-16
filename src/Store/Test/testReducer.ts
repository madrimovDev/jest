export enum TestTypes {
  success = 'success',
  error = 'error',
  laoding = 'laoding',
}

export type Status = {
  loading: boolean
  error: boolean
  success: boolean
}

export type TestState = {
  status: Status
  tests?: any[]
}

export type TestAction = {
  type: TestTypes
  payload?: any[]
}

const initialState: TestState = {
  status: {
    error: false,
    loading: false,
    success: false,
  },
}

export const testReducer = (state = initialState, action: TestAction): TestState => {
  switch (action.type) {
    case TestTypes.error:
      return { status: { error: true, loading: false, success: false } }
    case TestTypes.laoding:
      return { status: { error: false, loading: true, success: false } }
    case TestTypes.success:
      return { status: { error: false, loading: false, success: true }, tests: action.payload }
    default:
      return state
  }
}
