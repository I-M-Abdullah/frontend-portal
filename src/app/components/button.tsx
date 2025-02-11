import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", icon }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0154AA] ${className}`}
    >
      {icon && <span className="text-[14px]">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
