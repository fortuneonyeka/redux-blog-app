import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learn Redux Toolkit",
    content: "I am learning redux toolkit",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      love: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Learn Redux Thunk",
    content: "I am learning redux Thunk",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      love: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPosts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              love: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReactions(state, action) {
      const { postId, reaction } = action.payload;
      const availablePost = state.find((post) => post.id === postId);

      if (availablePost) {
        availablePost.reactions[reaction]++;
      }
    },
  }
});

export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;

export const { addPosts, addReactions } = postsSlice.actions;
