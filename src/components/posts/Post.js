import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      <img src={post.image} alt="" />
      <div className="post-author">By: {post.author ? post.author : "Ali"}</div>
      <h3>{post.title}</h3>
    </Link>
  );
};

export default Post;
