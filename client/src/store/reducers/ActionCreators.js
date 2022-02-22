import axios from "axios";
import { addNewUser, setCount, setUsers } from "./UserSlice";

export const fetchUsers = (page, limit) => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/api', {params: {
            page,
            limit
          }
        });
        dispatch(setUsers(response.data.users));
        dispatch(setCount(response.data.count))
    } catch(e) {
         alert(e)
    }
}


export const sort = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/api/sort');
        dispatch(setUsers(response.data))
    } catch(e) {
         alert(e)
    }
}

export const search = (login) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/search?login=${login}`);
        dispatch(setUsers(response.data))
    } catch(e) {
         alert(e)
    }
}

export const newUser = (first_name, last_name,email, password, login) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api', {
            first_name,
            last_name,
            email,
            password,
            login
        });
        dispatch(addNewUser(response.data));
    } catch(e) {
         alert(e)
    }
}

export const editUser = (id,newData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api/edit', {
           id,
           newData
        });
        console.log(response.data)
    } catch(e) {
         alert(e)
    }
}