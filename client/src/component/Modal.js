import React, { useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../store/reducers/UserSlice';
import { newUser } from '../store/reducers/ActionCreators';

const ModalWindow = () => {
    const {show} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const nameInput = useRef();
    const lastNameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const loginInput = useRef();

    const handleClose = () => dispatch(hideModal());

    const addUser = () =>  {
        dispatch(newUser(
            nameInput.current.value,
            lastNameInput.current.value,
            emailInput.current.value,
            passwordInput.current.value,
            loginInput.current.value
          )
        )
        dispatch(hideModal())
    }

    return (
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавления пользователя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input 
             type={"text"}
             placeholder="Введите имя"
             ref={nameInput}
             style={{margin: '0 20px 0 0'}}
          />  
           <input 
             type={"text"}
             placeholder="Введите фамилию"
             ref={lastNameInput}
             
          />  
           <input 
             type={"text"}
             placeholder="Введите почту"
             ref={emailInput}
             style={{margin: '10px 20px 0 0'}}
          />  
           <input 
             type={"password"}
             placeholder="Введите пароль"
             ref={passwordInput}
          />  
           <input 
             type={"text"}
             placeholder="Введите логин"
             ref={loginInput}
             style={{marginBlockStart: '10px'}}
          />  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={addUser}>
             Добавить пользователя
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ModalWindow;