import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { states } from "../../util/states";
import { useUserService } from "../../services/useUserService";

import Card from "../common/Card";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

import {
  zipCodePattern,
  phoneNumberPattern,
  dobPattern,
} from "../../util/regex";

function UpdateUser() {

  const location = useLocation();
  const userService = useUserService();

  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
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
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [zipError, setZipError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
    setDobError("");
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError("");
  };
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleZipChange = (e) => {
    setZip(e.target.value);
    setZipError("");
  };

  const isValidZip = (input) => input.match(zipCodePattern);
  const isPhoneValid = (input) => input.match(phoneNumberPattern);
  const isDobValid = (input) => input.match(dobPattern);

  useEffect(() => {
    const { user } = location.state;
    setUserId(user.user_id);
    setUsername(user.username);
    setEmail(user.email);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setDob(user.date_of_birth);
    setPhone(user.phone_number);
    setAddress(user.setAddress);
    setCity(user.setCity);
    setState(user.state);
    setZip(user.zip);
  }, []);

  const submitForm = async () => {
    const response = await userService.updateUser({
      username,
      email,
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      dob,
      phone,
    }, userId);
    console.log(response);
  };

  const isFormValid = () => {
    let errorCount = 0;
    if (!zip) {
      setZipError("Please enter a zip code");
      errorCount++;
    } else if (zip && !isValidZip(zip)) {
      setZipError("Please enter a valid five digit zip code");
      errorCount++;
    } else {
      setZipError("");
    }
    if (phone) {
      const phoneDigits = phone.replace(/\D/g, "");
      if (!isPhoneValid(phoneDigits)) {
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
    <>
      <Card title="Update User">
        <p className="pl-4 pb-4">
          Update desired fields and submit changes. Current values are
          displayed.
        </p>
        <div className="grid place-items-center">
          <form className="w-11/12 pb-4">
            <Input
              id="username"
              name="username"
              title="Username Input"
              type="text"
              placeholder={username}
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
              placeholder={email}
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
              placeholder={firstName}
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
              placeholder={lastName}
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
              placeholder={dob}
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
              placeholder={phone}
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
              placeholder={address}
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
              placeholder={city}
              label="City"
              required={true}
              disabled={false}
              onChange={handleCityChange}
              value={city}
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
            <Input
              id="zip"
              name="zip"
              title="Zip Code Input"
              type="text"
              placeholder={zip}
              label="Zip Code"
              required={true}
              disabled={false}
              onChange={handleZipChange}
              value={zip}
              error={zipError}
              spacing={2}
            />
            <Button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              text="Submit"
              title="User Update Submit Button"
              classes="text-sm w-full sm:w-auto rounded mt-4"
            />
          </form>
        </div>
      </Card>
    </>
  );

}

export default UpdateUser;