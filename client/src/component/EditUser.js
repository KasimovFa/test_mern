import React, { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../store/reducers/ActionCreators';

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userId} = useParams();
    const nameInput = useRef(null);
    const lastNameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const loginInput = useRef(null);


     const modifyUser = () => {
        let newData = {};
        newData['first_name'] = nameInput.current.value;
        newData['last_name'] = lastNameInput.current.value;
        newData['email'] = emailInput.current.value;
        newData['password'] = nameInput.current.value;
        newData['login'] = loginInput.current.value;
        dispatch(editUser(userId, newData));
        navigate("/");
     }

    return (
       <div className="mt-2" style={{width:'500px'}}>
        <Form.Label className="mt-3">Введите новое Имя</Form.Label>
          <Form.Control
             type="text"
             ref={nameInput}
           />
        <Form.Label className="mt-3">Введите новую Фамилию</Form.Label>
          <Form.Control
             type="text"
             ref={lastNameInput}
           />
        <Form.Label className="mt-3">Введите новую Почту</Form.Label>
          <Form.Control
             type="text"
             ref={emailInput}
           />
        <Form.Label className="mt-3">Введите новый Пароль</Form.Label>
          <Form.Control
             type="text"
             ref={passwordInput}
           />
         <Form.Label className="mt-3" >Введите новый Логин</Form.Label>
          <Form.Control
             type="text"
             ref={loginInput}
           />
          <Button className="mt-3" onClick={modifyUser}>Изменить</Button>
     </div>
    );
};

export default EditUser;