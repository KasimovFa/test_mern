import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    currentUser: {},
    show: false,
    count: 0
}

export const UserSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
       setUsers: (state, { payload }) => {
           state.users = payload;
       },
       setCurrentUser: (state,  { payload }) => {
           state.currentUser = payload;
       },
       showModal: (state) => {
           state.show = true
       },
       hideModal: (state) => {
           state.show = false;
       },
       addNewUser: (state, {payload}) => {
           state.users.push(payload)
       },
       setCount: (state, {payload}) => {
           state.count = payload;
       }
   }
});

export const { setUsers, setCurrentUser,showModal, hideModal, addNewUser, setCount} = UserSlice.actions;

export default UserSlice.reducer;
