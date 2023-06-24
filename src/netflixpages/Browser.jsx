import { React, useEffect, useState } from "react";
import Navbar from "../routes/Navbar";
import DataRow from "./Backendfectch";
import axios from "axios";
import { useAuth } from "../context/netflixcontext";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa";
import { RiMenuAddLine } from "react-icons/ri";

const base_url = "https://image.tmdb.org/t/p/original";
const Browser = () => {
  const [forrestgump, setForrestgump] = useState([]);
  const [play, setPlay] = useState(true);
  const { pathone, pathsecond, paththird, pathfour, path, you } = useAuth();
  useEffect(() => {
    const comingdata = async () => {
      const { data } = await axios.get(`http://localhost:3006/trending`);
      setForrestgump([data[Math.floor(Math.random() * data.length - 1)]]);
    };
    setInterval(() => {
      comingdata();
    }, 7000);
  }, []);
  // console.log(fo);
  console.log(forrestgump);
  return (
    <div className="h-fit w-full">
      <Navbar />
      {play ? (
        <>
          {forrestgump?.map((oneimg) => (
            <li className="list-none relative">
              <img
                src={`${base_url}${oneimg?.backdrop_path}`}
                alt=""
                className=" h-[70vh] w-screen"
              />
              <div className="absolute bottom-8 left-24">
                <h1 className=" text-5xl text-green-50 font-extrabold font-sans border-b-4 ">
                  {oneimg?.title}
                </h1>
              </div>
              <div className="absolute text-white bottom-[120px] left-24 ">
                {/* <h2>{oneimg?.overview}</h2> */}
                <h1>{oneimg?.viedo_id}</h1>
                <button
                  onClick={() => {
                    setPlay(!play);
                    you(oneimg.video_id);
                  }}
                  className="border px-3 py-3 rounded-md mt-10 bg-rose-50 text-black"
                >
                  {/* play */}
                  <FaPlay />
                </button>

                <button className="border ml-10 px-3 py-3 rounded-md  bg-amber-500 text-black">
                  {/* Add List */}
                  <RiMenuAddLine />
                </button>
              </div>
            </li>
          ))}
        </>
      ) : (
        <YouTube
          videoId={`${path}`}
          opts={{
            width: "1078",
            height: "500",
            playerVars: { autoplay: 1, controls: 0 },
          }}
        />
      )}

      <DataRow title="TRENDING NOW" fetchUrl={pathone} isLargeRow />
      <DataRow title="TOP RATED" fetchUrl={pathsecond} isLargeRow />
      <DataRow title="POPULAR" fetchUrl={paththird} isLargeRow />
      <DataRow title="UPCOMING" fetchUrl={pathfour} isLargeRow />
    </div>
  );
};
export default Browser;
