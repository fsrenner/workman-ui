import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { showConfirmation } from "../store/confirmationSlice";

function useChurchService() {
  const CHURCHES = "/churches";

  const navigation = {
    home: "/",
    users: "/churches",
    unauthorized: "/unauthorized",
  };

  const fetch = useFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return {
    getChurches: async (queryString) => {
      const queries = queryString || "";
      try {
        return await fetch.get(`${CHURCHES}${queries}`, null, "include");
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error fetching the churches: ${error}`,
          })
        );
      }
    },
    addChurch: async (formData) => {
      if (!isLoggedIn) {
        navigate(navigation.unauthorized);
      }
      try {
        const { churches } = await fetch.post(CHURCHES, formData, "include");
        dispatch(
          showConfirmation({
            alertType: "success",
            message: `Successfully added church: ${churches.church_id}`,
          })
        );
        navigate(navigation.churches);
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error adding the church: ${error}`,
          })
        );
      }
    },
    updateChurch: async (formData, churchId) => {
      try {
        await fetch.put(`${CHURCHES}/${churchId}`, formData, "include");
        dispatch(
          showConfirmation({
            alertType: "success",
            message: `Successfully updated church: ${churchId}`,
          })
        );
        navigate(navigation.churches);
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error updating the church: ${error}`,
          })
        );
      }
    },
    deleteUser: async (churchId) => {
      try {
        await fetch.delete(`${CHURCHES}/${churchId}`, null, "include");
        dispatch(
          showConfirmation({
            alertType: "success",
            message: `Successfully deleted church: ${churchId}`,
          })
        );
        navigate(navigation.churches);
      } catch (error) {
        console.error(error);
        dispatch(
          showConfirmation({
            alertType: "error",
            message: `There was an error deleting the church: ${error}`,
          })
        );
      }
    },
  };
}

export { useChurchService };