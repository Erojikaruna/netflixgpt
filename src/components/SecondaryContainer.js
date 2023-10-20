import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black w-screen">
      <div className="mt-0 md:-mt-40 relative pl-4 md:pl-6 z-30">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"TopRated"} movies={movies.TopRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
      </div>

      {/*

  MovieList - popular
    MovieCards* n
  MovieList - NowPlaying
  MovieList - Trending
  MovieList - Hrror


*/}
    </div>
  );
};

export default SecondaryContainer;
