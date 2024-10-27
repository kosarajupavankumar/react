import axios from "axios";
import React from "react";

const Banner = () => {
  const [bannerImage, setBannerImage] = React.useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
  );

  const [title, setTitle] = React.useState("PlaceHolder Movie");

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1"
      )
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * res.data.results.length);
        setBannerImage(
          `https://image.tmdb.org/t/p/original${res.data.results[randomIndex].backdrop_path}`
        );
        setTitle(res.data.results[randomIndex].title);
      });
  }, []);

  return (
    <div
      className="h-[20vh] bg-cover bg-center md:h-[75vh] flex items-end"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="text-white text-center w-full text-2xl">{title}</div>
    </div>
  );
};

export default Banner;
