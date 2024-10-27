import React, { useEffect, useState } from "react";
import TypewriterSpinner from "../../Components/common/Spinner/TypewriterSpinner";

const WatchList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(movies);

  useEffect(() =>{
    // load watchlist from local storage
    const savedWatchList = localStorage.getItem('watchList');
    setMovies(savedWatchList ? JSON.parse(savedWatchList) : []);
    setIsLoading(false);
  }, []);


  if(isLoading){
    return <TypewriterSpinner />
  }
};

export default WatchList;
