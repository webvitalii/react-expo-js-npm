import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./post-list.component.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <section className="post-list">
        {posts.map((post) => (
          <h3 key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
        ))}
      </section>
    </div>
  );
};

export default PostList;
