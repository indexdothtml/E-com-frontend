import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  type?: "button" | "reset" | "submit";
  className?: string;
  onclick: () => void;
}

function Button({
  type = "button",
  className,
  onclick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-blue-500 pl-5 pr-5 pt-2 pb-2 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 hover:cursor-pointer ${className}`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
