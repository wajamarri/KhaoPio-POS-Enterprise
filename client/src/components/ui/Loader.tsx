import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        background: "#C67C4E",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        padding: "12px 20px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: 600,
        fontSize: "15px",
        transition: ".25s",
      }}
    >
      {children}
    </button>
  );
};

export default Button;