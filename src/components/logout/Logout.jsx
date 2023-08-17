import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserService } from '../../services/useUserService';

import Card from '../common/Card';
import Button from '../common/Button';

function Logout() {
  const loggedOutMessage =
    "You have successfully logged out of the application";
  const userService = useUserService();
  const navigate = useNavigate();
  const [loggedOut, setLoggedOut] = useState(false);
  const [renderedMessage, setRenderedMessage] = useState('');

  useEffect(() => {
    const logout = async () => {
      await userService.logout();
    };
    const isUserLoggedIn = localStorage.getItem('user');
    if (isUserLoggedIn) {
      localStorage.removeItem('user');
      const { message } = logout();
      if (message && message === loggedOutMessage) {
        setLoggedOut(!loggedOut);
        setRenderedMessage(loggedOutMessage);
      } else {
        setRenderedMessage("There was a problem logging out");
      }
    } else {
      setRenderedMessage(loggedOutMessage);
    }
  }, []);
  
  return (
    <Card title="Success!">
      <div className="pl-6 pr-6 pb-6">
        <div className="pb-4">{renderedMessage}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between">
          <Button
            type="button"
            title="Log In Button"
            onClick={() => navigate('/login')}
            text="Log In Again"
          />
          <Button
            type="button"
            title="Create Account Button"
            onClick={() => navigate('/')}
            text="Go Home"
          />
        </div>
      </div>
    </Card>
  );
}

export default Logout;