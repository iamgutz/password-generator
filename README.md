# React Password Generator

This React Password Generator app allows users to generate strong and secure passwords with various customizable options. Users can control the length of the password, include or exclude uppercase letters, lowercase letters, numbers, and special characters. The app provides instant feedback on password strength and visually represents it with different colors. Additionally, users can copy the generated password to the clipboard with a single click.

## Live Demo

Visit the live demo [here](https://iamgutz.github.io/react-password-generator/).

## Features

### 1. Password Generation and Refreshing

- Upon loading the app, the input field contains a randomly generated password of eight characters.
- Clicking the refresh button (icon) generates a new random password.

### 2. Clipboard Copy Functionality

- Clicking the copy button copies the password to the clipboard.
- A message indicating the password has been copied to the clipboard is displayed.

### 3. Customizable Password Components

- Users can check or uncheck checkboxes for uppercase letters, lowercase letters, numbers, and special characters.
- Uppercase letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ
- Lowercase letters: abcdefghijklmnopqrstuvwxyz
- Numbers: 0123456789
- Symbols: !@#$%^&\*()

### 4. Smart Default Configuration

- If all checkboxes are unchecked, the lowercase checkbox automatically becomes checked.

### 5. Length-Based Security Assurance

- If the password length is less than 8, the password strength message below the password input will be "Too short," displayed in red.

### 6. Dynamic Password Security Assessment

- Password strength is evaluated based on the following criteria:
- Strong: Contains at least one uppercase letter, one lowercase letter, one number, and one special character.
- Average: Missing one of the fields in the password.
- Weak: Missing two of the fields in the password.

### 7. Intuitive Password Strength Visualization

- Different colors represent password strength:
- Weak: Red
- Average: Orange
- Strong: Green

# Getting Started

1. Clone the repository:

```bash
   git clone https://github.com/iamgutz/react-password-generator.git
```

2. Navigate to the project directory:

```bash
cd react-password-generator
```

3. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm start
```
