import { IconType } from 'react-icons';

export interface PasswordOptions {
  length: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}

export type PasswordStrength = 'strong' | 'medium' | 'weak' | 'short';

export type PasswordStrengthConfig = {
  [key in PasswordStrength]: {
    label: string;
    textColorClass: string;
    bgColorClass: string;
    highlightColorClass: string;
    icon: IconType;
  };
};
