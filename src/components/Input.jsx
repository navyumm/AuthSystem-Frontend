import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", placeholder, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`block w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
});

export default Input;