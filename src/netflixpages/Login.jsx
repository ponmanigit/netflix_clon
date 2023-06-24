import React, { useState } from "react";
import "../netflixpages/Netflix.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [log, setLog] = useState({ password: "", email: "" });
  console.log(log);
  const postuser = async (log) =>
    await axios.put("http://localhost:3006/users/1", { ...log });
  const navigator = useNavigate();
  const gopage = () => {
    if (log.password.length > 6 && log.email.endsWith("@gmail.com")) {
      navigator("/browser");
      postuser(log);
    }
  };
  return (
    <div className="bg-[url('https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200')] bg-cover">
      <div className="grid justify-center items-center h-[100vh]    ">
        <div className=" bg-[#000000b1] w-[450px] h-[550px] mt-10 ">
          <div>
            <h1 className=" font-sans font-extrabold text-4xl m-5 p-2 text-white">
              Sign in
            </h1>
            <div className="relative">
              <input
                type="email"
                onChange={(event) =>
                  setLog({ ...log, email: event.target.value })
                }
                placeholder=" "
                className="border bg-[#00000073] w-[400px] m-5 p-2  text-white log"
              />
              <label className="absolute  left-0 top-7 ml-8 text-white">
                Email and number{" "}
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                onChange={(event) =>
                  setLog({ ...log, password: event.target.value })
                }
                placeholder=" "
                className="border bg-[#00000073] w-[400px] m-5 p-2  text-white log "
              />
              <label className="absolute  left-0 top-7 ml-8 text-white ">
                password
              </label>
            </div>
            <button
              className="border bg-red-600 text-white w-[400px] m-5 p-2"
              onClick={gopage}
            >
              sign in
            </button>
          </div>
          <div className=" flex">
            <input type="checkbox" className="m-5" />
            <span className="rem">Remainder</span>
            <p className="text-white m-5 ml-[200px]">Need to help?</p>
          </div>
          <div>
            <h2 className="text-white m-5">New to Netflix?Sing up now</h2>
            <h4 className="text-white m-5">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="text-blue-800"> Learn more.</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
