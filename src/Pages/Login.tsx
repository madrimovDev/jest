import React, { FormEvent, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../Store/User/actionCreator";

const Login = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const dispatch = useDispatch()

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if(!name.trim() || !surname.trim()) return alert('Malumotlar To`liq Emas')
    const user = {
      name,
      surname,
    };
    dispatch(loginAction(user))
  };

  return (
    <div className="">
      <form className="mt-10 flex flex-col gap-4 p-6">
        <h1 className="text-2xl mb-10 text-center">Testni Boshlash</h1>
        <input
          className="input input-bordered"
          type="text"
          placeholder="Ismingizni kiriting..."
        />
        <input
          className="input input-bordered"
          type="text"
          placeholder="Familiyangizni kiriting..."
        />
        <button className="btn btn-outline btn-primary w-full">BOSHLASH</button>
      </form>
    </div>
  );
};

export default memo(Login);
