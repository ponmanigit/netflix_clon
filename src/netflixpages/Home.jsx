import React from "react";
import "../netflixpages/Netflix.css";
import Netfliximage from "../Assets/pngwing.com.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" h-[100vh] w-[100wh] grid justify-center items-center bg-black text-white ">
      <div>
        <img
          className="w-[150px] h-[50px] absolute left-20 top-14"
          src={Netfliximage}
          alt=""
        />
      </div>
      <div className=" flex absolute right-20 top-14 border border-black">
        <select className="text-black flex justify-end" name="" id="">
          <option value="">English</option> <option value="">Hindi</option>
        </select>
        <Link
          to={"/login"}
          className=" ml-[10px] p-1 border border-zinc-50 bg-rose-600 "
        >
          sign-in
        </Link>
      </div>
      <div className="one  ">
        <h1 className="font-sans font-extrabold text-5xl p-2">
          Ulimited Movie, TV shows and more.
        </h1>
        <h6 className="text-center p-2 ">watch anywhere. cancel anytime.</h6>
        <h5 className="text-center ">
          Ready to watch? Enter your email to create or restart your membership
        </h5>
        <div className="flex justify-center gap-2  p-2 relative ">
          <input
            type="email"
            placeholder=" "
            className="border bg-[#07090a7d] text-center w-[300px] p-2  Em "
          />
          <label className="absolute  right-[530px] top-4">Email address</label>
          <button className=" border  border-white pon p-1 text-white rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
