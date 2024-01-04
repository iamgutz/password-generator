import { BsShieldFillCheck, BsShieldFillExclamation, BsShieldFillMinus } from 'react-icons/bs';
import { PasswordStrengthConfig } from './definitions';

export const strengthConfig: PasswordStrengthConfig = {
  strong: {
    label: 'Strong',
    textColorClass: 'text-emerald-300',
    bgColorClass: 'bg-emerald-950',
    highlightColorClass: 'border-emerald-500',
    icon: BsShieldFillCheck,
  },
  medium: {
    label: 'Average',
    textColorClass: 'text-orange-300',
    bgColorClass: 'bg-orange-900',
    highlightColorClass: 'border-orange-500',
    icon: BsShieldFillMinus,
  },
  weak: {
    label: 'Weak',
    textColorClass: 'text-rose-300',
    bgColorClass: 'bg-rose-950',
    highlightColorClass: 'border-rose-500',
    icon: BsShieldFillExclamation,
  },
  short: {
    label: "It's too short!",
    textColorClass: 'text-rose-300',
    bgColorClass: 'bg-rose-950',
    highlightColorClass: 'border-rose-500',
    icon: BsShieldFillExclamation,
  },
};

export const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
export const NUMBERS = '0123456789';
export const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?/';
