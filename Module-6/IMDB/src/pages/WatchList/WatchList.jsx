import { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import TypewriterSpinner from "../../Components/common/Spinner/TypewriterSpinner";
import genreids from "../../../utils/generes";

const WatchList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch movies from local storage and get the genere ids and map to the genre names and give me the list of genre
  const genereNames = movies.map((movie) => {
    return movie.genre_ids && movie.genre_ids.length > 0 ? genreids[movie.genre_ids[0]] : null;
  }).filter(Boolean);

  genereNames.unshift("All Genres");

  // fetch the data from the local storage
  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      const savedWatchList = localStorage.getItem("watchList");
      if (savedWatchList) {
        const watchList = JSON.parse(savedWatchList);
        setMovies(watchList);
      }
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  if (isLoading) {
    return <TypewriterSpinner />;
  }

  return (
    <div>
      
      <div className="flex justify-center">
        {
          genereNames.map((genre) => (
            <div key={genre} className="flex m-2 p-2 bg-gray-200 rounded-lg cursor cursor-pointer bg-blue-400 h-[3rem] w-[9rem] text-white mx-4 font-bold rounded justify-center items-center">{genre}</div>
          ))
        }
      </div>

      {/* search bar */}
      <div className="flex justify-center">
          <input type="text" placeholder="Search for movies" className="border-2 border-gray-200 p-2 m-2 w-[50%] rounded-lg" />
      </div>

      {/* Create the table  */}
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Popularity</th>
              <th className="px-4 py-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              movies.map((movie) => (
                <tr key={movie.id}>
                  <td className="flex items-center px-6 py-4 border px-4 py-2"><img className="h-[6rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
                      <div className="font-medium flex justify-content ">
                        {movie.title}
                      </div>
                  </td>
                  <td className="border px-4 py-2">{movie.vote_average}</td>
                  <td className="border px-4 py-2">{movie.popularity}</td>
                  <td className="border px-4 py-2">{movie.genre_ids && movie.genre_ids.length > 0 ? genreids[movie.genre_ids[0]] : "Unknown"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  );

};

export default WatchList;
