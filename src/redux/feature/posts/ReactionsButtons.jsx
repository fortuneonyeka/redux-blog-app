import React from 'react'
import { useDispatch } from "react-redux"
import { addReactions } from "./postsSlice"

const reactionEmoji = {
  thumbsUp: "👍",
  wow :  "😧",
  love : "❤️",
  rocket: "🚀",
  coffee: "☕️"
}

const ReactionsButtons = ({post}) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name}
      type="button"
      className="reactionButton"
      onClick={() => dispatch(addReactions({postId: post.id, reaction: name}))}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })
 
  return <span>{reactionButtons}</span>
}

export default ReactionsButtons