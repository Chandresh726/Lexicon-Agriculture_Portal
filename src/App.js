import "./App.css";
import "./Pages/Pages.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  // localStorage.setItem("Auth", false);
  var authenticated = localStorage.getItem("Auth");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {authenticated === "true" ? <Home /> : <Login />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
