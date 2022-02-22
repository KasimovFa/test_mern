import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from '../store/reducers/ActionCreators';


const Page = () => {
    let items = [];
    const { count } = useSelector((state) => state.users);
    const pageCount = Math.round(count / 2);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const pagination = (number) => {
        dispatch(fetchUsers(number, 2)) 
        setPage(number)
    }

    for (let number = 1; number < pageCount+1; number++) {
      items.push(
         <Pagination.Item 
            key={number} 
            active={number === page} 
            onClick={() => pagination(number)}
        >
           {number}
        </Pagination.Item>,
    );
   }   
    return (
        <div>
           <Pagination>{items}</Pagination>
           <br />
      </div>
    );
};

export default Page;