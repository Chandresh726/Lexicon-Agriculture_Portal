import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";

const Home = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    // fetch("/time")
    //   .then((res) => res.json())
    //   .then((data) => setTime(data.time));
  }, []);
  return (
    <div>
      <Navbar />
      <h1>HOME PAGER {time}</h1>
    </div>
  );
};

export default Home;
