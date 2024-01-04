import clsx from 'clsx';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface CheckboxProps {
  checked: boolean;
  size?: number | string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ checked, size, className, ...props }: CheckboxProps) => {
  const classNames = clsx('relative text-sky-500', className);
  const Icon = checked ? ImCheckboxChecked : ImCheckboxUnchecked;
  return (
    <div className={classNames}>
      <input
        {...props}
        type="checkbox"
        checked={checked}
        style={{ width: size, height: size }}
        className="absolute opacity-0 cursor-pointer"
      />
      <Icon size={size} />
    </div>
  );
};

Checkbox.defaultProps = {
  size: 24,
};

export default Checkbox;
