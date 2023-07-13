import React from 'react';

export const lettersOnlyKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const pattern = /^[a-zA-Z]+$/;
  const inputChar = String.fromCharCode(event.charCode);
  if (!pattern.test(inputChar)) {
    event.preventDefault();
  }
};
