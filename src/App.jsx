import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Home from './components/home/Home';
import Churches from './components/churches/Churches';
import Businesses from './components/businesses/Busineses';
import Users from './components/users/Users';
import Signup from './components/signup/Signup';
import Layout from './components/layout/Layout';
import CreateUser from './components/users/CreateUser';
import PasswordReset from './components/login/PasswordReset';
import UpdateUser from './components/users/UpdateUser';
import DeleteUser from './components/users/DeleteUser';
import CreateChurch from './components/churches/CreateChurch';
import UpdateChurch from "./components/churches/UpdateChurch";
import DeleteChurch from './components/churches/DeleteChurch';
import Unauthorized from './components/unauthorized/Unauthorized';

function App() {
  return (
    <Router basename="">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset" element={<PasswordReset />} />
          <Route exact path="/unauthorized" element={<Unauthorized />} />
          <Route exact path="/churches" element={<Churches />} />
          <Route exact path="/churches/add" element={<CreateChurch />} />
          <Route
            exact
            path="/churches/update/:churchId"
            element={<UpdateChurch />}
          />
          <Route
            exact
            path="/churches/delete/:churchId"
            element={<DeleteChurch />}
          />
          <Route exact path="/businesses" element={<Businesses />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/users/add" element={<CreateUser />} />
          <Route exact path="/users/update/:userId" element={<UpdateUser />} />
          <Route exact path="/users/delete/:userId" element={<DeleteUser />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
