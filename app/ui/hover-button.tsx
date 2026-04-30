"use client";

import gsap from "gsap";

export default function HoverButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={className}
      onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.25, ease: "power2.out" })}
      onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.in" })}
    >
      {children}
    </button>
  );
}
