import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      // 'https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1',

      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to get GPT APT  Movies Results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahed. Example Result:Gadar, Sholy, Don, Jawan, Golmal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    /* if (!gptResults.choices) {
      //error handling
    }
 */
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(" , ");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className=" pt-[30%] md:pt-[10%]  flex justify-center">
      <form
        className="w-full md:w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2  m-3 col-span-10"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="col-span-2  m-4 py-2 px-4 bg-red-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
