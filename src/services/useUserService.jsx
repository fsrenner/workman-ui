import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useDispatch } from "react-redux";
import { login, logout } from "../store/loginSlice";

const endpoints = {
  login: '/login',
  logout: '/logout',
  users: '/users',
  verify: '/users/verify'
};

const navigation = {
  home: '/',
  signup: '/signup',
  users: '/users'
};

function useUserService() {
  const fetch = useFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return {
    login: async (username, password) => {
      try {
        console.log(endpoints.login);
        const user = await fetch.post(
          endpoints.login,
          { username, password },
          "include"
        );
        console.log(user);
        dispatch(login(user.user))
        localStorage.setItem("user", JSON.stringify(user.user));
        navigate(navigation.home, { state: { user } });
      } catch (error) {
        console.error(error);
        navigate(navigation.signup);
      }
      
    },
    logout: async () => {
      try {
        await fetch.post(endpoints.logout, null, 'include');
        dispatch(logout());
      } catch (error) {
        console.error(error);
      }
    },
    getUsers: async (queryString) => {
      const queries = queryString || "";
      try {
        return await fetch.get(`${endpoints.users}${queries}`, null, "include");
      } catch (error) {
        console.error(error);
      }
    },
    addUser: async (formData) => {
      try {
        return await fetch.post(endpoints.users, formData, "include");
      } catch (error) {
        console.error(error);
      }
    },
    updateUser: async (formData, userId) => {
      try {
        return await fetch.put(
          `${endpoints.users}/${userId}`,
          formData,
          "include"
        );
      } catch (error) {
        console.error(error);
      }
    },
    deleteUser: async (userId) => {
      try {
        return await fetch.delete(
          `${endpoints.users}/${userId}`,
          null,
          "include"
        );
      } catch (error) {
        console.error(error);
      }
    },
  };
}

export { useUserService };