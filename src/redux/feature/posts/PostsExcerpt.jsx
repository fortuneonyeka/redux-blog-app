import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";

const PostsExcerpt = ({post}) => {
  return (
    <article >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p className="postCredit">
              <PostAuthor userId = {post.userId}/>
              <TimeAgo timeStamp={post.date}/>
              </p>
              <ReactionsButtons post={post}/>
      </article>
  )
}

export default PostsExcerpt