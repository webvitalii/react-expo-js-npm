import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "../star-rating/star-rating.component";
import "./post-detail.component.css";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [postId]);

  return (
    <article>
      <h2>{post.title}</h2>

      <StarRating />

      <div>{post.body}</div>
    </article>
  );
};

export default PostDetail;
