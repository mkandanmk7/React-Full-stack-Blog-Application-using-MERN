import react from "react";
import "./Post.css";
import cat from "../../image/cat.jpg";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  console.log(post);
  return (
    <div className="post" key={post._id}>
      {post.photo ? (
        <img src={post.photo} alt="cat" />
      ) : (
        <img src={cat} alt="cat" />
      )}

      <div className="post_info">
        <div className="post_categories">
          {post.categories.map((cate) => {
            return <span className="post_cate">{cate}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post_title">{post.title}</span>
        </Link>
        <span className="time">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="post_desc">{post.desc}</p>
    </div>
  );
}
