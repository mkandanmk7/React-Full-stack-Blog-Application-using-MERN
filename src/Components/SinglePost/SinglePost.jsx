import React from "react";
import "./SinglePost.css";
import PostImg from "../../image/cat.jpg";
import { Delete, Edit, Star } from "@material-ui/icons";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={PostImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
        <div className="singlePostEdit">
          <Edit color="primary" />
          <Delete style={{ color: "tomato" }} />
        </div>
        <div className="singlePostInfo">
          <span className="author">
            Author: <b>Muthu</b>{" "}
          </span>
          <span className="date">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit
          fuga laborum illum. Possimus sapiente quaerat quis ea quas similique
          natus, doloribus officia consectetur voluptas itaque doloremque!
          Eaque, repudiandae molestiae!Lorem Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Asperiores veritatis tempora iste
          reiciendis voluptas eum, itaque, esse dolorem accusamus blanditiis
          cumque cum aperiam corrupti pariatur perspiciatis ipsam officia fuga
          in!Lorem
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
