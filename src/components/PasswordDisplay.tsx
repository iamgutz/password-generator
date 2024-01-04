import clsx from 'clsx';
import CopyToClipboard from 'react-copy-to-clipboard';
import { IconType } from 'react-icons';
import { BiSolidCopy } from 'react-icons/bi';
import { TbRefreshAlert } from 'react-icons/tb';

interface PasswordDisplayProps {
  password: string;
  bgColorClass: string;
  label: string;
  textColorClass: string;
  highlightColorClass: string;
  Icon: IconType;
  onCopy: () => void;
  onRefresh: () => void;
}

const PasswordDisplay = ({
  password,
  bgColorClass,
  label,
  textColorClass,
  onCopy,
  onRefresh,
  highlightColorClass,
  Icon,
}: PasswordDisplayProps) => {
  const classNames = clsx(
    bgColorClass,
    highlightColorClass,
    'relative p-4 border-solid border-b-2',
  );
  return (
    <div className={classNames}>
      <p className="text-2xl mb-3">{password}</p>
      <div className="flex items-center justify-between">
        <div className={`${textColorClass} flex items-center`}>
          <Icon size={20} />
          <p className="ml-2">
            <strong>{label}</strong>
          </p>
        </div>

        <div className="text-slate-300">
          <button
            type="button"
            onClick={onRefresh}
          >
            <TbRefreshAlert
              size={24}
              className="mr-4"
            />
          </button>
          <CopyToClipboard
            text={password}
            onCopy={onCopy}
          >
            <button type="button">
              <BiSolidCopy size={24} />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default PasswordDisplay;
