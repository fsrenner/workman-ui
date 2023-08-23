import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/loginSlice";
import { showConfirmation } from '../store/confirmationSlice';

function useUserService() {
  const endpoints = {
    login: "/login",
    logout: "/logout",
    users: "/users",
    verify: "/users/verify",
  };

  const navigation = {
    home: "/",
    signup: "/signup",
    login: "/login",
    users: "/users",
  };

  const fetch = useFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const loggedInUser = useSelector((state) => state.login.user);

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
        dispatch(login(user.user));
        localStorage.setItem("user", JSON.stringify(user.user));
        dispatch(
          showConfirmation({
            alertType: 'success',
            message: 'Successfully logged in',
          })
        );
        navigate(navigation.home, { state: { user } });
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error logging the user in: ${error}`,
          })
        );
        navigate(navigation.signup);
      }
      
    },
    logout: async () => {
      try {
        await fetch.post(endpoints.logout, null, 'include');
        dispatch(logout());
        dispatch(
          showConfirmation({
            alertType: "success",
            message: "Successfully logged out",
          })
        );
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error logging the user out: ${error.message}`,
          })
        );
      }
    },
    getUsers: async (queryString) => {
      const queries = queryString || "";
      try {
        return await fetch.get(`${endpoints.users}${queries}`, null, "include");
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error fetching the users: ${error.message}`,
          })
        );
      }
    },
    addUser: async (formData) => {
      try {
        const { users } = await fetch.post(endpoints.users, formData, "include");
        dispatch(
          showConfirmation({
            alertType: "success",
            message: `Successfully created user: ${users.user_id}`,
          })
        );
        if (isLoggedIn) {
          navigate(navigation.users);
        } else {
          navigate(navigation.login);
        }
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error creating the user: ${error}`,
          })
        );
      }
    },
    updateUser: async (formData, userId) => {
      try {
        const user = await fetch.put(
          `${endpoints.users}/${userId}`,
          formData,
          "include"
        );
        dispatch(
          showConfirmation({
            alertType: "success",
            message: `Successfully updated user: ${userId}`,
          })
        );
        if (isLoggedIn && userId === loggedInUser.user_id) {
          dispatch(login(user.users));
          navigate(navigation.home, { state: { user: user.users } });
        } else {
          navigate(navigation.users);
        }
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error updating the user: ${error}`,
          })
        );
      }
    },
    deleteUser: async (userId) => {
      try {
        await fetch.delete(
          `${endpoints.users}/${userId}`,
          null,
          "include"
        );
        dispatch(
          showConfirmation({
            alertType: "success",
            message: `Successfully deleted user: ${userId}`,
          })
        );
        navigate(navigation.users);
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error deleting the user: ${error}`,
          })
        );
      }
    },
  };
}

export { useUserService };