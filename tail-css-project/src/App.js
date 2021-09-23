import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";

function App() {
  return (
    <div className="App">
      <Navi/>
      <div class="md:container md:mx-auto">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
