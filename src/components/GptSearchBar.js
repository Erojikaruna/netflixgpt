import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]  flex justify-center">
      <form className=" w-1/2  bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-2  m-3 col-span-10"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="col-span-2  m-4 py-2 px-4 bg-red-800 text-white rounded-lg">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
