import axios from 'axios'
import { Dispatch } from 'redux'
import { TestAction, TestTypes } from './testReducer'
import api from '../API.json'

const _loadTest = (type: TestTypes, payload?: any[]): TestAction => {
  return {
    type: type,
    payload: payload,
  }
}

export const loadTest = () => {
  return (dispatch: Dispatch) => {
    dispatch(_loadTest(TestTypes.laoding))
    axios
      .get(api.url + '/tests', {
        headers: {
          Authorization: api.token,
        },
      })
      .then((res) => {
        setTimeout(() => {
          dispatch(_loadTest(TestTypes.success, res.data))
        }, 1500)
      })
      .catch(() => {
        dispatch(_loadTest(TestTypes.error))
      })
  }
}
