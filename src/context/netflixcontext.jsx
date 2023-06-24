import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { IconContext } from "react-icons/lib";
const ponContext = createContext(null);

const Netflixcontext = ({ children }) => {
  const [pathone, setPathone] = useState([]);
  const [pathsecond, setPathsecond] = useState([]);
  const [paththird, setPaththird] = useState([]);
  const [pathfour, setPathfour] = useState([]);
  const [user, setUser] = useState(null);

  console.log(pathone);

  const contextpage = async () => {
    const { data } = await axios.get("http://localhost:3006/trending");
    setPathone(data);
  };
  console.log(pathone);
  const contextfirst = async () => {
    const { data } = await axios.get("http://localhost:3006/toprated");
    setPathsecond(data);
  };
  const contextsecond = async () => {
    const { data } = await axios.get("http://localhost:3006/popular");
    setPaththird(data);
  };
  const contextthird = async () => {
    const { data } = await axios.get("http://localhost:3006/upcoming");
    setPathfour(data);
  };
  const getUser = async () => {
    const { data } = await axios.get("http://localhost:3006/users");
    setUser(data);
  };

  useEffect(() => {
    contextpage();
    contextfirst();
    contextsecond();
    contextthird();
    getUser();
  }, []);

  const [path, setPath] = useState("");
  const you = (id) => {
    setPath(id);
  };
  const logout = async (val) => {
    await axios.put("http://localhost:3006/users/1", val);
  };

  //  const comingdata = async () => {
  //    const res = await axios.get(`http://localhost:3006/trending`);
  //    setForrestgump(res.data);
  //  };
  //  comingdata();
  return (
    <ponContext.Provider
      value={{
        you,
        path,
        pathone,
        pathsecond,
        paththird,
        pathfour,
        user,
        logout,
        login: setUser,
      }}
    >
      {children}
    </ponContext.Provider>
  );
};
export default Netflixcontext;
export const useAuth = () => useContext(ponContext);
