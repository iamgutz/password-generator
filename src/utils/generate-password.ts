interface PasswordOptions {
  length: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

const generatePassword = ({
  length,
  uppercase = true,
  lowercase = true,
  numbers,
  symbols,
}: PasswordOptions): string => {
  let charset = '';
  let password = '';

  if (uppercase) {
    charset += UPPERCASE;
  }

  if (lowercase) {
    charset += LOWERCASE;
  }

  if (numbers) {
    charset += NUMBERS;
  }

  if (symbols) {
    charset += SYMBOLS;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    const character = charset[randomIndex];
    password += character || '';
  }

  return password;
};

export default generatePassword;
