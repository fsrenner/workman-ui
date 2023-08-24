export { zipCodePattern, phoneNumberPattern, dobPattern, removeNonDigitChars };

const zipCodePattern = /\b\d{5}\b/;
const phoneNumberPattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
const dobPattern =
  /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const removeNonDigitChars = (string) => string.replace(/\D/g, "");