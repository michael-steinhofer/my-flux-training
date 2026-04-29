"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-6 w-full">
      {/* Logo */}
      <span
        className="text-[16px] font-semibold text-black tracking-[-0.64px] capitalize"
        style={{ fontFamily: "var(--inter)" }}
      >
        H.Studio
      </span>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-14">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[16px] font-semibold text-black tracking-[-0.64px] capitalize"
            style={{ fontFamily: "var(--inter)" }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <button
        className="hidden md:flex cursor-pointer items-center justify-center text-[14px] font-medium text-white tracking-[-0.56px] bg-black px-4 py-3 rounded-full"
        style={{ fontFamily: "var(--inter)" }}
      >
        Let&apos;s talk
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex cursor-pointer items-center justify-center w-6 h-6"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-sm flex flex-col gap-4 py-4 px-4 z-50 rounded-b-xl">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[16px] font-semibold text-black tracking-[-0.64px] capitalize"
              style={{ fontFamily: "var(--inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            className="self-start cursor-pointer text-[14px] font-medium text-white tracking-[-0.56px] bg-black px-4 py-3 rounded-full mt-2"
            style={{ fontFamily: "var(--inter)" }}
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </nav>
  );
}
