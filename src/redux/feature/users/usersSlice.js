import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = [
  {id: "0", name:"Shawn Mike"},
  {id: "1", name:"Mike Dean"},
  {id: "2", name:"Clair Sedof"}
]
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    addUsers: {

    }
  }
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer
export const {addUsers} = usersSlice.actions