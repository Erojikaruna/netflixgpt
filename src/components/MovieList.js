import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className=" text-lg md:text-2xl py-2 text-white">{title}</h1>
      <div className="flex  no-scrollbar overflow-x-scroll ">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
