import { memo, useLayoutEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Info } from './Pages/Info'
import Login from './Pages/Login'
import { Test } from './Pages/Test'
import TestLayout from './Pages/TestLayout'
import { useTypedSelector } from './Store/rootReducer'

function App() {
  const user = useTypedSelector((s) => s.userReducer)
  const location = useLocation()
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (!user.isLogin) return navigate('/login')
    else return navigate('/')
  }, [user, location.pathname])

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<TestLayout />}>
          <Route path="/" element={<Info />} />
          <Route path="/test/:id" element={<Test />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default memo(App)
