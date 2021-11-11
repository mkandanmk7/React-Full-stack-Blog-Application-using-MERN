import React, { useContext, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Settings.css";
import profile from "../../image/profile.jpg";
import { AccountCircle } from "@material-ui/icons";
import axios from "axios";
import { Context } from "../../Context/Context";

function Settings() {
  const { user } = useContext(Context);

  const profPic = "https://muthu-blog-server-api.herokuapp.com/images/";
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      email,
      password,
    };
    if (file) {
      //initially empty object
      const data = new FormData();
      //name combined with timing strings
      const filename = Date.now() + file.name;
      //add key values to data object
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename; //add new user photo

      try {
        //image uploaded with new image,filename
        await axios.post(
          `https://muthu-blog-server-api.herokuapp.com/api/upload/`,
          data
        );
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(
        `https://muthu-blog-server-api.herokuapp.com/api/users/${user._id}`,
        updatedUser
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdate">Update Your Account</span>
          <span className="settingsDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : profPic.user.profilePic}
              alt="profile"
              className="SettingsProfile"
            />
            <label htmlFor="fileInput">
              <AccountCircle className="settingsPPIcon" />
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          <label>User Name</label>
          <input
            type="text"
            placeholder={user.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
