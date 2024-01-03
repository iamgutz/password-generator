import React, { useState } from 'react';
import './App.css';
import Paper from './components/Paper';

function App() {
  const [passwordLength, setPasswordLength] = useState('12');
  const handlePasswordLengthChange = (length: string) => {
    setPasswordLength(length);
  };
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

        <div className="my-3">
          <input
            type="text"
            className="text-black"
          />
          <button type="button">Copy</button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
