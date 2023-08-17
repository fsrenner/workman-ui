import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserService } from '../../services/useUserService';

import User from './User';
import Button from '../common/Button';

function Users() {
  const navigate = useNavigate();
  const userService = useUserService();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreateClick = (e) => {
    e.preventDefault();
    navigate('/users/add');
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await userService.getUsers();
      setUsers(data.users);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-5xl pb-8 ml-4 text-center">Users</h1>
      <div className="grid place-items-center">
        <Button
          type="button"
          title="Create User Button"
          onClick={(e) => handleCreateClick(e)}
          text="Create User"
        />
      </div>
      <div>
        {!loading && users.length > 0
          ? users.map((user) => <User key={user.user_id} user={user} />)
          : null}
      </div>
      <div className="grid place-items-center">
        <Button
          type="button"
          title="Create User Button"
          onClick={(e) => handleCreateClick(e)}
          text="Create User"
        />
      </div>
    </>
  );
}

export default Users;