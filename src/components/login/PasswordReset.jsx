import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useUserService } from "../../services/useUserService";

import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";
import AlertMessage from "../common/AlertMessage";

function PasswordReset() {

  // const userService = useUserService();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("")
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [zipError, setZipError] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleZipChange = (e) => setZip(e.target.value);

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (endpoint !== "reset") {
      navigate("/login");
    } else {
      if (!username) {
        setUsernameError("Please enter your Username");
      }
      if (!email) {
        setEmailError("Please enter your Email Address");
      }
      if (!zip) {
        setZipError("Please enter your Zip Code");
      }
      if (email && username && zip) {
        setEmailError('');
        setUsernameError('');
        setZipError('');
        
        console.log({
          email,
          username,
          zip,
        })
        // await userService.login(username, password);
      }
    }
  };

  return (
    <>
      <Card title="Reset Password">
        <AlertMessage message="test" alertType="warning" />
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
            id="email"
            name="email"
            title="Email Input"
            type="email"
            placeholder="Email"
            label="Email"
            required={true}
            disabled={false}
            onChange={handleEmailChange}
            value={email}
            error={emailError}
            spacing={2}
          />
          <Input
            id="zip"
            name="zip"
            title="Zip Input"
            type="number"
            placeholder="Zip"
            label="Zip"
            required={true}
            disabled={false}
            onChange={handleZipChange}
            value={zip}
            error={zipError}
            spacing={4}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between">
            <Button
              type="button"
              title="Reset Password Button"
              onClick={(e) => handleSubmit(e, "reset")}
              text="Submit"
            />
            <Button
              type="button"
              title="Cancel Button"
              onClick={(e) => handleSubmit(e, "cancel")}
              text="Cancel"
            />
          </div>
        </form>
      </Card>
    </>
  );
}

export default PasswordReset;
