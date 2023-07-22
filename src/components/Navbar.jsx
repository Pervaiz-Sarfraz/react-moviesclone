import React from "react";

function Navbar() {
  return (
    <div className=" flex justify-between items-center p-4 z-[100] w-full absolute">
      <h1 className=" text-red-600 text-4xl font-bold uppercase">Netflix</h1>

      <div className="text-white inline-block">
        <div>
          <button className="text-white pr-6 uppercase">sign in</button>
          <button className="bg-red-600 text-white px-6 py-2 rounded uppercase">
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
