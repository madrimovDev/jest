import React, { memo, useEffect, useLayoutEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Navbar } from "../Components/Navbar/Navbar";
import { useTypedSelector } from "../Store/rootReducer";

const Test = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default memo(Test, () => true);
