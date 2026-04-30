"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Individual scroll triggers (each element triggers itself) ──────────

      document.querySelectorAll('[data-animate="fade-up"]').forEach((el) => {
        gsap.set(el, { y: 60 });
        gsap.to(el, {
          opacity: 1, y: 0, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      document.querySelectorAll('[data-animate="from-right"]').forEach((el) => {
        gsap.set(el, { x: 80 });
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      document.querySelectorAll('[data-animate="from-left"]').forEach((el) => {
        gsap.set(el, { x: -80 });
        gsap.to(el, {
          opacity: 1, x: 0, duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // ── Blur reveal (scrubbed to scroll position) ─────────────────────────
      // Initial state is set via inline style in the markup.

      document.querySelectorAll('[data-animate="blur-reveal"]').forEach((el) => {
        const section = el.closest("section") ?? el;
        gsap.to(el, {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 50%",
            end: "top top",
            scrub: 1,
          },
        });
      });

      // ── Portfolio desktop (scrubbed to scroll) ───────────────────────────
      // Header fades up first, then each masonry card in delay order (0→0.8).

      const portfolioDesktop = document.querySelector<HTMLElement>('[data-portfolio-desktop]');
      if (portfolioDesktop) {
        const portfolioHeader = document.querySelector<HTMLElement>('[data-portfolio-header]');
        const desktopCards = Array.from(
          portfolioDesktop.querySelectorAll<HTMLElement>('[data-animate-delay]')
        ).sort((a, b) =>
          parseFloat(a.dataset.animateDelay ?? '0') - parseFloat(b.dataset.animateDelay ?? '0')
        );

        if (portfolioHeader) gsap.set(portfolioHeader, { y: 60 });
        desktopCards.forEach((c) => gsap.set(c, { y: 60 }));

        const tlPortfolioDesktop = gsap.timeline({
          scrollTrigger: {
            trigger: portfolioDesktop.closest('section') ?? portfolioDesktop,
            start: 'top 80%',
            end: '+=1000',
            scrub: 1.5,
          },
        });

        if (portfolioHeader) {
          tlPortfolioDesktop.to(portfolioHeader, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0);
        }
        desktopCards.forEach((card, i) => {
          tlPortfolioDesktop.to(card, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.8 + i * 0.8);
        });
      }

      // ── Portfolio mobile (scrubbed to scroll) ────────────────────────────

      const portfolioMobile = document.querySelector<HTMLElement>('[data-portfolio-mobile]');
      if (portfolioMobile) {
        const portfolioHeaderMobile = document.querySelector<HTMLElement>('[data-portfolio-header]');
        const mobilePortfolioCards = Array.from(
          portfolioMobile.querySelectorAll<HTMLElement>('[data-portfolio-card]')
        );

        mobilePortfolioCards.forEach((c) => gsap.set(c, { y: 60 }));

        const tlPortfolioMobile = gsap.timeline({
          scrollTrigger: {
            trigger: portfolioMobile.closest('section') ?? portfolioMobile,
            start: 'top 85%',
            end: '+=800',
            scrub: 1.5,
          },
        });

        if (portfolioHeaderMobile) {
          tlPortfolioMobile.to(portfolioHeaderMobile, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0);
        }
        mobilePortfolioCards.forEach((card, i) => {
          tlPortfolioMobile.to(card, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.8 + i * 0.8);
        });
      }

      // ── Testimonials desktop (scrubbed to scroll) ─────────────────────────
      // "Testimonials" text blurs in, then cards fly in from their corners:
      // Marko (idx 1) top-left → Lukas (idx 0) top-right →
      // Sarah (idx 2) bottom-left → Sofia (idx 3) bottom-right.

      const testimonialsDesktop = document.querySelector<HTMLElement>('[data-testimonials="desktop"]');
      if (testimonialsDesktop) {
        const title = testimonialsDesktop.querySelector<HTMLElement>('.pointer-events-none');

        const cardCfg: Record<number, { x: number; y: number }> = {
          0: { x:  80, y: -80 }, // Lukas  — top-right
          1: { x: -80, y: -80 }, // Marko  — top-left (first in)
          2: { x: -80, y:  80 }, // Sarah  — bottom-left
          3: { x:  80, y:  80 }, // Sofia  — bottom-right
        };
        const animOrder = [1, 0, 2, 3];

        const cards = Array.from(
          testimonialsDesktop.querySelectorAll<HTMLElement>('[data-card-index]')
        );
        cards.forEach((card) => {
          const idx = parseInt(card.dataset.cardIndex ?? '0');
          const cfg = cardCfg[idx];
          if (cfg) gsap.set(card, { x: cfg.x, y: cfg.y });
        });

        const tlTestimonialsDesktop = gsap.timeline({
          scrollTrigger: {
            trigger: testimonialsDesktop,
            start: 'top 80%',
            end: '+=700',
            scrub: 1.5,
          },
        });

        if (title) {
          tlTestimonialsDesktop.to(title, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }, 0);
        }
        animOrder.forEach((cardIdx, i) => {
          const card = cards.find((c) => parseInt(c.dataset.cardIndex ?? '0') === cardIdx);
          if (card) {
            tlTestimonialsDesktop.to(card, { opacity: 1, x: 0, y: 0, duration: 1, ease: 'power2.out' }, 0.8 + i * 0.8);
          }
        });
      }

      // ── Testimonials mobile (scrubbed to scroll) ──────────────────────────

      const testimonialsMobile = document.querySelector<HTMLElement>('[data-testimonials="mobile"]');
      if (testimonialsMobile) {
        const mobileTitle = testimonialsMobile.querySelector<HTMLElement>('p');
        const mobileCards = Array.from(
          testimonialsMobile.querySelectorAll<HTMLElement>('.snap-start')
        );

        mobileCards.forEach((card) => gsap.set(card, { y: 40 }));

        const tlTestimonialsMobile = gsap.timeline({
          scrollTrigger: {
            trigger: testimonialsMobile,
            start: 'top 80%',
            end: '+=500',
            scrub: 1.5,
          },
        });

        if (mobileTitle) {
          tlTestimonialsMobile.to(mobileTitle, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }, 0);
        }
        mobileCards.forEach((card, i) => {
          tlTestimonialsMobile.to(card, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.8 + i * 0.6);
        });
      }

      // ── News desktop (scrubbed to scroll) ────────────────────────────────
      // Title p tags live inside a -rotate-90 div. In that rotated coordinate
      // space, y:-80 maps to 80px leftward in screen space — "from the left".
      // Each element gets its own slot in a scrubbed timeline so progress is
      // tied 1-to-1 with scroll position.

      const newsDesktop = document.querySelector<HTMLElement>('[data-news="desktop"]');
      if (newsDesktop) {
        const lines = Array.from(newsDesktop.querySelectorAll<HTMLElement>('[data-news-line]'));
        const cards = Array.from(newsDesktop.querySelectorAll<HTMLElement>('[data-news-card]'));

        lines.forEach((line) => gsap.set(line, { y: -80 }));
        cards.forEach((card) => gsap.set(card, { x: 80 }));

        const tlDesktop = gsap.timeline({
          scrollTrigger: {
            trigger: newsDesktop,
            start: 'top 80%',
            end: '+=600',
            scrub: 1.5,
          },
        });

        lines.forEach((line, i) => {
          tlDesktop.to(line, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, i * 0.8);
        });
        cards.forEach((card, i) => {
          tlDesktop.to(card, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 1.4 + i * 0.8);
        });
      }

      // ── News mobile (scrubbed to scroll) ─────────────────────────────────

      const newsMobile = document.querySelector<HTMLElement>('[data-news="mobile"]');
      if (newsMobile) {
        const mobileLine = newsMobile.querySelector<HTMLElement>('[data-news-line]');
        const mobileCards = Array.from(newsMobile.querySelectorAll<HTMLElement>('[data-news-card]'));

        if (mobileLine) gsap.set(mobileLine, { y: 60 });
        mobileCards.forEach((card) => gsap.set(card, { x: 80 }));

        const tlMobile = gsap.timeline({
          scrollTrigger: {
            trigger: newsMobile,
            start: 'top 80%',
            end: '+=500',
            scrub: 1.5,
          },
        });

        if (mobileLine) {
          tlMobile.to(mobileLine, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
        }
        mobileCards.forEach((card, i) => {
          tlMobile.to(card, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 1.2 + i * 0.8);
        });
      }

      // ── Group triggers (one trigger fires staggered children) ─────────────
      // Mark the container: data-animate-group
      // Mark each child:    data-animate-delay="0.2" (seconds)

      document.querySelectorAll('[data-animate-group]').forEach((group) => {
        const children = Array.from(
          group.querySelectorAll<HTMLElement>("[data-animate-delay]")
        );

        // Set initial positions before the trigger fires
        children.forEach((child) => gsap.set(child, { y: 60 }));

        ScrollTrigger.create({
          trigger: group,
          start: "top 80%",
          onEnter: () => {
            children.forEach((child) => {
              const delay = parseFloat(child.dataset.animateDelay ?? "0");
              gsap.to(child, {
                opacity: 1, y: 0, duration: 1.4, delay, ease: "power3.out",
              });
            });
          },
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
