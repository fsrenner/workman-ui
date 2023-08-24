import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useChurchService } from "../../services/useChurchService";
import { states } from "../../util/states";
import Card from "../common/Card";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";
import TextArea from "../common/TextArea";

function UpdateChurch() {
  return "This is the Update Church component";
}

export default UpdateChurch;
