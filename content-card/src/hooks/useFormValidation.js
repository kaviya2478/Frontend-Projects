import { useState } from "react";

export default function useFormValidation() {
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    let newErrors = {};
    if (!values.name) newErrors.name = "Name is required";
    if (!values.email.includes("@")) newErrors.email = "Invalid email";
    if (values.phone.length < 10) newErrors.phone = "Phone must be 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
}
