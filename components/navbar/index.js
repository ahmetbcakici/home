import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/logo_nobg.svg";

const LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Photo & Video",
    href: "/graphy",
  },
  {
    label: "Blog",
    href: "/blog",
    unavailable: true,
  },
];

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const height = open ? "h-min" : "h-0";

  const NavItems = () => {
    return LINKS.map((l) => (
      <NavItem
        label={l.label}
        href={l.href}
        unavailable={l.unavailable}
        onClicked={() => setOpen(false)}
      />
    ));
  };
  return (
    <nav className="max-w-2xl w-full  px-2 py-2 my-3 flex flex-col sm:flex-row  md:items-center gap-5">
      <button onClick={() => setOpen((o) => !o)} className="h-min">
        <Image src={logo} height={24} width={36} />
      </button>
      <div className="hidden sm:flex gap-4">
        <NavItems />
      </div>
      {open && (
        <div className={`flex flex-col gap-3 px-1  sm:hidden`}>
          <NavItems />
        </div>
      )}
    </nav>
  );
};
export default Navbar;

const NavItem = ({ label, href = "", unavailable, onClicked }) => {
  if (unavailable) {
    return (
      <p className="text-gray-500 text-base border-b-2 border-transparent transition">
        {label}
      </p>
    );
  }
  return (
    <Link href={href}>
      <a
        onClick={onClicked}
        className="text-gray-200 text-base  hover:scale-105 border-b-2 border-transparent transition"
      >
        {label}
      </a>
    </Link>
  );
};
