import Navbar from "../../ui/navbar";
import HoverButton from "../../ui/hover-button";
import FooterLink from "../../ui/footer-link";
import ScrollAnimations from "../../ui/scroll-animations";

const interStyle  = { fontFamily: "var(--inter)" };
const monoStyle   = { fontFamily: "var(--font-geist-mono)" };

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M15 1H1V15" stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

const values = [
  {
    title: "Craft",
    body: "We obsess over every detail — from the weight of a typeface to the timing of a hover state. Good work is never accidental.",
  },
  {
    title: "Clarity",
    body: "Great design communicates before anyone reads a word. We strip away everything that doesn't serve the message.",
  },
  {
    title: "Impact",
    body: "We measure success by what changes after we ship. Beautiful work that also moves the needle is the only kind worth making.",
  },
];

const steps = [
  {
    num: "01",
    name: "Discovery",
    desc: "We start by listening. Understanding your goals, your audience, and your competitive landscape before a single pixel is placed.",
  },
  {
    num: "02",
    name: "Strategy",
    desc: "Every project begins with a clear plan. We map the solution, define success metrics, and align on direction before execution.",
  },
  {
    num: "03",
    name: "Design & Build",
    desc: "Ideas become reality. We craft beautiful, functional experiences — iterating closely with you at every milestone.",
  },
  {
    num: "04",
    name: "Launch & Evolve",
    desc: "We don't disappear after delivery. We monitor, measure, and continue to refine long after the work goes live.",
  },
];

export default function AboutPage() {
  return (
    <>

    {/* ─── Hero ──────────────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden min-h-screen bg-black">
      <div className="relative flex flex-col min-h-screen px-4 md:px-8 pb-[60px] md:pb-[120px]">

        {/* Background — desktop */}
        <div className="hidden md:block pointer-events-none absolute inset-0">
          <img src="/images/photographer.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>

        {/* Background — mobile */}
        <div className="md:hidden pointer-events-none absolute inset-0">
          <img src="/images/photographer.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-[65%_center]" />
        </div>

        {/* Frosted-glass gradient at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] [mask-image:linear-gradient(to_bottom,transparent,black_50%)]" />

        <Navbar />

        {/* Hero text */}
        <div className="mt-auto flex justify-center">
          <div className="flex flex-col items-center">
            <div className="mb-[30px] md:-mb-[15px]">
              <p
                className="text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap"
                style={monoStyle}
              >
                [ About H.Studio ]
              </p>
            </div>
            <h1
              className="font-medium capitalize text-[64px] md:text-[11vw] text-white text-center leading-[0.8] md:leading-[1.1] tracking-[-0.07em] mix-blend-overlay whitespace-pre-wrap md:whitespace-pre"
              style={interStyle}
            >
              {"Creative\nStudio."}
            </h1>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Story ─────────────────────────────────────────────────────────── */}
    <section className="bg-white px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-20">

        {/* Blurb */}
        <div
          data-animate="fade-up"
          style={{ opacity: 0 }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-8"
        >
          <div className="flex flex-col gap-2 shrink-0">
            <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>001</p>
            <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>[ Our Story ]</p>
          </div>
          <div className="flex items-stretch gap-3 md:w-[clamp(500px,55vw,860px)]">
            <div className="flex flex-col justify-between w-6 shrink-0">
              <CornerBracket />
              <CornerBracket className="-rotate-90" />
            </div>
            <p className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] py-3" style={interStyle}>
              H.Studio is a full-service creative studio founded by Michael Steinhofer in Chicago.
              We partner with brands, founders, and teams who believe that design is one of their
              most powerful competitive advantages — from brand identity to interactive web experiences,
              we bring ideas to life with intention, craft, and a relentless focus on impact.
            </p>
            <div className="flex flex-col justify-between w-6 shrink-0">
              <CornerBracket className="rotate-90" />
              <CornerBracket className="rotate-180" />
            </div>
          </div>
        </div>

        {/* Alternating statement lines */}
        <div className="w-full border-t border-[#1f1f1f]" />
        <div className="flex flex-col gap-2 uppercase">
          <div
            data-animate="from-right"
            style={{ opacity: 0 }}
            className="flex items-baseline gap-3"
          >
            <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84]" style={interStyle}>
              We build brands,
            </p>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0" style={monoStyle}>001</p>
          </div>
          <div
            data-animate="from-left"
            style={{ opacity: 0 }}
            className="flex justify-center md:justify-start md:pl-[15.6%]"
          >
            <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84]" style={interStyle}>
              experiences
            </p>
          </div>
          <div
            data-animate="from-right"
            style={{ opacity: 0 }}
            className="flex justify-center md:justify-start md:pl-[30%]"
          >
            <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84]" style={interStyle}>
              &amp; products
            </p>
          </div>
          <div
            data-animate="from-left"
            style={{ opacity: 0 }}
            className="flex items-end gap-3"
          >
            <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84]" style={interStyle}>
              that leave a mark.
            </p>
            <p className="hidden md:block text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0 pb-2" style={monoStyle}>
              [ H.Studio ]
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* ─── Values ────────────────────────────────────────────────────────── */}
    <section className="bg-[#fafafa] px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-16">

        <div
          data-animate="fade-up"
          style={{ opacity: 0 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 uppercase"
        >
          <div className="flex items-start gap-[10px]">
            <div
              className="flex flex-col font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.86]"
              style={interStyle}
            >
              <p>What We</p>
              <p>Stand For</p>
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>002</p>
          </div>
          <p className="hidden md:block text-[14px] text-[#1f1f1f] leading-[1.1] pb-2" style={monoStyle}>
            [ Values ]
          </p>
        </div>

        <div data-animate-group className="flex flex-col md:flex-row gap-6 md:gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              data-animate-delay={String(i * 0.2)}
              style={{ opacity: 0 }}
              className="flex-1"
            >
              <div className="flex items-stretch gap-3 h-full">
                <div className="flex flex-col justify-between w-6 shrink-0">
                  <CornerBracket />
                  <CornerBracket className="-rotate-90" />
                </div>
                <div className="flex-1 py-3 flex flex-col gap-3">
                  <p
                    className="font-black text-[24px] md:text-[28px] text-black tracking-[-0.04em] uppercase leading-[1.1]"
                    style={interStyle}
                  >
                    {v.title}
                  </p>
                  <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]" style={interStyle}>
                    {v.body}
                  </p>
                </div>
                <div className="flex flex-col justify-between w-6 shrink-0">
                  <CornerBracket className="rotate-90" />
                  <CornerBracket className="rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ─── Team ──────────────────────────────────────────────────────────── */}
    <section className="bg-white px-4 md:px-8 py-12 md:py-20">
      <div data-animate-group className="max-w-[1440px] mx-auto">

        {/* Mobile label */}
        <div data-animate-delay="0" style={{ opacity: 0 }} className="flex flex-col gap-5 mb-5 md:hidden">
          <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>003</p>
          <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>[ The Team ]</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <p
            data-animate-delay="0"
            style={{ opacity: 0, ...monoStyle }}
            className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap"
          >
            [ The Team ]
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:gap-8 md:w-[clamp(600px,calc(160px_+_57vw),983px)]">
            <div data-animate-delay="0.4" style={{ opacity: 0 }} className="flex items-stretch gap-3 flex-1">
              <div className="flex flex-col justify-between w-6 shrink-0">
                <CornerBracket />
                <CornerBracket className="-rotate-90" />
              </div>
              <div className="flex-1 py-3 flex flex-col gap-4">
                <div>
                  <p
                    className="font-black text-[20px] text-black tracking-[-0.04em] uppercase leading-[1.1]"
                    style={interStyle}
                  >
                    Michael Steinhofer
                  </p>
                  <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] italic mt-1" style={interStyle}>
                    Creative Director &amp; Founder
                  </p>
                </div>
                <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]" style={interStyle}>
                  Michael is a Chicago-based creative director with over a decade of experience
                  building brands and digital products across fashion, technology, and culture.
                  He founded H.Studio to bring together visual design, interaction design, and
                  engineering under one roof — with quality as the non-negotiable constant.
                </p>
              </div>
              <div className="flex flex-col justify-between w-6 shrink-0">
                <CornerBracket className="rotate-90" />
                <CornerBracket className="rotate-180" />
              </div>
            </div>
            <div data-animate-delay="0.2" style={{ opacity: 0 }} className="flex items-start gap-6 shrink-0">
              <p className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>003</p>
              <div className="w-full md:w-[436px] aspect-[436/614] overflow-hidden">
                <img src="/images/profile.webp" alt="Michael Steinhofer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Full-bleed photo ──────────────────────────────────────────────── */}
    <section className="w-full aspect-[375/565] md:aspect-[8/5] overflow-hidden bg-black">
      <img
        data-animate="blur-reveal"
        src="/images/hero.webp"
        alt=""
        className="w-full h-full object-cover"
        style={{ opacity: 0.5, filter: "blur(12px)" }}
      />
    </section>

    {/* ─── Process ───────────────────────────────────────────────────────── */}
    <section className="bg-[#f3f3f3] px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-16">

        <div
          data-animate="fade-up"
          style={{ opacity: 0 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 uppercase"
        >
          <div className="flex items-start gap-[10px]">
            <div
              className="flex flex-col font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.86]"
              style={interStyle}
            >
              <p>How We</p>
              <p>Work</p>
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>004</p>
          </div>
          <p className="hidden md:block text-[14px] text-[#1f1f1f] leading-[1.1] pb-2" style={monoStyle}>
            [ Process ]
          </p>
        </div>

        <div data-animate-group className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-animate-delay={String(i * 0.2)}
              style={{ opacity: 0 }}
            >
              <div className="flex items-stretch gap-3 h-full">
                <div className="flex flex-col justify-between w-6 shrink-0">
                  <CornerBracket />
                  <CornerBracket className="-rotate-90" />
                </div>
                <div className="flex-1 py-3 flex flex-col gap-2">
                  <div className="flex items-baseline gap-2">
                    <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>
                      {step.num}
                    </p>
                    <p
                      className="font-black text-[20px] md:text-[24px] text-black tracking-[-0.04em] uppercase leading-[1.1]"
                      style={interStyle}
                    >
                      {step.name}
                    </p>
                  </div>
                  <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]" style={interStyle}>
                    {step.desc}
                  </p>
                </div>
                <div className="flex flex-col justify-between w-6 shrink-0">
                  <CornerBracket className="rotate-90" />
                  <CornerBracket className="rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* ─── Footer ────────────────────────────────────────────────────────── */}
    <footer className="bg-black">

      {/* Mobile */}
      <div className="md:hidden pt-[48px] px-4 flex flex-col gap-[48px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="uppercase text-[24px] font-light italic text-white leading-[1.1] tracking-[-0.04em]" style={interStyle}>
              Have a <span className="font-bold not-italic">project</span> in mind?
            </p>
            <HoverButton
              className="self-start cursor-pointer text-[14px] font-medium text-white border border-white rounded-[24px] px-4 py-3"
              style={interStyle}
            >
              Let&apos;s talk
            </HoverButton>
          </div>
          <div className="flex flex-col gap-2">
            <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Facebook</FooterLink>
            <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Instagram</FooterLink>
            <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>x.com</FooterLink>
            <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Linkedin</FooterLink>
          </div>
          <div className="border-t border-white" />
        </div>
        <div className="h-[150px] flex flex-col gap-[16px] overflow-hidden">
          <div className="flex gap-6 justify-center">
            <a href="#" className="uppercase text-[12px] text-white underline" style={interStyle}>Licences</a>
            <a href="#" className="uppercase text-[12px] text-white underline" style={interStyle}>Privacy policy</a>
          </div>
          <p className="text-[10px] text-white" style={monoStyle}>[ Coded By Claude ]</p>
          <p className="font-semibold capitalize text-white text-[91px] tracking-[-0.06em] leading-[0.8] whitespace-nowrap" style={interStyle}>
            H.Studio
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block pt-[48px] px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[120px]">
          <div className="flex flex-col gap-12">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-4 w-[298px]">
                <p className="uppercase text-[24px] font-light italic text-white leading-[1.1] tracking-[-0.04em]" style={interStyle}>
                  Have a <span className="font-bold not-italic">project</span> in mind?
                </p>
                <HoverButton
                  className="self-start cursor-pointer text-[14px] font-medium text-white border border-white rounded-[24px] px-4 py-3"
                  style={interStyle}
                >
                  Let&apos;s talk
                </HoverButton>
              </div>
              <div className="flex flex-col gap-1.5 w-[298px] items-center">
                <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Facebook</FooterLink>
                <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Instagram</FooterLink>
              </div>
              <div className="flex flex-col gap-1.5 w-[298px] items-end">
                <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>x.com</FooterLink>
                <FooterLink href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Linkedin</FooterLink>
              </div>
            </div>
            <div className="border-t border-white" />
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-2">
              <div
                className="w-[15px] flex items-center justify-center shrink-0"
                style={{ height: "clamp(70px, calc(12.59vw - 27.33px), 160px)" }}
              >
                <div className="-rotate-90">
                  <span className="text-[12px] text-white whitespace-nowrap" style={monoStyle}>[ Coded By Claude ]</span>
                </div>
              </div>
              <div className="[overflow-y:clip]" style={{ height: "clamp(95px, calc(17.23vw - 37.38px), 219px)" }}>
                <p
                  className="font-semibold capitalize text-white tracking-[-0.06em] leading-[0.8] whitespace-nowrap"
                  style={{ ...interStyle, fontSize: "clamp(126px, calc(22.82vw - 49.51px), 290px)" }}
                >
                  H.Studio
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end pb-8 shrink-0">
              <a href="#" className="uppercase text-[12px] text-white underline" style={interStyle}>licences</a>
              <a href="#" className="uppercase text-[12px] text-white underline" style={interStyle}>Privacy policy</a>
            </div>
          </div>
        </div>
      </div>

    </footer>

    <ScrollAnimations />
    </>
  );
}
