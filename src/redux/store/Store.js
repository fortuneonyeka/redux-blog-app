import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts/postsSlice"


export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})