import React from "react";
import "./Sidebar.css";
import Profile from "../image/profile.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">ABOUT ME</span>
        <img src={Profile} alt="profile" />
        <p className="about_me">
          I'm Muthu Manikdandan from Pollachi. After completing my BE CSE at the
          Government College of Technology Coimbatore (2020), I did a Full
          (MERN) stack web developer course in GUVI Geek Pvt Ltd at Chennai. I'm
          looking for a full-stack web developer role. As a developer, I could
          give my full effort work to your reputed company. Thank You...!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Coding</li>
          <li className="sidebarListItem">Gym</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Driving</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
