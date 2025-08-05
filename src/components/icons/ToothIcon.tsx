import React from 'react';

interface ToothIconProps {
  size?: number;
  className?: string;
}

const ToothIcon: React.FC<ToothIconProps> = ({ size = 48, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C8.5 2 6 4.5 6 8V12C6 14.5 6.5 16.5 7.5 18C8.5 19.5 9.5 20.5 10 21.5C10.5 22 11.5 22 12 22C12.5 22 13.5 22 14 21.5C14.5 20.5 15.5 19.5 16.5 18C17.5 16.5 18 14.5 18 12V8C18 4.5 15.5 2 12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6C10 6 10.5 7 12 7C13.5 7 14 6 14 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default ToothIcon;