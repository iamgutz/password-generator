import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Paper from '../components/Paper';
import generatePassword, { strengthScore } from './utils';
import { strengthConfig } from './constants';
import { PasswordStrength } from './definitions';

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
    setPasswordLength(length);
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

  useEffect(() => {
    const newPassword = generatePassword({ length: parseInt(passwordLength, 10), ...options });
    setPassword(newPassword);
  }, [passwordLength, options]);

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
      <h1 className="text-3xl font-bold text-center">Password Generator</h1>
      <p className="text-center">Create a strong and secure password</p>

      <div className="my-3">
        <p>Password Length:</p>
        <input
          type="number"
          className="text-black"
          value={passwordLength}
          onChange={e => handlePasswordLengthChange(e.target.value)}
        />
      </div>

      <div>
        <p>Include:</p>
        <label>Uppercase</label>
        <input
          type="checkbox"
          checked={options.uppercase}
          onChange={e => handleOptionsChange('uppercase', e.target.checked)}
        />
        <label>Lowercase</label>
        <input
          type="checkbox"
          checked={options.lowercase}
          onChange={e => handleOptionsChange('lowercase', e.target.checked)}
        />
        <label>Numbers</label>
        <input
          type="checkbox"
          checked={options.numbers}
          onChange={e => handleOptionsChange('numbers', e.target.checked)}
        />
        <label>Symbols</label>
        <input
          type="checkbox"
          checked={options.symbols}
          onChange={e => handleOptionsChange('symbols', e.target.checked)}
        />
      </div>

      <div className="my-3">
        <input
          type="text"
          className="text-black"
          value={password}
        />
        <p className={`${strength.colorClass}`}>
          <strong>{strength.label || ''}</strong>
        </p>
        <CopyToClipboard
          text={password}
          onCopy={() => handleOnCopy()}
        >
          <button type="button">{wasCopied ? 'Copied!' : 'Copy'}</button>
        </CopyToClipboard>
      </div>
    </Paper>
  );
}
