import React from 'react'
import { useSelector } from "react-redux"
import { selectPostById } from "./postsSlice"
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButtons from "./ReactionsButtons";
import { useParams,Link } from "react-router-dom";

const SinglePostPage = () => {
const {postId} = useParams()


  const post = useSelector((state) => selectPostById(state, Number(postId)))

  if (!post) {
    return (
      <section><h2>Post not found</h2></section>
    )
  }
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
          <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
          <Link to={`/post/delete/${post.id}`}>Delete Post</Link>
          <PostAuthor userId={post.userId}/>
          <TimeAgo timeStamp={post.date}/>
      </p>
      <ReactionsButtons post={post}/>
    </article>
  )
  
}

export default SinglePostPage