import React from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import Profile from "../../image/profile.jpg";
import { Facebook, GitHub, Mail, Search, WhatsApp } from "@material-ui/icons";

function TopNavbar() {
  const user = false;
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
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>

          <li className="topListItem">ABOUT</li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topright">
        {user ? (
          <img src={Profile} alt="profile" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopNavbar;
