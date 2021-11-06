import "./App.css";

import Home from "./Pages/Home/Home";
import TopNavbar from "./Components/Topnavbar/TopNavbar";
import Single from "./Components/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Post from "./Components/Post/Post";
function App() {
  const user = false;
  return (
    <Router>
      <TopNavbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
