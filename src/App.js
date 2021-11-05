import "./App.css";
import Home from "./Pages/Home/Home";
import TopNavbar from "./Components/Topnavbar/TopNavbar";
import Single from "./Components/Single/Single";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Single />
      {/* <Home /> */}
    </div>
  );
}

export default App;
