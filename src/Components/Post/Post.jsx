import react from "react";
import "./Post.css";
import cat from "../../image/cat.jpg";

export default function Post() {
  return (
    <div className="post">
      <img src={cat} alt="cat" />
      <div className="post_info">
        <div className="post_categories">
          <span className="post_cate">Music</span>
          <span className="post_cate">Life</span>
        </div>
        <span className="post_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <span className="time">1 hour ago</span>
      </div>
    </div>
  );
}
