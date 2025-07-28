"use client";
import React, { useState, useEffect } from "react";
import ToggleButton from "./toggleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/portfolio", label: "Portfolio", icon: "💼" },
  { href: "/resume", label: "Resume", icon: "📄" },
];

function Navbar() {
  const pathname = usePathname();
  const [state, setState] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setState(false);
  }, [pathname]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1500px] mx-auto flex items-center p-6 relative">
        {/* Logo with gradient effect */}
        <Link href="/" className="group">
          <span className="font-bold font-mono desktop:text-3xl laptop:text-2xl tablet:text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            AHMED<span className="text-blue-600 dark:text-blue-400 animate-pulse">.</span>
          </span>
        </Link>

        {/* Mobile menu button with improved animation */}
        <button
          className="tablet:hidden flex items-center ml-auto p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
          onClick={() => setState(!state)}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-6">
            <svg
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                state ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
              } group-hover:scale-110`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                state ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
              } group-hover:scale-110`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>

        {/* Desktop navigation with improved styling */}
        <div className="tablet:flex hidden items-center gap-8 ml-auto font-semibold font-mono">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                pathname === link.href
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="flex items-center gap-2 desktop:text-lg laptop:text-base tablet:text-sm">
                <span className="text-sm opacity-70">{link.icon}</span>
                {link.label}
              </span>
              {/* Active indicator */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-all duration-300 ${
                pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
          ))}
          
          {/* Theme toggle with enhanced styling */}
          <div className="ml-4 p-1 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
            <ToggleButton height="1.5em" width="1.5em" />
          </div>
        </div>

        {/* Mobile menu with improved animations */}
        <div className={`fixed tablet:hidden inset-0 z-40 transition-all duration-300 ${
          state ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              state ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setState(false)}
          ></div>
          
          {/* Menu panel */}
          <div className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ${
            state ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
            
            <div className="relative p-6 flex flex-col h-full">
              {/* Mobile header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
                <Link href="/" className="group" onClick={() => setState(false)}>
                  <span className="font-bold font-mono text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    AHMED<span className="text-blue-600 dark:text-blue-400">.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setState(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile navigation links */}
              <div className="flex flex-col space-y-2 flex-1">
                {links.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setState(false)}
                    className={`group flex items-center gap-4 p-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 transform ${
                      pathname === link.href
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span>{link.label}</span>
                    <svg className={`w-5 h-5 ml-auto transition-transform duration-300 ${
                      pathname === link.href ? 'rotate-0' : 'rotate-90 group-hover:rotate-0'
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Mobile theme toggle */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Theme</span>
                  <ToggleButton height="1.2em" width="1.2em" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
