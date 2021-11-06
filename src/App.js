import "./App.css";
import Home from "./Pages/Home/Home";
import TopNavbar from "./Components/Topnavbar/TopNavbar";
import Single from "./Components/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Register />
      {/* <Login /> */}
      {/* <Settings /> */}
      {/* <Write /> */}
      {/* <Single /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
