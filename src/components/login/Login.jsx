import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useUserService } from '../../services/useUserService';

import Button from '../common/Button';
import Card from '../common/Card';
import Input from '../common/Input';

function Login() {
  const userService = useUserService();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = e => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (endpoint !== "login") {
      navigate('/users/add', { state: { 
        signup: true
      }});
    } else {
      if (!username) {
        setUsernameError("Please enter your Username");
      }
      if (!password) {
        setPasswordError("Please enter your Password");
      }
      if (password && username) {
        await userService.login(username, password);
      }
    }
  }

  return (
    <Card>
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <Input
          id="username"
          name="username"
          title="Username Input"
          type="text"
          placeholder="Username"
          label="Username"
          required={true}
          disabled={false}
          onChange={handleUsernameChange}
          value={username}
          error={usernameError}
          spacing={2}
        />
        <Input
          id="password"
          name="password"
          title="Password Input"
          type="password"
          placeholder="**********"
          label="Password"
          required={true}
          disabled={false}
          onChange={handlePasswordChange}
          value={password}
          error={passwordError}
          spacing={4}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between">
          <Button
            type="button"
            title="Sign In Button"
            onClick={(e) => handleSubmit(e, "login")}
            text="Sign In"
          />
          {!isLoggedIn && <Button
            type="button"
            title="Create Account Button"
            onClick={(e) => handleSubmit(e, "signup")}
            text="Create Account"
          />}
          <a
            className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800"
            href="/reset"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </Card>
  );
}

export default Login;