const Post = ({ post, handleDelete }) => {
  return (
    <div className="post">
      <img src={post.image} alt="" />
      <div className="post-author">By: {post.author ? post.author : "Ali"}</div>
      <h3>{post.title}</h3>
      <button className="btn" onClick={() => handleDelete(post.id)}>
        Delete
      </button>
    </div>
  );
};

export default Post;
