import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Bookings from "./pages/Bookings/Bookings";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import LandingPage from "./pages/LandingPage/LandingPage";
import MovieTheatres from "./pages/MovieTheatres/MovieTheatres";
import InvalidPage from "./pages/InvalidPage/InvalidPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<InvalidPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/buyTickets/:movieId/" element={<MovieTheatres />} />
          <Route
            path="/buyTickets/:movieId/:theatreId"
            element={<Bookings />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
