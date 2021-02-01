import { Link } from "react-router-dom";

const Post = ({ post, handleDelete }) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      <img src={post.image} alt="" />
      <div className="post-author">By: {post.author ? post.author : "Ali"}</div>
      <h3>{post.title}</h3>
      <button className="btn" onClick={() => handleDelete(post.id)}>
        Delete
      </button>
    </Link>
  );
};

export default Post;
