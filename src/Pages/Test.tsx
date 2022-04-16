import React from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../Store/rootReducer'

export const Test = () => {
  
  const tests = useTypedSelector(state => state.testReducer)
  const { id } = useParams()

  const test = tests.tests !== undefined ?  tests.tests[Number(id)] : 'hech narsa topilmadi'

  return (
    <div>{test.question} {test.variant}</div>
  )
}
