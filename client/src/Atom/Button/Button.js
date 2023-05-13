import React from "react";

export default function CustomButton({ className, onClick, text }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
