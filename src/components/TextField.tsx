import clsx from 'clsx';

type TextFieldType = 'text' | 'number' | 'password';

interface TextFieldProps {
  type: TextFieldType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  [key: string]: any;
}

const TextField = ({ type, className, ...props }: TextFieldProps) => {
  const classNames = clsx('py-2 px-4 rounded-full font-bold bg-slate-800 text-slate-50', className);
  return (
    <input
      {...props}
      type={type}
      className={classNames}
    />
  );
};

export default TextField;
