import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { Link } from "react-router-dom";

const PostsExcerpt = ({postId}) => {
  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article >
        <h2>{post.title}</h2>
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