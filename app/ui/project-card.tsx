"use client";

import { useRef } from "react";
import gsap from "gsap";
import PortfolioTag from "./portfolio-tag";

function ProjectArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 size-8">
      <div className="-rotate-90">
        <img src="/images/arrow-icon.svg" alt="" className="block size-8" />
      </div>
    </div>
  );
}

export default function ProjectCard({
  img, title, tags, height, titleSize, href = "#",
}: {
  img: string; title: string; tags: string[]; height: string; titleSize: string; href?: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <a
      href={href}
      className="flex flex-col gap-[10px]"
      onMouseEnter={() => gsap.to(imgRef.current, { scale: 1.06, duration: 0.5, ease: "power2.out" })}
      onMouseLeave={() => gsap.to(imgRef.current, { scale: 1, duration: 0.4, ease: "power2.inOut" })}
    >
      <div className={`relative overflow-hidden ${height}`}>
        <img ref={imgRef} src={img} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <PortfolioTag key={tag}>{tag}</PortfolioTag>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          className={`font-black ${titleSize} text-black tracking-[-0.04em] uppercase leading-[1.1] whitespace-nowrap`}
          style={{ fontFamily: "var(--inter)" }}
        >
          {title}
        </p>
        <ProjectArrow />
      </div>
    </a>
  );
}
