import { useLocation, useNavigate } from "react-router-dom";
import { useUserService } from "../../services/useUserService";

import User from "./User";
import Button from "../common/Button";

function DeleteUser() {
  const userService = useUserService();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = state;

  const confirmDelete = async () => await userService.deleteUser(user.user_id);
  return (
    <div className="flex items-center justify-center">
      <div>
        <p className="pb-4 text-center">You are about to delete the following user:</p>
        <User user={user} hideButtons={true} />
        <div className=" pt-6 grid grid-cols-2 gap-4 items-center justify-between">
          <Button
            type="button"
            title="Delete User Button"
            onClick={() => confirmDelete()}
            text="Let's Do This"
          />
          <Button
            type="button"
            title="Return Home Button"
            onClick={() => navigate("/")}
            text="Run Away"
          />
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;