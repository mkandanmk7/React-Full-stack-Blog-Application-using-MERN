import { Add } from "@material-ui/icons";
import React from "react";
import "./Write.css";
import postImg from "../../image/bg.jpg";

function Write() {
  return (
    <div className="write">
      <img src={postImg} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <Add />
          </label>
          <input type="file" className="fileDisplay" id="fileInput" />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
