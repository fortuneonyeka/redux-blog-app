import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  
  
  const renderedList = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p className="postCredit">
              <PostAuthor userId = {post.userId}/>
              </p>
      </article>
    );
  });
  return (
    <section>
      <h2>Posts</h2>
      {renderedList}
      
    </section>
  );
};

export default PostsList;
