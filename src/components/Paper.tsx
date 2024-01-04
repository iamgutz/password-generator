import { ReactNode } from 'react';

interface PaperProps {
  children: ReactNode;
}
const Paper = ({ children }: PaperProps) => {
  return <div className="bg-slate-900 text-slate-50 rounded-lg">{children}</div>;
};

export default Paper;
