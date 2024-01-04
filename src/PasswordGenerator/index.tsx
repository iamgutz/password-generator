import { useCallback, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Paper from '../components/Paper';
import generatePassword, { optionsBoundary, strengthScore } from './utils';
import { strengthConfig } from './constants';
import { PasswordStrength } from './definitions';
import TextField from '../components/TextField';
import PasswordDisplay from '../components/PasswordDisplay';
import Checkbox from '../components/Checkbox';
import Slider from '../components/Slider';

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState('12');
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const initialPassword = generatePassword({
    length: parseInt(passwordLength, 10),
    ...options,
  });
  const [password, setPassword] = useState(initialPassword);
  const [wasCopied, setWasCopied] = useState(false);
  const strength = strengthConfig[strengthScore(password) as PasswordStrength];

  const handlePasswordLengthChange = (length: string) => {
    const lengthNumber = parseInt(length, 10);
    let limitedLength = length;
    if (lengthNumber <= 2) {
      limitedLength = '3';
    } else if (lengthNumber >= 51) {
      limitedLength = '50';
    }
    setPasswordLength(limitedLength);
  };

  const handleOptionsChange = (optionName: string, value: boolean) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [optionName]: value,
    }));
  };

  const handleOnCopy = () => {
    if (wasCopied) {
      return;
    }
    setWasCopied(true);
  };

  const refreshPassword = useCallback(() => {
    const newPassword = generatePassword({
      length: parseInt(passwordLength, 10),
      ...optionsBoundary(options),
    });
    setPassword(newPassword);
  }, [options, passwordLength]);

  useEffect(() => {
    refreshPassword();
  }, [refreshPassword]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (wasCopied) {
      timeout = setTimeout(() => {
        setWasCopied(false);
      }, 1500);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [wasCopied]);

  return (
    <Paper>
      <div className="px-4 pt-4 pb-2 md:px-10 md:pt-10">
        <h1 className="text-3xl font-bold text-center">Password Generator</h1>
        <p className="text-center">Create a strong and secure password</p>
      </div>

      <PasswordDisplay
        password={password}
        bgColorClass={strength.bgColorClass}
        textColorClass={strength.textColorClass}
        highlightColorClass={strength.highlightColorClass}
        label={strength.label}
        Icon={strength.icon}
        onCopy={handleOnCopy}
        onRefresh={refreshPassword}
      />

      <div className="flex items-center px-4 md:px-10 my-3">
        <p className="mr-2">Password Length:</p>
        <TextField
          type="number"
          className="text-black"
          value={passwordLength}
          onChange={e => handlePasswordLengthChange(e.target.value)}
        />
      </div>

      <Slider
        minValue={3}
        maxValue={50}
        currentValue={parseInt(passwordLength, 10)}
        onChange={handlePasswordLengthChange}
      />

      <div className="px-4 pb-4 md:px-10 md:pb-10">
        <p>Include:</p>
        <div className="flex items-center my-2">
          <Checkbox
            checked={options.uppercase}
            onChange={e => handleOptionsChange('uppercase', e.target.checked)}
          />
          <label className="ml-3">Uppercase (ABC)</label>
        </div>
        <div className="flex items-center my-2">
          <Checkbox
            checked={options.lowercase}
            onChange={e => handleOptionsChange('lowercase', e.target.checked)}
          />
          <label className="ml-3">Lowercase (abc)</label>
        </div>
        <div className="flex items-center my-2">
          <Checkbox
            checked={options.numbers}
            onChange={e => handleOptionsChange('numbers', e.target.checked)}
          />
          <label className="ml-3">Numbers (123)</label>
        </div>
        <div className="flex items-center my-2">
          <Checkbox
            checked={options.symbols}
            onChange={e => handleOptionsChange('symbols', e.target.checked)}
          />
          <label className="ml-3">Symbols (!#$)</label>
        </div>
      </div>
    </Paper>
  );
}
