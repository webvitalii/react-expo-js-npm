import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "../StarRating/StarRating";
import "./PostDetails.css";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [postRating, setPostRating] = useState();

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
        <StarRating totalStars={10} initialRating={7} color="#0074cc" />
      </div>

      <div>
        <StarRating totalStars={10} />
      </div>

      <div>
        <StarRating
          totalStars={5}
          color="#008000"
          ratingLabels={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        />
      </div>

      <div>
        <StarRating
          totalStars={10}
          color="#8A2BE2"
          onSetRating={setPostRating}
        />

        <p>
          Post rating: <strong>{postRating}</strong>
        </p>
      </div>

      <div>{post.body}</div>
    </article>
  );
};

export default PostDetails;
