import { PasswordStrengthConfig } from './definitions';

export const strengthConfig: PasswordStrengthConfig = {
  strong: {
    label: 'Strong!',
    colorClass: 'text-emerald-300',
  },
  medium: {
    label: 'Medium!',
    colorClass: 'text-orange-300',
  },
  weak: {
    label: 'Weak!',
    colorClass: 'text-rose-300',
  },
  short: {
    label: "It's too short!",
    colorClass: 'text-rose-300',
  },
};
