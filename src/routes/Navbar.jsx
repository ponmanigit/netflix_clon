import React, { Profiler, useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import titleimage from "../Assets/pngwing.com.png";
import { FaSearch } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { BiKey } from "react-icons/bi";

import { ImLocation } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../context/netflixcontext";
const bar = ["home", "tvshows", "movie", "recently added", "mylist"];
const Navbar = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(false);
  console.log(user);
  const [search, setSearch] = useState(false);
  const navigator = useNavigate();
  return (
    <div className="flex  border h-20 items-center bg-black text-white gap-5 relative">
      <div>
        <img className="w-[150px] h-[50px]" src={titleimage} alt="" />
      </div>
      {bar.map((title) => (
        <NavLink
          to={title === "home" ? "browse" : title}
          key={title}
          className="font-bold font-sans nav "
        >
          {title[0].toUpperCase() + title.slice(1)}
        </NavLink>
      ))}
      <div className="flex absolute right-10 space-x-10">
        {search ? (
          <div className="relative">
            <FaSearch
              onClick={() => setSearch(!search)}
              className="flex-1 z-10 fill-gray-900 absolute top-3 left-1 animate-bounce"
            />
            <input
              type="search"
              placeholder="enter the movies"
              className="text-black relative px-7 py-2 rounded-md"
            />
          </div>
        ) : (
          <div>
            <FaSearch onClick={() => setSearch(!search)} className="flex-1 " />
          </div>
        )}
        <BsPersonCircle
          className=" h-8 w-10  right-0 imghov"
          onClick={() => setProfile(!profile)}
        />
        {profile ? (
          <div className="profile absolute right-0 top-10 z-10">
            <div className=" bg-black sup top-0 h-32 w-52 grid justify-center items-center right-3 text-white border rounded-lg">
              <div className="flex">
                {user?.map((val) => (
                  <React.Fragment key={val?.id}>
                    <h1>{val?.email}</h1>

                    <BiKey className="flex-1" />
                    <ImLocation className="flex-1" />
                    <button
                      onClick={() => {
                        logout({ username: null });
                        navigator("/login");
                      }}
                    >
                      <BiLogOut />
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Navbar;
