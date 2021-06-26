import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/logo_nobg.svg";
const Navbar = (props) => {
  return (
    <nav className="max-w-2xl w-full  px-2 py-2 my-3 flex flex-row items-center gap-5">
      <Image src={logo} height={24} width={36} />
      <NavItem label="Home" href="/" />
      <NavItem label="Projects" href="/projects" />
      <NavItem label="Photo & Video" href="/graphy" />
      <NavItem label="Blog" href="/blog" unavailable />
    </nav>
  );
};
export default Navbar;

const NavItem = ({ label, href = "", unavailable }) => {
  if (unavailable) {
    return (
      <p className="text-gray-500 text-base border-b-2 border-transparent transition">
        {label}
      </p>
    );
  }
  return (
    <Link href={href}>
      <a className="text-gray-200 text-base  hover:scale-105 border-b-2 border-transparent transition">
        {label}
      </a>
    </Link>
  );
};
