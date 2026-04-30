"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];
const navHrefs: Record<string, string> = {
  About: "/about",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    gsap.set(underlineRef.current, { transformOrigin: "left center" });
    gsap.to(underlineRef.current, { scaleX: 1, duration: 0.35, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    gsap.set(underlineRef.current, { transformOrigin: "right center" });
    gsap.to(underlineRef.current, { scaleX: 0, duration: 0.25, ease: "power3.in" });
  };

  return (
    <a
      href={href}
      className="relative text-[16px] font-semibold text-black tracking-[-0.64px] capitalize py-1"
      style={{ fontFamily: "var(--inter)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span
        ref={underlineRef}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
        style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
      />
    </a>
  );
}

export default function Navbar() {
  const [iconOpen, setIconOpen] = useState(false);
  const menuRef   = useRef<HTMLDivElement>(null);
  const bgRef     = useRef<HTMLDivElement>(null);
  const itemRefs  = useRef<(HTMLElement | null)[]>([]);
  const isOpenRef = useRef(false);

  // White background drops in from top on first scroll, retreats at top
  useEffect(() => {
    let scrolled = false;
    const onScroll = () => {
      if (window.scrollY > 10 && !scrolled) {
        scrolled = true;
        gsap.to(bgRef.current, { y: 0, duration: 0.45, ease: "power3.out" });
      } else if (window.scrollY <= 10 && scrolled) {
        scrolled = false;
        gsap.to(bgRef.current, { y: "-100%", duration: 0.3, ease: "power3.in" });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    isOpenRef.current = true;
    setIconOpen(true);
    const items = itemRefs.current.filter(Boolean);
    gsap.set(menuRef.current, { display: "flex" });
    gsap.fromTo(menuRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" });
    gsap.fromTo(items, { opacity: 0, y: -8 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.25, ease: "power3.out", delay: 0.1 });
  };

  const closeMenu = () => {
    isOpenRef.current = false;
    setIconOpen(false);
    const items = [...itemRefs.current.filter(Boolean)].reverse();
    gsap.to(items, { opacity: 0, y: -6, stagger: 0.04, duration: 0.15, ease: "power2.in" });
    gsap.to(menuRef.current, {
      opacity: 0, y: -8, duration: 0.25, ease: "power3.in", delay: 0.15,
      onComplete: () => gsap.set(menuRef.current, { display: "none" }),
    });
  };

  const toggleMenu = () => (isOpenRef.current ? closeMenu() : openMenu());

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
      {/* White panel — starts hidden above, drops down on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-white/85 backdrop-blur-md"
        style={{ transform: "translateY(-100%)" }}
      />

      {/* Nav content row */}
      <div className="relative z-10 flex items-center justify-between py-6 w-full">

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
            <NavLink key={link} href={navHrefs[link] ?? `#${link.toLowerCase()}`}>
              {link}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:flex cursor-pointer items-center justify-center text-[14px] font-medium text-white tracking-[-0.56px] bg-black px-4 py-3 rounded-full"
          style={{ fontFamily: "var(--inter)" }}
          onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.25, ease: "power2.out" })}
          onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1,   duration: 0.2,  ease: "power2.in"  })}
        >
          Let&apos;s talk
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex cursor-pointer items-center justify-center w-6 h-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {iconOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown — always mounted, GSAP controls display */}
      <div
        ref={menuRef}
        style={{
          display: "none",
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="absolute top-full left-0 right-0 flex-col gap-4 py-4 px-4 z-50 rounded-b-xl"
      >
        {navLinks.map((link, i) => (
          <a
            key={link}
            href={navHrefs[link] ?? `#${link.toLowerCase()}`}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="text-[16px] font-semibold text-white tracking-[-0.64px] capitalize"
            style={{ fontFamily: "var(--inter)" }}
            onClick={closeMenu}
          >
            {link}
          </a>
        ))}
        <button
          ref={(el) => { itemRefs.current[navLinks.length] = el; }}
          className="self-start cursor-pointer text-[14px] font-medium text-black tracking-[-0.56px] bg-white px-4 py-3 rounded-full mt-2"
          style={{ fontFamily: "var(--inter)" }}
        >
          Let&apos;s talk
        </button>
      </div>
    </nav>
  );
}
