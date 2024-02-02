import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "../star-rating/StarRating";
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

      <div>
        <StarRating />
      </div>

      <div>
        <StarRating totalStars={10} color="#0074cc" />
      </div>

      <div>
        <StarRating
          totalStars={5}
          color="#008000"
          ratingLabels={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        />
      </div>

      <div>{post.body}</div>
    </article>
  );
};

export default PostDetail;
