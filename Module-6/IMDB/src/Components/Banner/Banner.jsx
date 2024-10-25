import axios from "axios";
import React from "react";

const Banner = () => {
  const [bannerImage, setBannerImage] = React.useState(
    "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
  );

  const [title, setTitle] = React.useState("PlaceHolder Movie");

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_VALID_API_KEY&language=en-US&page=1"
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
