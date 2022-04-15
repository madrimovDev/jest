import axios from "axios";
import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Test from "./Pages/Test";
import { useTypedSelector } from "./Store/rootReducer";

function App() {
  const user = useTypedSelector((s) => s.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.login) return navigate("/login");
    else return navigate("/");
  }, [user]);

  return (
    <div className="">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Test />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default memo(App);
