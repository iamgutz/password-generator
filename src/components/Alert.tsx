import { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="bg-slate-300 text-black rounded absolute m-auto left-0 right-0 max-w-fit p-6">
      {children}
    </div>
  );
};

export default Alert;
