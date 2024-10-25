import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-7 items-center py-4 pl-3">
      <Link to="/">
        <img
          src="https://w7.pngwing.com/pngs/781/503/png-transparent-imdb-2016-hd-logo-thumbnail.png"
          alt="IMDB"
          className="w-50 h-10"
        />
      </Link>
      <Link
        to="/"
        className="text-sky-500 font-bold text-3xl"
        style={{ fontSize: "30px" }}
      >
        Movies
      </Link>
      <Link
        to="/watchlist"
        className="text-sky-500 font-bold text-3xl"
        style={{ fontSize: "30px" }}
      >
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
