import React, { useState, useEffect } from 'react';
import TypewriterSpinner from '../common/Spinner/TypewriterSpinner';
import MovieCard from '../MovieCard/MovieCard';
import Pagination from '../Pagination/Pagination';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [watchList, setWatchList] = useState(() => {
    const savedWatchList = localStorage.getItem('watchList');
    return savedWatchList ? JSON.parse(savedWatchList) : [];
  });

  const addToWatchList = (movie) => {
    if (!watchList.some((item) => item.id === movie.id)) {
      const updatedWatchList = [...watchList, movie];
      setWatchList(updatedWatchList);
      localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
    }
  };

  const removeFromWatchList = (movie) => {
    const updatedWatchList = watchList.filter((item) => item.id !== movie.id);
    setWatchList(updatedWatchList);
    localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
  };



  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNumber}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [pageNumber]);

  const nextPageFn = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const prevPageFn = () => {
    if (pageNumber === 1) return;
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  if (isLoading) {
    return <TypewriterSpinner />;
  }

  return (
    <div className="text-2xl font-bold text-center m-5">
      <h1>Trending Movies</h1>
      <div className="flex flex-wrap gap-8 justify-evenly">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} watchList={watchList} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList} />
        ))}
      </div>
      <Pagination pageNumber={pageNumber} nextPageFn={nextPageFn} prevPageFn={prevPageFn} />
    </div>
  );
};

export default Movies;
