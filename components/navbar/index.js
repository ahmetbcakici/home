import React, { useState } from "react";
import Link from "next/link";

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
    <nav className="max-w-2xl w-full  px-2 py-2 my-1 flex flex-col sm:flex-row  md:items-center gap-5">
      <div className="flex flex-row justify-between border-0 border-red-200">
        <button onClick={() => setOpen((o) => !o)} className="h-min">
          <Hamburger />
        </button>
        <Logo />
        <div className="h-7 w-7 sm:hidden" />
      </div>
      <div className="hidden sm:flex gap-4">
        <NavItems />
      </div>
      {open && (
        <div className={`flex flex-col gap-3 px-1 pb-3 sm:hidden`}>
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

const Logo = () => {
  return (
    <Link href={"/"}>
      <a>
        <img
          src={"/logo_nobg.svg"}
          height={24}
          width={32}
          class="self-center"
        />
      </a>
    </Link>
  );
};

const Hamburger = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-gray-200 sm:hidden"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};
