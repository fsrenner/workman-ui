import { useState } from "react";
import { useChurchService } from "../../services/useChurchService";
import { states } from "../../util/states";
import Card from "../common/Card";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";
import TextArea from "../common/TextArea";

import {
  zipCodePattern,
  phoneNumberPattern,
  removeNonDigitChars,
} from "../../util/regex";

function CreateChurch() {
  const churchService = useChurchService();

  const [name, setName] = useState('');
  const [denomination, setDenomination] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [zipError, setZipError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const handleDenominationChange = (e) => setDenomination(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handleWebsiteChange = (e) => setWebsite(e.target.value);
  const handlePhoneChange = (e) => {
    setPhone(removeNonDigitChars(e.target.value));
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

  const submitForm = async () => {
    const response = await churchService.addChurch({
      name,
      denomination,
      description,
      email,
      website,
      phone,
      address,
      city,
      state,
      zip,
    });
    console.log(response);
  }

  const isFormValid = () => {
    let errorCount = 0;
    if (!name) {
      setNameError("Please enter a church name");
      errorCount++;
    } else {
      setNameError("");
    }
    if (zip && !isValidZip(zip)) {
      setZipError("Please enter a valid five digit zip code");
      errorCount++;
    } else {
      setZipError("");
    }
    if (phone) {
      if (!isPhoneValid(phone)) {
        setPhoneError("Please enter a valid phone number");
        errorCount++;
      } else {
        setPhoneError("");
        setPhone(phone);
      }
    } else {
      setPhoneError("");
    }
    return errorCount === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      console.error("There are problems with the form");
    } else {
      submitForm();
    }
  };

  return (
    <Card title="Add Church">
      <div className="grid place-items-center">
        <form className="w-11/12 pb-4">
          <Input
            id="name"
            name="name"
            title="Name Input"
            type="text"
            placeholder=""
            label="name"
            required={true}
            disabled={false}
            onChange={handleNameChange}
            value={name}
            error={nameError}
            spacing={2}
          />
          <Input
            id="denomination"
            name="denomination"
            title="Denomination Input"
            type="text"
            placeholder=""
            label="Denomination"
            required={true}
            disabled={false}
            onChange={handleDenominationChange}
            value={denomination}
            spacing={2}
          />
          <TextArea
            id="description"
            name="description"
            title="Description Textarea"
            placeholder=""
            label="Description"
            required={true}
            disabled={false}
            onChange={handleDescriptionChange}
            value={description}
            spacing={2}
          />
          <Input
            id="email"
            name="email"
            title="Email Input"
            type="email"
            placeholder="something@test.com"
            label="Email"
            required={false}
            disabled={false}
            onChange={handleEmailChange}
            value={email}
            error={emailError}
            spacing={2}
          />
          <Input
            id="website"
            name="website"
            title="Website Input"
            type="text"
            placeholder=""
            label="Website"
            required={false}
            disabled={false}
            onChange={handleWebsiteChange}
            value={website}
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
            required={false}
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
            required={false}
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
            required={false}
            disabled={false}
          />
          <Input
            id="zip"
            name="zip"
            title="Zip Code Input"
            type="text"
            placeholder="99999"
            label="Zip Code"
            required={false}
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
            title="User Create Submit Button"
            classes="text-sm w-full sm:w-auto rounded mt-4"
          />
        </form>
      </div>
    </Card>
  );
}

export default CreateChurch;