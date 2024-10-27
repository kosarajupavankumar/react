const MovieCard = ({ movie, watchList, addToWatchList, removeFromWatchList }) => {

  const isMovieExist = watchList.find((item) => item.id === movie.id);


  return (
    <div
      className="h-[40vh] bg-cover bg-cover w-[200px] rounded-xl flex flex-col justify-between items-end hover:scaler-110 hover:cursor-pointer duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {
        (!isMovieExist) ? 
        <div onClick={()=>addToWatchList(movie)} className="m-4 flex items-center justify-center h-8 w-8 rounded bg-gray-900/60">😍</div>
        :
        <div onClick={()=>removeFromWatchList(movie)} className="m-4 flex items-center justify-center h-8 w-8 rounded bg-gray-900/60">❌</div>
      }
      <div className="text-white text-center w-full text-2xl rounded bg-gray-900/60">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieCard;

