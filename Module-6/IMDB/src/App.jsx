import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WatchList from "./pages/WatchList/WatchList";

import '@fortawesome/fontawesome-free/css/all.min.css';
import GrandParent from "./concepts/Context/ContextAPI";
import Context from "./concepts/Context/ContextAPI";
import WatchListContext, { WatchListProvider } from "./Context/WatchListContext";
import Counter from "./pages/Counter/Counter";
import {Provider} from "react-redux";
import Store from './redux/store/store';
import Todo from "./pages/Todo/Todo";
import User from "./pages/Users/user";


function App() {
  return (
    <div>
      <Provider store={Store}>

      <BrowserRouter>
      <WatchListProvider>
        <Navbar />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </WatchListProvider>
        
      </BrowserRouter>
      </Provider>
 

    </div>
  );
}

export default App;
