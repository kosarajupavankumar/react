import "./App.css";
import Counter from "./pages/Counter";
import ToDOList from "./pages/ToDOList";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <ToDOList />
      <Counter />
      <Welcome name="pavan" />
    </div>
  );
}

export default App;
