import { Add } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import "./Write.css";
import postImg from "../../image/bg.jpg";
import axios from "axios";
import { Context } from "../../Context/Context";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("in post submit");
    //new post
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        const res = await axios.post(
          "https://muthu-blog-server-api.herokuapp.com/api/upload",
          data
        );
        console.log(res.data);
      } catch (error) {
        console.log("error in image:", error);
      }
    }
    try {
      const res = await axios.post(
        "https://muthu-blog-server-api.herokuapp.com/api/posts",
        newPost
      );
      console.log(res.data);
      // console.log(res.data);
      // window.location.replace(`post/${res.data._id}`);
    } catch (error) {
      console.log("error in new post", error);
    }
  };

  return (
    <div className="write">
      {file ? (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      ) : (
        <img src={postImg} className="writeImg" alt="postImage" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <Add />
          </label>
          <input
            type="file"
            className="fileDisplay"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
