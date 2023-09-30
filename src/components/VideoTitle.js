import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-20 absolute text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className=" bg-white  text-black p-2 px-8 text-xl  rounded-md hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="mx-2 bg-neutral-600 text-white p-2 px-8 text-xl bg-opacity-50 rounded-md hover:bg-opacity-70">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
