"use client";
import React, { useState } from "react";
import ToggleButton from "./toggleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
];

function Navbar() {
  const pathname = usePathname();
  const [state, setState] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <div className="max-w-[1500px] mx-auto flex items-center p-8 relative">
      <span className="font-semibold font-mono desktop:text-3xl laptop:text-2xl tablet:text-lg ">
        AHMED<b className="text-blue-600">.</b>
      </span>
      <div
        className="tablet:hidden flex items-center gap-18 ml-auto font-semibold font-mono cursor-pointer"
        onClick={() => setState(!state)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
      <div className="tablet:flex hidden items-center gap-18 ml-auto font-semibold font-mono desktop:text-3xl laptop:text-2xl tablet:text-lg">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : "unactive"}
          >
            {link.label}
          </Link>
        ))}
        <ToggleButton height="1.5em" width="1.5em" />
      </div>
      {state && (
        <div
          className={`absolute tablet:hidden right-0 top-0 flex flex-col gap-4 h-screen w-[100%] p-8 z-10 shadow-lg ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div
            className="flex justify-between cursor-pointer mb-4"
            onClick={() => setState(!state)}
          >
            <span className="font-semibold font-mono">
              AHMED<b className="mobile:text-lg text-blue-600">.</b>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="tablet:hidden flex flex-col space-y-8 font-semibold font-mono text-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                className="hover:text-gray-600 hover:border-b hover:border-b-gray-500 max-w-max border-b border-transparent"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <ToggleButton height="1em" width="1em" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
