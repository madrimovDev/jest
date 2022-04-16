import React, { FormEvent, memo, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginAction } from '../Store/User/actionCreator'
import { User } from '../Store/User/userReducer'

const Login = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const dispatch = useDispatch()

  const bindActionCreator = useMemo(() => bindActionCreators(loginAction, dispatch), [dispatch])

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    if (!name.trim() || !surname.trim()) return
    const user: User = {
      name,
      surname,
    }
    bindActionCreator(user)
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={submitHandler}
        className="mt-[20vh] bg-base-300 flex flex-col gap-4 p-6 min-w-[300px] w-full max-w-md"
      >
        <h1 className="text-2xl mb-2 text-left">
          <span className="text-primary font-bold">Jest</span>Platform
        </h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered"
          type="text"
          placeholder="Ismingizni kiriting..."
        />
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="input input-bordered"
          type="text"
          placeholder="Familiyangizni kiriting..."
        />
        <button className="btn btn-outline btn-primary w-full">BOSHLASH</button>
      </form>
    </div>
  )
}

export default memo(Login)
