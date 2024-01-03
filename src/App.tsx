import React, { useEffect, useState } from 'react';
import './App.css';
import Paper from './components/Paper';
import generatePassword from './utils/generate-password';

function App() {
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

  const handlePasswordLengthChange = (length: string) => {
    setPasswordLength(length);
  };

  const handleOptionsChange = (optionName: string, value: boolean) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [optionName]: value,
    }));
  };

  useEffect(() => {
    const newPassword = generatePassword({ length: parseInt(passwordLength, 10), ...options });
    setPassword(newPassword);
  }, [passwordLength, options]);

  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center justify-center">
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
          <button type="button">Copy</button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
