import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Request";
function Movies() {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[750px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold">{movie?.title}</h1>
          <div className=" my-3">
            <button className="text-black px-5 py-2 border border-gray-500  bg-gray-100 capitalize">
              play
            </button>
            <button className="text-white px-5 py-2 border border-gray-500 ml-5 capitalize">
              watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">{movie?.release_date}</p>
          <p className="w-[60%] text-gray-300 md:mx-w-[70%]  lg:mx-w-[50%] xl:mx-w-[35%]">
            {truncateString(movie?.overview, 180)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movies;
