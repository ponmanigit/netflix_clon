import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import Loading from "./New";
import { BsPlayCircle, BsYoutube } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/netflixcontext";
// import "../Row/Row.css";

const base_url = "https://image.tmdb.org/t/p/original";
const DataRow = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();
  const [load, setload] = useState(true);
  const [play, setPlay] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const { you } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(response.data.results);
      setload(false);
      return response;
    };
    fetchData();
  }, []);

  useEffect(() => {
    const backdata = async () => {
      const { data } = await axios.get(
        ` https://api.themoviedb.org/3${params.id}`
      );
      setload(data);
    };
    backdata();
  }, [params?.id]);

  if (load) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-[100%] bg-[url(D:\reactnetflix\project\ponmani\src\Assets\pngwing.com.png)] bg-contain bg-no-repeat bg-black">
        <div className=" font-sans text-2xl text-white uppercase   ">
          <Loading />
          <video
            src="project\ponmani\src\Assets\spider-man-no-way-home-trailer-2_h1080p.mov"
            type="video/mp4"
          ></video>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" overflow-x-auto">
        <h1 className="title">{title}</h1>
        <div className="row-posters flex w-[600vh]">
          {fetchUrl?.map((movie) => (
            <li className="relative list-none flex-1">
              <img
                src={`${base_url}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie.name}
                className=" w-[250px] h-[200px] hover:scale-110 duration-1000 "
                key={movie.id}
              />
              <div className="space-x-5 place-items-center absolute bottom-0 flex w-[100%] bg-[#00000074] h-20 text-cyan-50">
                {/* <div className=""> */}
                <BsPlayCircle
                  onClick={() => {
                    navigate(`/browser/${movie.id}`);
                    setPlay(!play);
                    you(movie.video_id);
                  }}
                />
                <AiOutlinePlusCircle className="" />
                <FaRegThumbsUp />
                <IoIosArrowDropdown />
                {/* </div> */}
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default DataRow;
