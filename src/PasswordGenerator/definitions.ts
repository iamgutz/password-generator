export type PasswordStrength = 'strong' | 'medium' | 'weak' | 'short';

export type PasswordStrengthConfig = {
  [key in PasswordStrength]: {
    label: string;
    colorClass: string;
  };
};
