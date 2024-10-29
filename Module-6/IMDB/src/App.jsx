import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WatchList from "./pages/WatchList/WatchList";

import '@fortawesome/fontawesome-free/css/all.min.css';
import GrandParent from "./concepts/Context/ContextAPI";
import Context from "./concepts/Context/ContextAPI";
import WatchListContext, { WatchListProvider } from "./Context/WatchListContext";

function App() {
  return (
    <div>

      <BrowserRouter>
      <WatchListProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </WatchListProvider>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
