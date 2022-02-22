import React, { useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import { fetchUsers, search, sort } from '../store/reducers/ActionCreators';
import ModalWindow from './Modal';
import { showModal } from '../store/reducers/UserSlice';
import { useNavigate } from 'react-router-dom';
import Page from './Page';

const UserList = () => {
     const { users } = useSelector((state) => state.users);
     const dispatch = useDispatch();
     const refInputLogin = useRef();
     const navigate = useNavigate();

     
     const handleShow = () => dispatch(showModal());

     useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const searchUser = () => {
        dispatch(search(refInputLogin.current.value))
    }

    const sortUser = () => {
       dispatch(sort())
    }


    return (
        <>
        <ModalWindow />
        <Button className='mt-2 mb-2' onClick={handleShow}>Добавить пользователя</Button>
        <div style={{display:'flex', justifyContent: "space-between"}}>
        <div style={{display:'flex', alignItems: 'center'}}>
          <InputGroup className="mb-3" style={{ width: "400px"}}>
           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
           <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref={refInputLogin}
            />
           </InputGroup>
           <Button 
              className="m-3 mb-3 mt-0" 
              style={{width: "100px"}}
              onClick = {searchUser}
           >
               Поиск
            </Button>
         </div>
         <Button
            className="mb-3" 
            style={{width: "200px"}}
            onClick={sortUser}
           >
              Сортировка по логину
           </Button>
         </div  >
        <Table striped bordered hover>
          <thead>
           <tr>
             <th>Имя</th>
             <th>Фамилия</th>
             <th>Логин</th>
             <th>Почта</th>
             <th>Пароль</th>
            </tr>
         </thead>
         <tbody>
            {users.map(user => {
                return (
                    <tr 
                      key={user._id}
                      style={{cursor: "pointer"}}
                      onClick={() => navigate(`users/${user._id}`)}
                     >
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.login}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                    </tr>
                )
            })}
          </tbody>
         </Table>
         <Page />
        </>
    );
};

export default UserList;