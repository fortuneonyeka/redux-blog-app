import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  
  
  
  const renderedList = orderedPosts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p className="postCredit">
              <PostAuthor userId = {post.userId}/>
              <TimeAgo timeStamp={post.date}/>
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
