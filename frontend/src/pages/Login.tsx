import React, { useState } from "react";

import axios from "axios";

import Spinner from "../components/Spinner";

import { BASE_URL } from "../config/apiConfig";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const login = async () => {
    setLoading(true);
    const axiosConfig = {
      method: "POST",
      url: `${BASE_URL}auth/login`,
      data: {
        email,
        password,
      },
    };
    axios(axiosConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-light/10">
      <div className="bg-white p-5 flex flex-col gap-5 rounded-xl border border-light max-w-sm w-9/12">
        <p className="text-2xl font-bold uppercase">login</p>
        <div className="flex flex-col gap-3">
          <div className="">
            <p className="text-sm text-dark capitalize font-semibold">email</p>
            <input
              className="w-full p-2 outline-none border-light border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@gmail.com"
              type="email"
            />
          </div>
          <div className="">
            <p className="text-sm text-dark capitalize font-semibold">
              password
            </p>
            <input
              className="w-full p-2 outline-none border-light border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              type="password"
            />
          </div>
        </div>
        <button
          type="button"
          className="flex items-center justify-center rounded-md border border-transparent bg-darkBlue px-4 py-2 hover:bg-darkBlue/75 focus:outline-none"
          onClick={() => {
            login();
          }}
        >
          {!loading ? (
            <p className="text-sm font-medium text-white capitalize">login</p>
          ) : (
            <Spinner size={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
