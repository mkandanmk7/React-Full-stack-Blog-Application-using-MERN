import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  //get posts
  const fetchPosts = async () => {
    const res = await axios.get(
      "https://muthu-blog-server-api.herokuapp.com/api/posts"
    );
    // console.log(res.data.details);
    setPosts(res.data.details);
  };

  useEffect(() => {
    console.log("Posts mounted in home");
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
