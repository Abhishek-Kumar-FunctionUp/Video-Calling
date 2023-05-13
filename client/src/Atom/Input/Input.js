import React from "react";

export default function Input({className, onChange, value, placeholder, type, id}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
      type={type}
      id={id}
    />
  );
}
