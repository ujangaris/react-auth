import React from 'react';
import { toast } from 'react-toastify';

export const IsValidate = ({
  username,
  name,
  password,
  email,
  phone,
  country,
  address,
}) => {
  let isproceed = true;
  const emailRegex = /^([a-zA-Z0-9._%+-]+)(@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  let errorMessage = 'Please enter the value in ';
  if (username === null || username === '') {
    isproceed = false;
    errorMessage += 'Username';
  }
  if (name === null || name === '') {
    isproceed = false;
    errorMessage += ', Full Name';
  }
  if (phone === null || phone === '') {
    isproceed = false;
    errorMessage += ',  Phone';
  }
  if (country === null || country === '') {
    isproceed = false;
    errorMessage += ',  Country';
  }
  if (password === null || password === '') {
    isproceed = false;
    errorMessage += ', Password';
  }
  if (email === null || email === '') {
    isproceed = false;
    errorMessage += ', Email';
  } else if (!emailRegex.test(email)) {
    // validasi email dengan regex
    isproceed = false;
    errorMessage += ', Valid Email';
  }
  if (address === null || address === '') {
    isproceed = false;
    errorMessage += ', Address';
  }
  if (!isproceed) {
    toast.warning(errorMessage);
  }
  return isproceed;
};
