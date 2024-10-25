const MovieCard = ({ movie }) => {
  return (
    <div
      className="h-[40vh] bg-cover bg-cover w-[200px] rounded-xl flex items-end hover:scaler-110 hover:cursor-pointer duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="text-white text-center w-full text-2xl">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
