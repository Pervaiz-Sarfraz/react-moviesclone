import React, { useState, useEffect } from "react";
import { FaHeartbeat, FaHeart } from "react-icons/fa";
function Movie({ item }) {
  const [like, setLikes] = useState(false);

  return (
    <>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2 cursor-pointer"
        key={item.id}
      >
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80  opacity-0 hover:opacity-100 text-white">
          <p className="whitespace-normal flex justify-center items-center font-bold sm:text-sm  text-xs h-full text-center">
            {item?.title}
          </p>
          <p>
            {like ? (
              <FaHeartbeat className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default Movie;
