"use client";

import { useState, useEffect } from "react";
import { navLinks, hero } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md shadow-orange-100/50" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-400 text-gray-900 font-bold text-sm shadow-sm hover:scale-[1.05] transition-transform"
          aria-label="Home"
        >
          RA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-orange-50 px-4 py-2 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={hero.cta.resume}
              className="ml-2 font-semibold bg-orange-400 text-gray-900 rounded-xl shadow-sm hover:bg-orange-300 hover:scale-[1.02] transition-all px-4 py-2 text-sm md:px-6 md:py-2 md:text-base"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-xl hover:bg-orange-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-transform duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-100 px-6 pb-6 pt-2 shadow-md shadow-orange-100/50">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="block text-gray-700 hover:text-gray-900 hover:bg-orange-50 px-3 py-2.5 rounded-xl transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={hero.cta.resume}
                className="inline-block bg-orange-400 text-gray-900 font-semibold px-5 py-2 rounded-xl text-sm shadow-sm hover:bg-orange-300 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
