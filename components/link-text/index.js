import React from "react";
const LinkText = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
export default LinkText;
