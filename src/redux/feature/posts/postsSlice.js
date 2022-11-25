import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {id: 1, title:"Learn Redux Toolkit", description:"I am learning redux toolkit" },
  {id: 2, title:"Learn Redux Thunk", description:"I am learning redux Thunk" }
]

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPosts: (state,action) => {
      state.push(action.payload)
    }
  }
})

export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer

export const {addPosts} = postsSlice.actions