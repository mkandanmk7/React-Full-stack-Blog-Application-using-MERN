import React, { useContext } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import Profile from "../../image/profilePic.png";
import { Facebook, GitHub, Mail, WhatsApp } from "@material-ui/icons";
import { Context } from "../../Context/Context";

function TopNavbar() {
  const { user, dispatch } = useContext(Context);

  //logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); //it wil return user,isfetching,error states
  };
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
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topright">
        {user ? (
          user.profilePic ? (
            <img src={user.profilePic} alt="profile" />
          ) : (
            <img src={Profile} alt="profile" />
          )
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
