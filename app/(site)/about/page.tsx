import Navbar from "../../ui/navbar";
import HoverButton from "../../ui/hover-button";
import FooterLink from "../../ui/footer-link";
import ScrollAnimations from "../../ui/scroll-animations";
import { sanityFetch } from "@/sanity/lib/live";
import { optimizedImg } from "@/sanity/lib/image";
import { defineQuery } from "groq";

export const dynamic = 'force-dynamic';

const interStyle = { fontFamily: "var(--inter)" };
const monoStyle  = { fontFamily: "var(--font-geist-mono)" };

// ─── GROQ Queries ────────────────────────────────────────────────────────────

const HERO_QUERY    = defineQuery(`*[_type == "aboutHero"][0]   { label, headline, backgroundImage }`);
const STORY_QUERY   = defineQuery(`*[_type == "aboutStory"][0]  { blurb, statementLines }`);
const VALUES_QUERY  = defineQuery(`*[_type == "aboutValues"][0] { values[]{ _key, title, body } }`);
const TEAM_QUERY    = defineQuery(`*[_type == "aboutTeam"][0]   { teamMembers[]{ _key, name, role, bio, photo } }`);
const PROCESS_QUERY = defineQuery(`*[_type == "aboutProcess"][0]{ fullBleedPhoto, processSteps[]{ _key, num, name, desc } }`);

// ─── Fallbacks ───────────────────────────────────────────────────────────────

const VALUES_FALLBACK = [
  { _key: "craft",   title: "Craft",   body: "We obsess over every detail — from the weight of a typeface to the timing of a hover state. Good work is never accidental." },
  { _key: "clarity", title: "Clarity", body: "Great design communicates before anyone reads a word. We strip away everything that doesn't serve the message." },
  { _key: "impact",  title: "Impact",  body: "We measure success by what changes after we ship. Beautiful work that also moves the needle is the only kind worth making." },
];

const TEAM_FALLBACK = [
  {
    _key: "michael",
    name: "Michael Steinhofer",
    role: "Creative Director & Founder",
    bio: "Michael is a Chicago-based creative director with over a decade of experience building brands and digital products across fashion, technology, and culture. He founded H.Studio to bring together visual design, interaction design, and engineering under one roof — with quality as the non-negotiable constant.",
    photo: null as null,
  },
];

const STEPS_FALLBACK = [
  { _key: "discovery", num: "01", name: "Discovery",     desc: "We start by listening. Understanding your goals, your audience, and your competitive landscape before a single pixel is placed." },
  { _key: "strategy",  num: "02", name: "Strategy",      desc: "Every project begins with a clear plan. We map the solution, define success metrics, and align on direction before execution." },
  { _key: "design",    num: "03", name: "Design & Build", desc: "Ideas become reality. We craft beautiful, functional experiences — iterating closely with you at every milestone." },
  { _key: "launch",    num: "04", name: "Launch & Evolve",desc: "We don't disappear after delivery. We monitor, measure, and continue to refine long after the work goes live." },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M15 1H1V15" stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

function BracketBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-stretch gap-3 h-full">
      <div className="flex flex-col justify-between w-6 shrink-0">
        <CornerBracket />
        <CornerBracket className="-rotate-90" />
      </div>
      <div className="flex-1 py-3">
        {children}
      </div>
      <div className="flex flex-col justify-between w-6 shrink-0">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function AboutPage() {
  const [
    { data: hero },
    { data: story },
    { data: valuesDoc },
    { data: teamDoc },
    { data: processDoc },
  ] = await Promise.all([
    sanityFetch({ query: HERO_QUERY }),
    sanityFetch({ query: STORY_QUERY }),
    sanityFetch({ query: VALUES_QUERY }),
    sanityFetch({ query: TEAM_QUERY }),
    sanityFetch({ query: PROCESS_QUERY }),
  ]);

  const heroLabel    = hero?.label    ?? "[ About H.Studio ]";
  const heroHeadline = hero?.headline ?? "Creative\nStudio.";
  const heroBg       = optimizedImg(hero?.backgroundImage, "/images/photographer.webp", 2400);

  const blurb          = story?.blurb          ?? "";
  const statementLines = story?.statementLines ?? ["We build brands,", "experiences", "& products", "that leave a mark."];

  const values      = valuesDoc?.values      ?? VALUES_FALLBACK;
  const teamMembers = teamDoc?.teamMembers   ?? TEAM_FALLBACK;
  const steps       = processDoc?.processSteps ?? STEPS_FALLBACK;
  const fullBleed   = optimizedImg(processDoc?.fullBleedPhoto, "/images/hero.webp", 2400);

  return (
    <>

    {/* ─── Hero ──────────────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden min-h-screen bg-black">
      <div className="relative flex flex-col min-h-screen px-4 md:px-8 pb-[60px] md:pb-[120px]">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center md:object-center object-[65%_center]" />
        </div>

        {/* Frosted gradient at bottom */}
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
                {heroLabel}
              </p>
            </div>
            <h1
              className="font-medium capitalize text-[64px] md:text-[11vw] text-white text-center leading-[0.8] md:leading-[1.1] tracking-[-0.07em] mix-blend-overlay whitespace-pre-wrap md:whitespace-pre"
              style={interStyle}
            >
              {heroHeadline}
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
          <div className="md:w-[clamp(500px,55vw,860px)]">
            <BracketBox>
              <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]" style={interStyle}>
                {blurb}
              </p>
            </BracketBox>
          </div>
        </div>

        {/* Statement lines */}
        <div className="w-full border-t border-[#1f1f1f]" />
        <div className="flex flex-col gap-2 uppercase">
          {statementLines.map((line: string, i: number) => {
            const isRight = i % 2 === 0;
            const indents = ["", "md:pl-[15.6%]", "md:pl-[30%]", ""];
            const indent  = indents[i] ?? "";
            return (
              <div
                key={i}
                data-animate={isRight ? "from-right" : "from-left"}
                style={{ opacity: 0 }}
                className={`flex ${i === 0 ? "items-baseline gap-3" : ""} ${i === statementLines.length - 1 ? "items-end gap-3" : `justify-center md:justify-start ${indent}`}`}
              >
                {i === 0 && (
                  <p className="text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0" style={monoStyle}>001</p>
                )}
                <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84]" style={interStyle}>
                  {line}
                </p>
                {i === statementLines.length - 1 && (
                  <p className="hidden md:block text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0 pb-2" style={monoStyle}>
                    [ H.Studio ]
                  </p>
                )}
              </div>
            );
          })}
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
          {values.map((v: { _key: string; title: string; body: string }, i: number) => (
            <div
              key={v._key}
              data-animate-delay={String(i * 0.2)}
              style={{ opacity: 0 }}
              className="flex-1"
            >
              <BracketBox>
                <div className="flex flex-col gap-3">
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
              </BracketBox>
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

        {teamMembers.map((member: { _key: string; name: string; role: string; bio: string; photo: { asset?: unknown } | null }) => {
          const photoSrc = optimizedImg(member.photo, "/images/profile.webp", 900);
          return (
            <div key={member._key} className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 last:mb-0">
              <p
                data-animate-delay="0"
                style={{ opacity: 0, ...monoStyle }}
                className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap"
              >
                [ The Team ]
              </p>
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:gap-8 md:w-[clamp(600px,calc(160px_+_57vw),983px)]">
                <div data-animate-delay="0.4" style={{ opacity: 0 }} className="flex-1">
                  <BracketBox>
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="font-black text-[20px] text-black tracking-[-0.04em] uppercase leading-[1.1]" style={interStyle}>
                          {member.name}
                        </p>
                        <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] italic mt-1" style={interStyle}>
                          {member.role}
                        </p>
                      </div>
                      <p className="text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]" style={interStyle}>
                        {member.bio}
                      </p>
                    </div>
                  </BracketBox>
                </div>
                <div data-animate-delay="0.2" style={{ opacity: 0 }} className="flex items-start gap-6 shrink-0">
                  <p className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>003</p>
                  <div className="w-full md:w-[436px] aspect-[436/614] overflow-hidden">
                    <img src={photoSrc} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* ─── Full-bleed photo ──────────────────────────────────────────────── */}
    <section className="w-full aspect-[375/565] md:aspect-[8/5] overflow-hidden bg-black">
      <img
        data-animate="blur-reveal"
        src={fullBleed}
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
          {steps.map((step: { _key: string; num: string; name: string; desc: string }, i: number) => (
            <div
              key={step._key}
              data-animate-delay={String(i * 0.2)}
              style={{ opacity: 0 }}
            >
              <BracketBox>
                <div className="flex flex-col gap-2">
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
              </BracketBox>
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
