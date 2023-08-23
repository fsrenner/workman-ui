import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChurchService } from "../../services/useChurchService";
import { states } from "../../util/states";
import Card from "../common/Card";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";

import {
  zipCodePattern,
  phoneNumberPattern,
} from "../../util/regex";

function CreateChurch() {
  const churchService = useChurchService();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [denomination, setDenomination] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
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
  const handleTermsChange = () => {
    setTermsAgreed(!termsAgreed);
    setTermsAgreedError("");
  };

  const isValidZip = (input) => input.match(zipCodePattern);
  const isPhoneValid = (input) => input.match(phoneNumberPattern);

  const submitForm = async () => {
    const response = await churchService.addChurch({
      name,
      denomination,
      description,
      email,
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
        </form>
      </div>
    </Card>
  );

}

export default CreateChurch;