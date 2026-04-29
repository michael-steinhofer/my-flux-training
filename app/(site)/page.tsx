import Navbar from "../ui/navbar";
import { sanityFetch } from "@/sanity/lib/live";
import { optimizedImg } from "@/sanity/lib/image";
import { defineQuery } from "groq";

export const dynamic = 'force-dynamic';

const interStyle = { fontFamily: "var(--inter)" };
const playfairStyle = { fontFamily: "var(--playfair)" };
const monoStyle = { fontFamily: "var(--font-geist-mono)" };

const arrowIcon = "/images/arrow-icon.svg";

// ─── GROQ Queries ────────────────────────────────────────────────────────────

const SERVICES_QUERY = defineQuery(
  `*[_type == "service"] | order(order asc) { _id, num, name, desc, image }`
);
const NEWS_QUERY = defineQuery(
  `*[_type == "newsItem"] | order(order asc) { _id, text, image }`
);
const TESTIMONIALS_QUERY = defineQuery(
  `*[_type == "testimonial"] | order(order asc) { _id, name, quote, logo { asset, width, height }, rotation, left, top }`
);
const PORTFOLIO_QUERY = defineQuery(
  `*[_type == "portfolioProject"] | order(order asc) { _id, title, tags, image, desktopHeight }`
);
const SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0] { heroImage, profilePhoto, photographerPhoto }`
);

// ─── Local image fallbacks (until images are uploaded to Sanity) ─────────────

const SERVICE_FALLBACKS = [
  "/images/service-1.webp",
  "/images/service-2.webp",
  "/images/service-3.webp",
  "/images/service-4.webp",
];
const NEWS_FALLBACKS = [
  "/images/news-1.webp",
  "/images/news-2.webp",
  "/images/news-3.webp",
];
const TESTIMONIAL_LOGO_FALLBACKS = [
  "/images/testimonial-logo-1.webp",
  "/images/testimonial-logo-2.webp",
  "/images/testimonial-logo-3.webp",
  "/images/testimonial-logo-4.webp",
];
const TESTIMONIAL_LOGO_DIMS = [
  { w: 138, h: 19 },
  { w: 143, h: 19 },
  { w: 109, h: 31 },
  { w: 81, h: 36 },
];
const PORTFOLIO_FALLBACKS = [
  "/images/portfolio-1.webp",
  "/images/portfolio-2.webp",
  "/images/portfolio-3.webp",
  "/images/portfolio-4.webp",
];

// Shorthand used throughout this file
const imgSrc = optimizedImg;

// ─── Sub-components ──────────────────────────────────────────────────────────

function NewsCard({
  img, text, imgHeight, className = "",
}: {
  img: string; text: string; imgHeight: string; className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className={`overflow-hidden shrink-0 ${imgHeight}`}>
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <p
        className="flex-1 text-[14px] text-[#1f1f1f] font-normal leading-[1.3] tracking-[-0.56px]"
        style={interStyle}
      >
        {text}
      </p>
      <div className="border-b border-black flex gap-[10px] items-center py-1 self-start">
        <span
          className="text-[14px] font-medium text-black tracking-[-0.56px] whitespace-nowrap"
          style={interStyle}
        >
          Read more
        </span>
        <div className="flex items-center justify-center size-[18px]">
          <div className="-rotate-90">
            <img src={arrowIcon} alt="" className="block size-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  logo, logoW, logoH, quote, name, className = "",
}: {
  logo: string; logoW: number; logoH: number;
  quote: string; name: string; className?: string;
}) {
  return (
    <div className={`bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 items-start ${className}`}>
      <img
        src={logo}
        alt=""
        style={{ width: logoW, height: logoH }}
        className="object-contain object-left shrink-0"
      />
      <p
        className="text-[18px] text-[#1f1f1f] font-normal leading-[1.3] tracking-[-0.72px]"
        style={interStyle}
      >
        {quote}
      </p>
      <p
        className="text-[16px] text-black font-black leading-[1.1] tracking-[-0.64px] uppercase whitespace-nowrap"
        style={interStyle}
      >
        {name}
      </p>
    </div>
  );
}

function ProjectArrow() {
  return (
    <div className="flex items-center justify-center shrink-0 size-8">
      <div className="-rotate-90">
        <img src={arrowIcon} alt="" className="block size-8" />
      </div>
    </div>
  );
}

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M15 1H1V15" stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

function PortfolioCta() {
  return (
    <div className="flex gap-3 items-center justify-center w-full">
      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <CornerBracket />
        <CornerBracket className="-rotate-90" />
      </div>
      <div className="flex flex-col gap-[10px] items-start justify-center flex-1 py-3">
        <p
          className="italic text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]"
          style={interStyle}
        >
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button
          className="cursor-pointer bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full"
          style={interStyle}
        >
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col justify-between self-stretch w-6 shrink-0">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}

function ProjectCard({
  img, title, tags, height, titleSize,
}: {
  img: string; title: string; tags: string[]; height: string; titleSize: string;
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className={`relative overflow-hidden ${height}`}>
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded-full text-[14px] font-medium text-[#111] tracking-[-0.56px] whitespace-nowrap"
              style={interStyle}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          className={`font-black ${titleSize} text-black tracking-[-0.04em] uppercase leading-[1.1] whitespace-nowrap`}
          style={interStyle}
        >
          {title}
        </p>
        <ProjectArrow />
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [
    { data: services },
    { data: newsItems },
    { data: testimonials },
    { data: portfolioProjects },
    { data: settings },
  ] = await Promise.all([
    sanityFetch({ query: SERVICES_QUERY }),
    sanityFetch({ query: NEWS_QUERY }),
    sanityFetch({ query: TESTIMONIALS_QUERY }),
    sanityFetch({ query: PORTFOLIO_QUERY }),
    sanityFetch({ query: SETTINGS_QUERY }),
  ]);

  const heroImage = imgSrc(settings?.heroImage, "/images/hero.webp", 2400);
  const profilePhoto = imgSrc(settings?.profilePhoto, "/images/profile.webp", 900);
  const photographerPhoto = imgSrc(settings?.photographerPhoto, "/images/photographer.webp", 1600);

  return (
    <>
    <section className="relative overflow-hidden min-h-screen">
      <div className="relative flex flex-col min-h-screen justify-between md:justify-start md:gap-[240px] px-4 md:px-8 pb-6 md:pb-0">

        {/* Background image — desktop */}
        <div className="hidden md:block pointer-events-none absolute -translate-y-1/2 aspect-[2291/1346] left-[-34.79%] right-[-34.79%] top-[calc(50%+88.84px)]">
          <img src={heroImage} alt="" className="absolute inset-0 max-w-none size-full" />
        </div>

        {/* Background image — mobile */}
        <div className="md:hidden pointer-events-none absolute inset-0">
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover object-[65%_center]" />
        </div>

        {/* Frosted-glass overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] [mask-image:linear-gradient(to_bottom,transparent,black_50%)]" />

        <Navbar />

        {/* Hero block */}
        <div className="flex flex-col justify-between h-[341px] md:h-auto md:justify-start md:w-full">
          <div className="flex flex-col pb-[15px]">
            <div className="flex justify-center md:justify-start px-[18px] -mb-[15px]">
              <p
                className="text-[14px] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                [ Hello i&apos;m ]
              </p>
            </div>
            <h1
              className="font-medium capitalize text-[96px] md:text-[13.75vw] text-white text-center w-full leading-[0.8] md:leading-[1.1] tracking-[-0.07em] mix-blend-overlay whitespace-pre-wrap md:whitespace-pre -mb-[15px]"
              style={{ fontFamily: "var(--inter)" }}
            >
              {"Harvey   Specter"}
            </h1>
          </div>
          <div className="flex md:justify-end">
            <div className="flex flex-col gap-[17px] w-[293px]">
              <p
                className="font-bold italic text-[14px] text-[#1f1f1f] tracking-[-0.56px] uppercase leading-[1.1]"
                style={{ fontFamily: "var(--inter)" }}
              >
                H.Studio is a{" "}
                <span className="font-normal not-italic">full-service</span>{" "}
                creative studio creating beautiful digital experiences and
                products. We are an{" "}
                <span className="font-normal not-italic">award winning</span>{" "}
                design and art group specializing in branding, web design and
                engineering.
              </p>
              <button
                className="self-start cursor-pointer font-medium text-[14px] text-white tracking-[-0.56px] bg-black px-4 py-3 rounded-full whitespace-nowrap"
                style={{ fontFamily: "var(--inter)" }}
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About section */}
    <section id="about" className="bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-[120px]">
      <div className="flex flex-col gap-3 items-end mb-6">
        <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1] text-right" style={monoStyle}>
          [ 8+ years in industry ]
        </p>
        <div className="w-full border-t border-[#1f1f1f]" />
      </div>
      <div className="flex flex-col gap-2 uppercase">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start gap-3">
          <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-pre" style={interStyle}>
            {"A creative director   /"}
          </p>
          <p className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>001</p>
        </div>
        <div className="flex justify-center md:justify-start md:pl-[15.6%]">
          <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap" style={interStyle}>
            Photographer
          </p>
        </div>
        <div className="flex justify-center md:justify-start md:pl-[44.3%]">
          <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap" style={interStyle}>
            Born <span style={playfairStyle}>&amp;</span> raised
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap" style={interStyle}>
            on the south side
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start md:pl-[44%] [@media(min-width:1440px)]:flex-row [@media(min-width:1440px)]:items-end gap-3">
          <p className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap" style={interStyle}>
            of chicago.
          </p>
          <p className="text-[14px] text-[#1f1f1f] leading-[1.1] [@media(min-width:1440px)]:pb-2" style={monoStyle}>
            [ creative freelancer ]
          </p>
        </div>
      </div>
      </div>
    </section>

    {/* Profile / Bio section */}
    <section className="bg-white px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-5 mb-5 md:hidden">
          <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>002</p>
          <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>[ About ]</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <p className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap" style={monoStyle}>
            [ About ]
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:gap-8 md:w-[clamp(600px,calc(160px_+_57vw),983px)]">
            <div className="flex items-stretch gap-3 flex-1">
              <div className="flex flex-col justify-between w-6 shrink-0">
                <CornerBracket />
                <CornerBracket className="-rotate-90" />
              </div>
              <p className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] py-3" style={interStyle}>
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
              <div className="flex flex-col justify-between w-6 shrink-0">
                <CornerBracket className="rotate-90" />
                <CornerBracket className="rotate-180" />
              </div>
            </div>
            <div className="flex items-start gap-6 shrink-0">
              <p className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>002</p>
              <div className="w-full md:w-[436px] aspect-[436/614] overflow-hidden">
                <img src={profilePhoto} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Full-bleed photo section */}
    <section className="w-full aspect-[375/565] md:aspect-[8/5] overflow-hidden">
      <img src={photographerPhoto} alt="" className="w-full h-full object-cover" />
    </section>

    {/* Services section */}
    <section id="services" className="bg-black px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-12">
        <p className="text-[14px] text-white uppercase leading-[1.1] whitespace-nowrap" style={monoStyle}>
          [ services ]
        </p>
        <div className="flex items-center justify-between uppercase text-white whitespace-nowrap">
          <span className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] tracking-[-0.08em] leading-normal" style={interStyle}>
            [{services.length}]
          </span>
          <span className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] tracking-[-0.08em] leading-normal" style={interStyle}>
            Deliverables
          </span>
        </div>
        <div className="flex flex-col gap-12">
          {(services as any[]).map((service, i) => (
            <div key={service._id} className="flex flex-col gap-3">
              <div className="flex flex-col gap-[9px]">
                <p className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
                  {service.num}
                </p>
                <div className="w-full border-t border-white" />
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:justify-between">
                <p className="font-bold italic text-[36px] text-white tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap" style={interStyle}>
                  {service.name}
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6 items-start">
                  <p className="text-[14px] text-white leading-[1.3] tracking-[-0.56px] md:w-[393px]" style={interStyle}>
                    {service.desc}
                  </p>
                  <div className="size-[151px] shrink-0 overflow-hidden">
                    <img src={imgSrc(service.image, SERVICE_FALLBACKS[i], 300)} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio / Selected Work section */}
    <section id="projects" className="bg-white px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-[61px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0 uppercase">
          <p className="md:hidden text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>[ portfolio ]</p>
          <div className="flex items-start gap-[10px]">
            <div className="flex flex-col font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.86]" style={interStyle}>
              <p>Selected</p>
              <p>Work</p>
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>004</p>
          </div>
          <div className="hidden md:flex h-[110px] w-[15px] items-center justify-center">
            <p className="-rotate-90 text-[14px] text-[#1f1f1f] leading-[1.1] uppercase whitespace-nowrap" style={monoStyle}>
              [ portfolio ]
            </p>
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {(portfolioProjects as any[]).map((p, i) => (
            <ProjectCard
              key={p._id}
              img={imgSrc(p.image, PORTFOLIO_FALLBACKS[i])}
              title={p.title}
              tags={p.tags ?? []}
              height="h-[390px]"
              titleSize="text-[24px]"
            />
          ))}
          <PortfolioCta />
        </div>

        {/* Desktop: two-column masonry */}
        <div className="hidden md:flex gap-6 items-end">
          <div className="flex flex-col flex-1 self-stretch justify-between">
            <ProjectCard
              img={imgSrc(portfolioProjects[0]?.image, PORTFOLIO_FALLBACKS[0])}
              title={portfolioProjects[0]?.title ?? ""}
              tags={portfolioProjects[0]?.tags ?? []}
              height={portfolioProjects[0]?.desktopHeight ?? "h-[744px]"}
              titleSize="text-[36px]"
            />
            <ProjectCard
              img={imgSrc(portfolioProjects[1]?.image, PORTFOLIO_FALLBACKS[1])}
              title={portfolioProjects[1]?.title ?? ""}
              tags={portfolioProjects[1]?.tags ?? []}
              height={portfolioProjects[1]?.desktopHeight ?? "h-[699px]"}
              titleSize="text-[36px]"
            />
            <PortfolioCta />
          </div>
          <div className="flex flex-col flex-1 gap-[117px] pt-[240px]">
            <ProjectCard
              img={imgSrc(portfolioProjects[2]?.image, PORTFOLIO_FALLBACKS[2])}
              title={portfolioProjects[2]?.title ?? ""}
              tags={portfolioProjects[2]?.tags ?? []}
              height={portfolioProjects[2]?.desktopHeight ?? "h-[699px]"}
              titleSize="text-[36px]"
            />
            <ProjectCard
              img={imgSrc(portfolioProjects[3]?.image, PORTFOLIO_FALLBACKS[3])}
              title={portfolioProjects[3]?.title ?? ""}
              tags={portfolioProjects[3]?.tags ?? []}
              height={portfolioProjects[3]?.desktopHeight ?? "h-[744px]"}
              titleSize="text-[36px]"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials section */}
    <section id="testimonials" className="bg-[#fafafa]">

      {/* Mobile: horizontal scroll carousel */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p className="text-[64px] font-medium capitalize text-black tracking-[-0.07em] leading-[0.8]" style={interStyle}>
          Testimonials
        </p>
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4 pt-8 pb-4 snap-x snap-mandatory">
            {(testimonials as any[]).map((t, i) => (
              <div key={t._id} className={`snap-start flex-shrink-0 ${t.rotation ?? ""}`}>
                <TestimonialCard
                  logo={imgSrc(t.logo, TESTIMONIAL_LOGO_FALLBACKS[i], 300)}
                  logoW={t.logo?.width ?? TESTIMONIAL_LOGO_DIMS[i]?.w ?? 120}
                  logoH={t.logo?.height ?? TESTIMONIAL_LOGO_DIMS[i]?.h ?? 24}
                  quote={t.quote}
                  name={t.name}
                  className="w-[260px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: giant text with cards scattered over it */}
      <div className="hidden md:block relative h-[840px] overflow-hidden">
        {testimonials[0] && (
          <div className="absolute" style={{ left: testimonials[0].left ?? "46.9%", top: testimonials[0].top ?? 272 }}>
            <div className={testimonials[0].rotation ?? ""}>
              <TestimonialCard
                logo={imgSrc(testimonials[0].logo, TESTIMONIAL_LOGO_FALLBACKS[0], 300)}
                logoW={testimonials[0].logo?.width ?? TESTIMONIAL_LOGO_DIMS[0].w}
                logoH={testimonials[0].logo?.height ?? TESTIMONIAL_LOGO_DIMS[0].h}
                quote={testimonials[0].quote}
                name={testimonials[0].name}
                className="w-[353px]"
              />
            </div>
          </div>
        )}
        <div className="absolute left-0 right-0 top-[360px] flex justify-center pointer-events-none">
          <p className="font-medium capitalize text-black text-center tracking-[-0.07em] leading-[1.1] whitespace-nowrap text-[clamp(80px,13.75vw,198px)]" style={interStyle}>
            Testimonials
          </p>
        </div>
        {(testimonials as any[]).slice(1).map((t, i) => (
          <div key={t._id} className="absolute" style={{ left: t.left ?? "0%", top: t.top ?? 0 }}>
            <div className={t.rotation ?? ""}>
              <TestimonialCard
                logo={imgSrc(t.logo, TESTIMONIAL_LOGO_FALLBACKS[i + 1], 300)}
                logoW={t.logo?.width ?? TESTIMONIAL_LOGO_DIMS[i + 1]?.w ?? 120}
                logoH={t.logo?.height ?? TESTIMONIAL_LOGO_DIMS[i + 1]?.h ?? 24}
                quote={t.quote}
                name={t.name}
                className="w-[353px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* News section */}
    <section id="news" className="bg-[#f3f3f3]">

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p className="font-light text-[32px] text-black tracking-[-0.08em] uppercase leading-[0.86]" style={interStyle}>
          Keep up with my latest news &amp; achievements
        </p>
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4 pb-4 snap-x snap-mandatory">
            {(newsItems as any[]).map((item, i) => (
              <NewsCard
                key={item._id}
                img={imgSrc(item.image, NEWS_FALLBACKS[i], 800)}
                text={item.text}
                imgHeight="h-[398px]"
                className="w-[300px] shrink-0 snap-start"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: rotated title + 3 staggered cards */}
      <div className="hidden md:block px-8 py-[120px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex items-end justify-between">
          <div className="flex h-[706px] w-[110px] shrink-0 items-center justify-center">
            <div className="-rotate-90">
              <div className="flex flex-col font-light text-[64px] text-black tracking-[-0.08em] uppercase leading-[0.86] whitespace-nowrap" style={interStyle}>
                <p>Keep up with my latest</p>
                <p>News &amp; achievements</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[31px]">
            <NewsCard
              img={imgSrc(newsItems[0]?.image, NEWS_FALLBACKS[0], 800)}
              text={newsItems[0]?.text ?? ""}
              imgHeight="aspect-[353/469]"
              className="w-[min(353px,calc((100vw_-_330px)_/_3))]"
            />
            <div className="w-px self-stretch bg-[#c8c8c8]" />
            <NewsCard
              img={imgSrc(newsItems[1]?.image, NEWS_FALLBACKS[1], 800)}
              text={newsItems[1]?.text ?? ""}
              imgHeight="aspect-[353/469]"
              className="w-[min(353px,calc((100vw_-_330px)_/_3))] pt-[120px]"
            />
            <div className="w-px self-stretch bg-[#c8c8c8]" />
            <NewsCard
              img={imgSrc(newsItems[2]?.image, NEWS_FALLBACKS[2], 800)}
              text={newsItems[2]?.text ?? ""}
              imgHeight="aspect-[353/469]"
              className="w-[min(353px,calc((100vw_-_330px)_/_3))]"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer id="contact" className="bg-black overflow-x-hidden">

      {/* Mobile footer */}
      <div className="md:hidden pt-[48px] px-4 flex flex-col gap-[48px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="uppercase text-[24px] font-light italic text-white leading-[1.1] tracking-[-0.04em]" style={interStyle}>
              Have a <span className="font-bold not-italic">project</span> in mind?
            </p>
            <button className="self-start cursor-pointer text-[14px] font-medium text-white border border-white rounded-[24px] px-4 py-3" style={interStyle}>
              Let&apos;s talk
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Facebook</a>
            <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Instagram</a>
            <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>x.com</a>
            <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Linkedin</a>
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

      {/* Desktop footer */}
      <div className="hidden md:block pt-[48px] px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[120px]">
          <div className="flex flex-col gap-12">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-4 w-[298px]">
                <p className="uppercase text-[24px] font-light italic text-white leading-[1.1] tracking-[-0.04em]" style={interStyle}>
                  Have a <span className="font-bold not-italic">project</span> in mind?
                </p>
                <button className="self-start cursor-pointer text-[14px] font-medium text-white border border-white rounded-[24px] px-4 py-3" style={interStyle}>
                  Let&apos;s talk
                </button>
              </div>
              <div className="flex flex-col gap-1.5 w-[298px] items-center">
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Facebook</a>
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Instagram</a>
              </div>
              <div className="flex flex-col gap-1.5 w-[298px] items-end">
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>x.com</a>
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Linkedin</a>
              </div>
            </div>
            <div className="border-t border-white" />
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-end gap-2">
              <div className="w-[15px] flex items-center justify-center shrink-0" style={{ height: "clamp(70px, calc(12.59vw - 27.33px), 160px)" }}>
                <div className="-rotate-90">
                  <span className="text-[12px] text-white whitespace-nowrap" style={monoStyle}>[ Coded By Claude ]</span>
                </div>
              </div>
              <div className="[overflow-y:clip]" style={{ height: "clamp(95px, calc(17.23vw - 37.38px), 219px)" }}>
                <p className="font-semibold capitalize text-white tracking-[-0.06em] leading-[0.8] whitespace-nowrap" style={{ ...interStyle, fontSize: "clamp(126px, calc(22.82vw - 49.51px), 290px)" }}>
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
    </>
  );
}
