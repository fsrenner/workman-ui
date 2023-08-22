import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import Button from "../common/Button";

function Unauthorized() {
  const navigate = useNavigate();
  return (
    <Card title="Unauthorized">
      <div className="pl-3 pb-3 pr-3">
        <p className="pb-3 text-gray-900 text-sm">
          You are either not logged in or you lost your logged in state. Click
          below to go to the login page, or sign up if you haven&apos;t done so.
        </p>
        <Button
          type="button"
          title="Login Button"
          onClick={() => navigate("/login")}
          text="Login"
        />
        <Button
          type="button"
          title="Sign Up Button"
          onClick={() => navigate("/signup")}
          text="Sign Up"
        />
      </div>
    </Card>
  );
}

export default Unauthorized;