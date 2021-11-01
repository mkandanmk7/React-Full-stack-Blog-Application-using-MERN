import React from "react";
import "./Sidebar.css";
import Profile from "../../image/profile.jpg";
import { Facebook, GitHub, Mail, WhatsApp } from "@material-ui/icons";

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
        <span className="sidebar_title">KEY SKILLS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">JAVASCRIPT</li>
          <li className="sidebarListItem">REACT JS</li>
          <li className="sidebarListItem">NODE JS</li>
          <li className="sidebarListItem">EXPRESS</li>
          <li className="sidebarListItem">MONGO DB</li>
          <li className="sidebarListItem">HTML</li>
          <li className="sidebarListItem">CSS</li>
          <li className="sidebarListItem">SASS</li>
          <li className="sidebarListItem">MATERIAL UI</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebar_title">Follow Me</span>
        <div className="sidebarSocial">
          <Facebook className="facebook" />

          <WhatsApp className="whatsapp" />
          <GitHub />
          <Mail className="mail" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
