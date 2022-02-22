import {Route, Routes} from 'react-router-dom';
import UserList from "./component/UserList";
import Container from 'react-bootstrap/Container'
import EditUser from './component/EditUser';

function App() {
  return (
    <Container> 
    <Routes>
      <Route path="/" element={<UserList />} />
        <Route path={'users'}>
          <Route index element={<EditUser />} />
          <Route path={':userId'} element={<EditUser />} />
        </Route>
      </Routes>
     </Container>
  );
}

export default App;
