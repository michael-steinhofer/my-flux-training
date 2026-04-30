"use client";

import gsap from "gsap";

export default function FooterLink({
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const span = e.currentTarget.querySelector("span");
    gsap.set(span, { transformOrigin: "left center" });
    gsap.to(span, { scaleX: 1, duration: 0.35, ease: "power3.out" });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const span = e.currentTarget.querySelector("span");
    gsap.set(span, { transformOrigin: "right center" });
    gsap.to(span, { scaleX: 0, duration: 0.25, ease: "power3.in" });
  };

  return (
    <a
      {...props}
      className={`relative py-1 ${className ?? ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-full h-[2px] bg-current"
        style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
      />
    </a>
  );
}
