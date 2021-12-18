import "./App.css";
import "./Pages/Pages.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Blog from "./Pages/Blog";
import Postblog from "./Pages/Postblog";
import Viewblog from "./Pages/Viewblog";
import Map from "./Pages/Map";
import ChangePassword from "./Pages/ChangePassword";
import ViewGrievance from "./Pages/ViewGrievance";
import ManageDashboard from "./Pages/ManageDashboard";
import PostGrievance from "./Pages/PostGrievance";
import Postgraph from "./Pages/Postgraph";
import Viewgraph from "./Pages/Viewgraph";

function App() {
  // localStorage.setItem("Auth", false);
  var authenticated = localStorage.getItem("Auth");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {authenticated === "true" && authenticated != null ? (
            <Home />
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/myblogs">
          <Blog />
        </Route>
        <Route exact path="/postblogs">
          <Postblog />
        </Route>
        <Route exact path="/viewblogs">
          <Viewblog />
        </Route>
        <Route exact path="/change_password">
          <ChangePassword />
        </Route>
        <Route exact path="/manage_dashboard">
          <ManageDashboard />
        </Route>
        <Route exact path="/view_grievance">
          <ViewGrievance />
        </Route>
        <Route exact path="/post_grievance">
          <PostGrievance />
        </Route>
        <Route exact path="/post_crop_rates">
          <Postgraph />
        </Route>
        <Route exact path="/view_graph">
          <Viewgraph />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
