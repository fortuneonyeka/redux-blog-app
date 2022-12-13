import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({post}) => {
  return (
    <article >
        <h3>{post.title}</h3>
        <p className="excerpt">{post.body.substring(0, 50)} ...</p>
        <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
              <PostAuthor userId = {post.userId}/>
              <TimeAgo timeStamp={post.date}/>
              </p>
              <ReactionsButtons post={post}/>
      </article>
  )
}

export default PostsExcerpt