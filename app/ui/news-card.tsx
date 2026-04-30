"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function NewsCard({
  img, text, imgHeight, className = "", href = "#",
}: {
  img: string; text: string; imgHeight: string; className?: string; href?: string;
}) {
  const imgRef  = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, { scale: 1.06, duration: 0.5, ease: "power2.out" });
    gsap.set(arrowRef.current, { transformOrigin: "bottom left" });
    gsap.to(arrowRef.current, { scale: 1.1, duration: 0.25, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.4, ease: "power2.inOut" });
    gsap.to(arrowRef.current, { scale: 1, duration: 0.2, ease: "power2.in" });
  };

  return (
    <a
      href={href}
      data-news-card
      className={`flex flex-col gap-4 ${className}`}
      style={{ opacity: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`overflow-hidden shrink-0 ${imgHeight}`}>
        <img ref={imgRef} src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <p
        className="flex-1 text-[14px] text-[#1f1f1f] font-normal leading-[1.3] tracking-[-0.56px]"
        style={{ fontFamily: "var(--inter)" }}
      >
        {text}
      </p>
      <div className="border-b border-black flex gap-[10px] items-center py-1 self-start">
        <span
          className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap"
          style={{ fontFamily: "var(--inter)" }}
        >
          Read more
        </span>
        <div ref={arrowRef} className="flex items-center justify-center size-[18px]">
          <div className="-rotate-90">
            <img src="/images/arrow-icon.svg" alt="" className="block size-[18px]" />
          </div>
        </div>
      </div>
    </a>
  );
}
