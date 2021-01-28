import { useState } from "react";

import Post from "./Post";

const Posts = () => {
  let img1 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  let img2 = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e";
  let img3 = "https://images.unsplash.com/photo-1454165205744-3b78555e5572";
  const [posts, setPost] = useState([
    { id: 1, title: "post title 1", body: "post body ...", image: img1 },
    { id: 2, title: "post title 2", body: "post body ...", image: img2 },
    { id: 3, title: "post title 3", body: "post body ...", image: img3 },
  ]);
  return (
    <section className="posts">
      {posts.map((post) => (
        <Post key={post.id} />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </section>
  );
};

export default Posts;
