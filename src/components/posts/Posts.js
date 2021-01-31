import { useState, useEffect } from "react";

import Post from "./Post";

const Posts = () => {
  const [posts, setPost] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    setIsloading(true);
    fetch("http://localhost:4000/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("Not Found");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
        setErrMsg(err.message);
      });
  }, []);

  const handleDelete = (id) => {
    let curPosts = [...posts];
    let newposts = curPosts.filter((post) => post.id !== id);
    setPost(newposts);
  };
  return (
    <section className="posts">
      {posts &&
        posts.map((post) => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        ))}
      {isloading && <div> loading ... </div>}
      {!posts && !isloading && !errMsg && (
        <div className="not-found"> No Posts</div>
      )}
      {errMsg && <div className="error"> {errMsg}</div>}
    </section>
  );
};

export default Posts;
