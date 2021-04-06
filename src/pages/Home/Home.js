import Feed from "../../components/Feed/Feed";
import Navigation from "../../components/Navigation/Navigation";
import Profile from "../../components/Profile/SideProfile/SideProfile";
import Tasks from "../../components/Tasks/SideTasks/SideTasks";
import "./Home.css";

import React from "react";

const Home = () => {
  return (
    <>
      <Navigation />

      <div className="bdy">
        <Profile />

        <Feed />

        <Tasks />
      </div>
    </>
  );
};

export default Home;
