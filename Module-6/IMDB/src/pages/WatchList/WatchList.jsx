import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import TypewriterSpinner from "../../Components/common/Spinner/TypewriterSpinner";
import genreids from "../../../utils/generes";
import WatchListContext from "../../Context/WatchListContext";

const WatchList = () => {
  // const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  // use the watchlist from the context
  const { watchList: movies, setWatchList: setMovies, removeFromWatchList } = React.useContext(WatchListContext);

  const onSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);

    if (searchValue === "") {
      // Reset movies from local storage when search is cleared
      const savedWatchList = localStorage.getItem("watchList");
      if (savedWatchList) {
        const watchList = JSON.parse(savedWatchList);
        setMovies(watchList);
      }
    } else {
      const updatedMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setMovies(updatedMovies);
    }
  };


  // fetch movies from local storage and get the genere ids and map to the genre names and give me the list of genre
  const genereNames = movies.map((movie) => {
    return movie.genre_ids && movie.genre_ids.length > 0 ? genreids[movie.genre_ids[0]] : null;
  }).filter(Boolean);

  genereNames.unshift("All Genres");

  // fetch the data from the local storage
  // useEffect(() => {
  //   setIsLoading(true);

  //   const fetchMovies = async () => {
  //     const savedWatchList = localStorage.getItem("watchList");
  //     if (savedWatchList) {
  //       const watchList = JSON.parse(savedWatchList);
  //       setMovies(watchList);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchMovies();
  // }, []);

  // const onMovieDelete = (id) => {
  //   const updatedMovies = movies.filter((movie) => movie.id !== id);
  //   setMovies(updatedMovies);
  //   localStorage.setItem("watchList", JSON.stringify(updatedMovies));
  // }



  if (isLoading) {
    return <TypewriterSpinner />;
  }

  const filterMoviesBasedOnGenere =(genre) => () => {
    if(genre === "All Genres") {
      const savedWatchList = localStorage.getItem("watchList");
      if (savedWatchList) {
        const watchList = JSON.parse(savedWatchList);
        setMovies(watchList);
      }
    }
    else {
      const updatedMovies = movies.filter((movie) => {
        return movie.genre_ids && movie.genre_ids.length > 0 ? genreids[movie.genre_ids[0]] === genre : false;
      });
      setMovies(updatedMovies);
    }
  }

  return (
    <div>
      <div className="flex justify-center">
        {
          genereNames.map((genre) => (
            <div key={genre} onClick={filterMoviesBasedOnGenere(genre)} className="flex m-2 p-2 bg-blue-400 rounded-lg cursor-pointer h-[3rem] w-[9rem] text-white mx-4 font-bold justify-center items-center">{genre}</div>
          ))
        }
      </div>

      {/* search bar */}
      <div className="flex justify-center">
          <input type="text" value={search} onChange={onSearchChange} placeholder="Search for movies" className="border-2 border-gray-200 p-2 m-2 w-[50%] rounded-lg" />
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
              <th className="px-4 py-2">Actions</th>
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
                  <td onClick={()=>removeFromWatchList(movie.id)} className="text-red-500 cursor-pointer">Delete</td>
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
