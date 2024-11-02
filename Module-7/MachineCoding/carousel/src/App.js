import "./App.css";
import Carousel from "./pages/Carousel";

function App() {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "Slide 1 Description",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    },
    {
      id: 2,
      title: "Slide 2",
      description: "Slide 2 Description",
      image:
        "https://t4.ftcdn.net/jpg/10/15/63/49/360_F_1015634941_gDzvrEgEyUQQ9cN1Z6XZ6r5GMgBwCrls.jpg",
    },
    {
      id: 3,
      title: "Slide 3",
      description: "Slide 3 Description",
      image:
        "https://thumbs.dreamstime.com/b/world-tree-roots-made-cables-pipes-connecting-continents-symbolizing-interconnectedness-global-ecosystems-322349884.jpg",
    },
    {
      id: 4,
      title: "Slide 4",
      description: "Slide 4 Description",
      image:
        "https://thumbs.dreamstime.com/z/image-tree-carbon-molecule-shaped-roots-showcasing-link-nature-s-carbon-sequestration-corporate-317588249.jpg",
    },
  ];
  return <Carousel slides={slides} interval={5000} />;
}

export default App;
