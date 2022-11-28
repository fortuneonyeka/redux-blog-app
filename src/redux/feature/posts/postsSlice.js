import { createSlice,nanoid } from "@reduxjs/toolkit";



const initialState = [
  {id: 1, title:"Learn Redux Toolkit", content:"I am learning redux toolkit" },
  {id: 2, title:"Learn Redux Thunk", content:"I am learning redux Thunk" }
]

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPosts:{
      reducer (state,action) {
      state.push(action.payload)
    },
    prepare(title,content) {
      return {
        payload: {
          id: nanoid(), 
          title, 
          content
        }
      }
    }
  }
}
})

export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer

export const {addPosts} = postsSlice.actions