import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import PostImg from "../../image/cat.jpg";
import { Delete, Edit } from "@material-ui/icons";
import { useLocation } from "react-router";
import axios from "axios";

function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();

  // console.log(location.pathname.split("/")[2]);
  const postId = location.pathname.split("/")[2];

  const getSinglePost = async () => {
    const res = await axios.get(
      `https://muthu-blog-server-api.herokuapp.com/api/posts/${postId}`
    );
    // console.log(res.data.details);
    setPost(res.data.details);
  };
  //postId useEffect
  useEffect(() => {
    getSinglePost();
  }, [postId]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={post.photo} alt="" className="singlePostImg" />
        ) : (
          <img src={PostImg} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostEdit">
          <Edit color="primary" />
          <Delete style={{ color: "tomato" }} />
        </div>
        <div className="singlePostInfo">
          <span className="author">
            Author: <b>{post.username}</b>{" "}
          </span>
          <span className="date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}

export default SinglePost;
