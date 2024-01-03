import generatePassword from './utils';

describe('generatePassword', () => {
  it('generates a password with the specified length', () => {
    const password = generatePassword({
      length: 8,
      uppercase: true,
      lowercase: true,
      symbols: false,
      numbers: false,
    });

    expect(password.length).toBe(8);
  });

  it('generates a password with at least one uppercase character when uppercase is true', () => {
    const password = generatePassword({
      length: 10,
      uppercase: true,
      lowercase: true,
      numbers: false,
      symbols: true,
    });
    const hasUppercase = /[A-Z]/.test(password);
    expect(hasUppercase).toBe(true);
  });

  it('generates a password with at least one lowercase character when lowercase is true', () => {
    const password = generatePassword({
      length: 10,
      uppercase: true,
      lowercase: true,
      numbers: false,
      symbols: true,
    });
    const hasLowercase = /[a-z]/.test(password);
    expect(hasLowercase).toBe(true);
  });

  it('generates a password with at least one number character when number is true', () => {
    const password = generatePassword({
      length: 10,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    });
    const hasNumber = /\d/.test(password);
    expect(hasNumber).toBe(true);
  });

  it('generates a password with at least one symbol character when symbol is true', () => {
    const password = generatePassword({
      length: 10,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
    });
    const hasSymbol = /[!@#$%^&*()-_=+[\]{}|;:,.<>?/]/.test(password);
    expect(hasSymbol).toBe(true);
  });

  it('generates a password with only uppercase characters when only uppercase is true', () => {
    const password = generatePassword({
      length: 10,
      uppercase: true,
      lowercase: false,
      symbols: false,
      numbers: false,
    });

    const isUppercaseOnly = /^[A-Z]+$/.test(password);
    expect(isUppercaseOnly).toBe(true);
  });

  it('generates a password with only lowercase characters when only lowercase is true', () => {
    const password = generatePassword({
      length: 10,
      uppercase: false,
      lowercase: true,
      symbols: false,
      numbers: false,
    });

    const isLowercaseOnly = /^[a-z]+$/.test(password);
    expect(isLowercaseOnly).toBe(true);
  });

  it('generates a password with only symbol characters when only symbols is true', () => {
    const password = generatePassword({
      length: 12,
      uppercase: false,
      lowercase: false,
      symbols: true,
      numbers: false,
    });

    const isSymbolOnly = /^[!@#$%^&*()-_=+[\]{}|;:,.<>?/]+$/.test(password);
    expect(isSymbolOnly).toBe(true);
  });

  it('generates a password with only numeric characters when only includeNumbers is true', () => {
    const password = generatePassword({
      length: 12,
      uppercase: false,
      lowercase: false,
      symbols: false,
      numbers: true,
    });

    const isNumericOnly = /^\d+$/.test(password);
    expect(isNumericOnly).toBe(true);
  });

  it('handles minimum and maximum length', () => {
    const minLengthPassword = generatePassword({
      length: 1,
      uppercase: true,
      lowercase: true,
      symbols: true,
      numbers: true,
    });

    const maxLengthPassword = generatePassword({
      length: 100,
      uppercase: true,
      lowercase: true,
      symbols: true,
      numbers: true,
    });

    expect(minLengthPassword.length).toBe(1);
    expect(maxLengthPassword.length).toBe(100);
  });

  it('handles all options set to false', () => {
    const password = generatePassword({
      length: 10,
      uppercase: false,
      lowercase: false,
      symbols: false,
      numbers: false,
    });

    expect(password).toBe('');
  });
});
