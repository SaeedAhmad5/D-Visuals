import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import { FlexRow } from '../styles';

import { OneDigitInput } from './style';

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const SPACEBAR = 32;

/* eslint-disable */
interface VerificationCodeInputProps {
  name: string; // Add the name property
  error?: boolean;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
  squared?: boolean;
  small?: boolean;
  onFinishInput?: () => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  error,
  onChange,
  onBlur,
  squared,
  small,
  onFinishInput,
}) => {
  const [values, setValues] = useState<string[]>([...Array(4)].map(() => ''));
  const inputs = useRef<any[]>([]);

  //converting values onject to one string
  const getStringCode = (vals: string) => {
    return vals.toString().replace(/,/g, '');
  };

  const isValid = (value: string) => {
    return !isNaN(parseInt(value, 10));
  };

  const focusPrevious = (slot: number) => {
    if (slot !== 0) {
      inputs.current[slot - 1].focus();
    }
  };

  const focusNext = (slot: any) => {
    if (slot !== 5) {
      inputs.current[slot + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, idx: number) => {
    const v = e.clipboardData.getData('text');
    if (!isValid(v)) return;
    let valuetoArray = v.trim().split('');
    if (valuetoArray.length > 4) {
      valuetoArray = valuetoArray.slice(0, 4);
    } else if (valuetoArray.length < 4) {
      const currentValues = [...values];
      currentValues.splice(idx, valuetoArray.length, ...valuetoArray);
      if (idx + valuetoArray.length < 4) {
        focusNext(idx + valuetoArray.length - 1);
      }
      valuetoArray = currentValues;
    }
    setValues(valuetoArray);
    onChange(getStringCode(valuetoArray.join('')));
    if (valuetoArray.length === 4) {
      inputs.current[idx].blur();
      if (onFinishInput) {
        e.preventDefault();
        onFinishInput();
      }
    }
  };

  const onKeyDown = (e: any, slot: any) => {
    if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
      if (values[slot]) {
        handleChar('', slot);
      } else if (slot !== 0 && !values[slot]) {
        handleChar('', slot - 1);
        focusPrevious(slot);
      }
    } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
      focusPrevious(slot);
    } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
      focusNext(slot);
    } else if (e.keyCode === SPACEBAR || e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space') {
      e.preventDefault();
    }
  };

  const handleChange = (e: any, slot: any) => {
    const { value } = e.target;
    if (!isValid(value)) return;
    if (value) {
      handleChar(value, slot);
      focusNext(slot);
      if (slot === 5) {
        inputs.current[slot].blur();
        if (onFinishInput) {
          onFinishInput();
        }
      }
    }
  };

  const handleChar = (char: any, slot: any) => {
    const newValues = [...values];
    //user typed 1 character
    newValues[slot] = char;
    setValues(newValues);
    onChange(getStringCode(newValues.join('')));
  };

  const handleFocus = (e: any) => {
    e.target.select();
  };

  return (
    <FlexRow data-testid='verification-code-input'>
      {values.map((value, idx) => (
        <OneDigitInput
          key={idx}
          maxLength={1}
          squared={squared}
          small={small}
          autoFocus={idx === 0}
          onFocus={handleFocus}
          onPaste={(e: any) => handlePaste(e, idx)}
          onInput={(e: any) => handleChange(e, idx)}
          type='tel'
          name={idx.toString()}
          data-testid={`verification-code-${idx}`}
          value={value}
          onKeyDown={(e: any) => onKeyDown(e, idx)}
          isInvalid={error}
          ref={(ref: any) => inputs.current.push(ref)}
        />
      ))}
    </FlexRow>
  );
};

VerificationCodeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFinishInput: PropTypes.func,
  error: PropTypes.bool,
  squared: PropTypes.bool,
  small: PropTypes.bool,
};

export default VerificationCodeInput;
