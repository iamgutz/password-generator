import { ReactNode } from 'react';

interface PaperProps {
  children: ReactNode;
}
const Paper = ({ children }: PaperProps) => {
  return <div className="bg-slate-900 p-4 md:p-10 text-slate-50">{children}</div>;
};

export default Paper;
