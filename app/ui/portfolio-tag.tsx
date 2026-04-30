"use client";

import gsap from "gsap";

export default function PortfolioTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="cursor-pointer backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-full text-[14px] font-medium text-[#111] tracking-[-0.56px] whitespace-nowrap"
      style={{ fontFamily: "var(--inter)" }}
      onMouseEnter={(e) =>
        gsap.to(e.currentTarget, {
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "#ffffff",
          duration: 0.25,
          ease: "power2.out",
        })
      }
      onMouseLeave={(e) =>
        gsap.to(e.currentTarget, {
          backgroundColor: "rgba(255,255,255,0.3)",
          color: "#111111",
          duration: 0.2,
          ease: "power2.in",
        })
      }
    >
      {children}
    </span>
  );
}
