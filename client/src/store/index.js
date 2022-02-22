import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';

export default configureStore({
    reducer: {
        users: userReducer
    }
});
