import React from "react";
import "./TopNavbar.css";
import Profile from "../../image/profile.jpg";
import { Facebook, GitHub, Mail, Search, WhatsApp } from "@material-ui/icons";

function TopNavbar() {
  return (
    <div className="Topbar">
      <div className="topleft">
        <Facebook className="facebook" />

        <WhatsApp className="whatsapp" />
        <GitHub />
        <Mail className="mail" />
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>

      <div className="topright">
        <img src={Profile} alt="profile" />

        <Search />
      </div>
    </div>
  );
}

export default TopNavbar;
