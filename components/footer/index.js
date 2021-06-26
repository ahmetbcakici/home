import React from "react";
const Footer = (props) => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t border-gray-400 text-gray-400 text-sm">
      source code available in github
      <a
        className="flex items-center justify-center text-blue-400 ml-1"
        href="https://github.com/egecavusoglu/home"
        target="_blank"
        rel="noopener noreferrer"
      >
        @egecavusoglu
      </a>
    </footer>
  );
};
export default Footer;
