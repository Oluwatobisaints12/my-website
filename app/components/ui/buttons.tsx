import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant, size, children, ...props }) => {
  return (
    <button className={`btn ${variant} ${size}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
