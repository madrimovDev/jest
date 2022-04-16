import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../Store/rootReducer'
import { loadTest } from '../Store/Test/testAction'

export const Info = () => {
  const user = useTypedSelector((state) => state.userReducer)
  const test = useTypedSelector((state) => state.testReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const _loadiTest = () => {
    dispatch(loadTest())
  }

  useEffect(() => {
    if (test.status.success) {
      navigate('/test/0')
    }
  }, [test.status])

  return (
    <div className="px-4 flex justify-center flex-col">
      <h1 className="text-center text-2xl w-4/6 px-4 mx-auto mt-[8vh] md:w-3/4 md:text-6xl">
        Hello <span className="text-accent font-medium">{user.user.name}</span> Welcome to Our
        <span className="text-accent font-bold"> Jest</span>Platform
      </h1>
      <p className="text-center mt-8 leading-8 tracking-wider font-thin md:text-2xl md:leading-10 md:px-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea explicabo cupiditate minima
        odio ducimus! Quam sit quasi quia placeat magni, ex, velit rerum nulla cupiditate sunt
        itaque. Repudiandae, distinctio at.
      </p>
      <button
        type="button"
        onClick={() => _loadiTest()}
        className="btn btn-accent mt-10 md:self-center"
      >
        Boshlash
        {test.status.loading ? (
          <button className="btn btn-sm btn-ghost btn-square loading"></button>
        ) : test.status.error ? (
          ' Hatolik'
        ) : test.status.success ? (
          ' Tayyor'
        ) : (
          ''
        )}
      </button>
    </div>
  )
}
