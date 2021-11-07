import "./App.css";

import Home from "./Pages/Home/Home";
import TopNavbar from "./Components/Topnavbar/TopNavbar";
import Single from "./Components/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./Components/Post/Post";
function App() {
  const user = false;
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />

        {/* <Route path="/"></Route> */}
        {/* <Route path="/home" component={Home} />
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route> */}
      </Routes>
    </Router>
  );
}

export default App;
