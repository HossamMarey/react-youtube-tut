import { useState } from "react";

import Post from "./Post";

const Posts = () => {
  let img1 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  let img2 = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e";
  let img3 = "https://images.unsplash.com/photo-1454165205744-3b78555e5572";
  const [posts, setPost] = useState([
    {
      id: 1,
      title: "post title 1",
      body: "post body ...",
      image: img1,
      author: "Admin",
    },
    {
      id: 2,
      title: "post title 2",
      body: "post body ...",
      image: img2,
      author: "Codv",
    },
    { id: 3, title: "post title 3", body: "post body ...", image: img3 },
  ]);

  const handleDelete = (id) => {
    let curPosts = [...posts];
    let newposts = curPosts.filter((post) => post.id !== id);
    setPost(newposts);
  };
  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} handleDelete={handleDelete} />
      ))}
    </section>
  );
};

export default Posts;
