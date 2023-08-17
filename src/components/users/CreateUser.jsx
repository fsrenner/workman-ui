import { useState } from "react";
import { useUserService } from "../../services/useUserService";
import { states } from "../../util/states";
import Card from "../common/Card";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";

import { zipCodePattern, phoneNumberPattern, dobPattern } from "../../util/regex";
import { transformDateForService } from "../../util/dates";

function CreateUser() {
  const userService = useUserService();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [verifyPasswordError, setVerifyPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [zipError, setZipError] = useState("");
  const [dateChecked, setDateChecked] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleVerifyPasswordChange = (e) => setVerifyPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleDobChange = (e) => setDob(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleZipChange = (e) => setZip(e.target.value);

  const isValidZip = (input) => input.match(zipCodePattern);
  const isPhoneValid = (input) => input.match(phoneNumberPattern);
  const isDobValid = (input) => input.match(dobPattern);

  const submitForm = async () => {
    const response = await userService.addUser({
      username,
      password,
      email,
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      dob,
      phone,
    });
    console.log(response);
  };

  const isFormValid = () => {
    let errorCount = 0;
    console.log(password);
    console.log(verifyPassword);
    if (password && verifyPassword && password !== verifyPassword) {
      setVerifyPasswordError("The passwords do not match");
      errorCount++;
    } else {
      setVerifyPasswordError("");
    }
    if (!username) {
      setUsernameError("Please enter a username");
      errorCount++;
    } else {
      setUsernameError("");
    }
    if (!password) {
      setPasswordError("Please enter a password");
      errorCount++;
    } else {
      setPasswordError("");
    }
    if (!email) {
      setEmailError("Please enter an email");
      errorCount++;
    } else {
      setEmailError("");
    }
    if (!firstName) {
      setFirstNameError("Please enter a first name");
      errorCount++;
    } else {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError("Please enter a last name");
      errorCount++;
    } else {
      setLastNameError("");
    }
    if (zip && !isValidZip(zip)) {
      setZipError("Please enter a valid five digit zip code");
      errorCount++;
    } else {
      setZipError("");
    }
    if (phone) {
      const phoneDigits = phone.replace(/\D/g, "");
      if(!isPhoneValid(phoneDigits)) {
        setPhoneError("Please enter a valid phone number");
        errorCount++;
      } else {
        setPhoneError("");
        setPhone(phoneDigits);
      }
    } else {
      setPhoneError("");
    }
    if (dob && !isDobValid(dob)) {
      setDobError("Please enter a valid date");
      errorCount++;
    } else if (dob && !dateChecked && isDobValid(dob)) {
      setDobError("");
      setDateChecked(true)
      setDob(transformDateForService(dob));
    } else {
      setDobError("");
    }
    return errorCount === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.error("There are problems with the form");
    } else {
      submitForm();
    }
  };

  return (
    <Card title="Create User">
      <div className="grid place-items-center">
        <form className="w-11/12 pb-4">
          <Input
            id="username"
            name="username"
            title="Username Input"
            type="text"
            placeholder=""
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
            spacing={2}
          />
          <Input
            id="verifyPassword"
            name="verifyPassword"
            title="Verify Password Input"
            type="password"
            placeholder="**********"
            label="Verify Password"
            required={true}
            disabled={false}
            onChange={handleVerifyPasswordChange}
            value={verifyPassword}
            error={verifyPasswordError}
            spacing={2}
          />
          <Input
            id="email"
            name="email"
            title="Email Input"
            type="email"
            placeholder="something@test.com"
            label="Email"
            required={true}
            disabled={false}
            onChange={handleEmailChange}
            value={email}
            error={emailError}
            spacing={2}
          />
          <Input
            id="firstName"
            name="firstName"
            title="First Name Input"
            type="text"
            placeholder=""
            label="First Name"
            required={true}
            disabled={false}
            onChange={handleFirstNameChange}
            value={firstName}
            error={firstNameError}
            spacing={2}
          />
          <Input
            id="lastName"
            name="lastName"
            title="Last Name Input"
            type="text"
            placeholder=""
            label="Last Name"
            required={true}
            disabled={false}
            onChange={handleLastNameChange}
            value={lastName}
            error={lastNameError}
            spacing={2}
          />
          <Input
            id="dob"
            name="dob"
            title="Date of Birth Input"
            type="text"
            placeholder="01/01/2000"
            label="Date of Birth"
            required={true}
            disabled={false}
            onChange={handleDobChange}
            value={dob}
            error={dobError}
            spacing={2}
          />
          <Input
            id="phone"
            name="phone"
            title="Phone Number Input"
            type="text"
            placeholder="999-999-9999"
            label="Phone Number"
            required={true}
            disabled={false}
            onChange={handlePhoneChange}
            value={phone}
            error={phoneError}
            spacing={2}
          />
          <Input
            id="address"
            name="address"
            title="Address Input"
            type="text"
            placeholder=""
            label="Address"
            required={true}
            disabled={false}
            onChange={handleAddressChange}
            value={address}
            spacing={2}
          />
          <Input
            id="city"
            name="city"
            title="City Input"
            type="text"
            placeholder=""
            label="City"
            required={true}
            disabled={false}
            onChange={handleCityChange}
            value={city}
            spacing={2}
          />
          <Input
            id="zip"
            name="zip"
            title="Zip Code Input"
            type="text"
            placeholder="99999"
            label="Zip Code"
            required={true}
            disabled={false}
            onChange={handleZipChange}
            value={zip}
            error={zipError}
            spacing={2}
          />
          <Select
            id="states"
            name="states"
            title="States Select"
            options={states}
            onChange={handleStateChange}
            label="State"
            spacing={2}
            required={true}
            disabled={false}
          />

          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            text="Submit"
            title="User Create Submit Button"
            classes="text-sm w-full sm:w-auto rounded mt-4"
          />
        </form>
      </div>
    </Card>
  );
}

export default CreateUser;
