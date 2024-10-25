import React, { useEffect } from "react";
import TypewriterSpinner from "../common/Spinner/TypewriterSpinner";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setIsLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_VALID_API_KEY&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      });
  }, []);

  if (loading) {
    return <TypewriterSpinner />;
  }

  return (
    <div className="text-2xl font-bold text-center m-5">
      <h1>Trending Movies</h1>
      <div className="flex flex-wrap gap-8 justify-evenly">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
