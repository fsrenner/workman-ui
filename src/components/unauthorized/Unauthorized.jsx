import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import Button from "../common/Button";

function Unauthorized() {
  const navigate = useNavigate();
  return (
    <Card title="You Are Not Logged In">
      <div className="pl-4 pb-4 pr-4">
        <p className="pb-6 text-gray-900 text-sm">
          You are either not logged in or you lost your logged in state. Click
          below to go to the login page, or sign up if you haven&apos;t done so.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between">
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
      </div>
    </Card>
  );
}

export default Unauthorized;