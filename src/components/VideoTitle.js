import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] md:px-20 px-6 absolute text-white">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="my-3 md:m-0">
        <button className=" bg-white  text-black py-1 md:py-2 px-3 md:px-10 text-xl  rounded-md hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-neutral-600 text-white p-2 px-8 text-xl bg-opacity-50 rounded-md hover:bg-opacity-70">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
