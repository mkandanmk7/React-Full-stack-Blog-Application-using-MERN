import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";
import profile from "../../image/profile.jpg";
import { AccountCircle } from "@material-ui/icons";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update Your Account</span>
          <span className="settingsDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={profile} alt="profile" className="SettingsProfile" />
            <label htmlFor="fileInput">
              <AccountCircle className="settingsPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="Muthu" />
          <label>Email</label>
          <input type="email" placeholder="muthu@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
