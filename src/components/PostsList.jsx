import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "../redux/feature/posts/postsSlice"

const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  console.log(posts);
  const renderedList = posts.map(post =>{
    return(
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </article>
    )
  })
  return (
    <section>
        <h2>Posts</h2>
        {renderedList}
    </section>
  )
}

export default PostsList