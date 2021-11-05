import "./App.css";
import Home from "./Pages/Home/Home";
import TopNavbar from "./Components/Topnavbar/TopNavbar";
import Single from "./Components/Single/Single";
import Write from "./Pages/Write/Write";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Write />
      {/* <Single /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
