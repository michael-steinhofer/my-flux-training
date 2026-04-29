import Navbar from "./ui/navbar";

const interStyle = { fontFamily: "var(--inter)" };
const playfairStyle = { fontFamily: "var(--playfair)" };
const monoStyle = { fontFamily: "var(--font-geist-mono)" };

const heroImage =
  "https://www.figma.com/api/mcp/asset/7fbe1000-0267-4c96-953f-f25777c56836";

const profilePhoto =
  "https://www.figma.com/api/mcp/asset/df6c6a35-79f9-4d75-9d80-31254b74eb24";

const photographerPhoto =
  "https://www.figma.com/api/mcp/asset/15e43864-f5c6-4d32-ad7d-7b916ee319d1";

const arrowIcon =
  "https://www.figma.com/api/mcp/asset/1b96a979-83ee-4549-99de-f4147d0d8310";

const services = [
  {
    num: "[ 1 ]",
    name: "Brand Discovery",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/4b75b69a-aa6f-4088-97fe-291d53b71686",
  },
  {
    num: "[ 2 ]",
    name: "Web design & Dev",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/8cbf2a1d-1448-4153-aa4e-e8646bd45a08",
  },
  {
    num: "[ 3 ]",
    name: "Marketing",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/bbacd6b0-e617-4fbf-b274-6f906803e7d2",
  },
  {
    num: "[ 4 ]",
    name: "Photography",
    desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    img: "https://www.figma.com/api/mcp/asset/01655ee2-076c-437c-afa3-0793e0088dfe",
  },
];

const newsItems = [
  {
    img: "https://www.figma.com/api/mcp/asset/7a3fbbce-0217-4a6f-97fd-123a71854c29",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://www.figma.com/api/mcp/asset/371858ae-3a86-411f-ae1b-6dd1c8b754a1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "https://www.figma.com/api/mcp/asset/dce1e5f2-e263-4191-b384-a2cc74183367",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const testimonials = [
  {
    logo: "https://www.figma.com/api/mcp/asset/44e5e0e9-3681-4249-9eed-97c302bd3907",
    logoW: 138, logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    rot: "rotate-[2.9deg]",
    left: "46.9%", top: 272,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/5c4fdf36-f7e6-4b8b-9d44-d1cdf31b9189",
    logoW: 143, logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    rot: "rotate-[-6.85deg]",
    left: "7.1%", top: 142,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/5cdaba81-0bb7-44b7-ac4f-f8d5c02d0089",
    logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    rot: "rotate-[2.23deg]",
    left: "21.2%", top: 553,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/390cf2d3-f326-4d6b-83ac-7956fa767825",
    logoW: 81, logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    rot: "rotate-[-4.15deg]",
    left: "68.5%", top: 546,
  },
];

const portfolioProjects = [
  {
    title: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/e7113a03-cef3-4d8d-8f7a-d06fa854234b",
    desktopHeight: "h-[744px]",
  },
  {
    title: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/4948bc09-2fb6-4a8f-910f-6a5fb2922732",
    desktopHeight: "h-[699px]",
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/255642fe-6524-41d7-b5e8-5404c46319b2",
    desktopHeight: "h-[699px]",
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    img: "https://www.figma.com/api/mcp/asset/174bf314-66be-46fe-a96f-bfe483d84be5",
    desktopHeight: "h-[744px]",
  },
];

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
  img,
  title,
  tags,
  height,
  titleSize,
}: {
  img: string;
  title: string;
  tags: string[];
  height: string;
  titleSize: string;
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

export default function Home() {
  return (
    <>
    <section className="relative overflow-hidden min-h-screen">
      {/* Content — photo and blur live here with the text so mix-blend-mode
          and backdrop-blur both composite against the photo correctly */}
      <div className="relative flex flex-col min-h-screen justify-between md:justify-start md:gap-[240px] px-4 md:px-8 pb-6 md:pb-0">

        {/* Background image — desktop: wider than viewport, vertically centered */}
        <div className="hidden md:block pointer-events-none absolute -translate-y-1/2 aspect-[2291/1346] left-[-34.79%] right-[-34.79%] top-[calc(50%+88.84px)]">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 max-w-none size-full"
          />
        </div>

        {/* Background image — mobile: covers full section */}
        <div className="md:hidden pointer-events-none absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[65%_center]"
          />
        </div>

        {/* Frosted-glass overlay — after images so it blurs the photo */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] [mask-image:linear-gradient(to_bottom,transparent,black_50%)]" />

        <Navbar />

        {/* Hero block */}
        <div className="flex flex-col justify-between h-[341px] md:h-auto md:justify-start md:w-full">
          {/* Name */}
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

          {/* Bio */}
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
      {/* Header: label + rule */}
      <div className="flex flex-col gap-3 items-end mb-6">
        <p
          className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1] text-right"
          style={monoStyle}
        >
          [ 8+ years in industry ]
        </p>
        <div className="w-full border-t border-[#1f1f1f]" />
      </div>

      {/* Staircase text */}
      <div className="flex flex-col gap-2 uppercase">
        {/* Line 1: text (left) + 001 (right) on desktop; 001 above text on mobile */}
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start gap-3">
          <p
            className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-pre"
            style={interStyle}
          >
            {"A creative director   /"}
          </p>
          <p
            className="text-[14px] text-[#1f1f1f] leading-[1.1]"
            style={monoStyle}
          >
            001
          </p>
        </div>

        {/* Line 2: Photographer — indented on desktop, centered on mobile */}
        <div className="flex justify-center md:justify-start md:pl-[15.6%]">
          <p
            className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
            style={interStyle}
          >
            Photographer
          </p>
        </div>

        {/* Line 3: Born & raised — deeper indent on desktop, centered on mobile */}
        <div className="flex justify-center md:justify-start md:pl-[44.3%]">
          <p
            className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
            style={interStyle}
          >
            Born <span style={playfairStyle}>&amp;</span> raised
          </p>
        </div>

        {/* Line 4: on the south side — full-left on desktop, centered on mobile */}
        <div className="flex justify-center md:justify-start">
          <p
            className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
            style={interStyle}
          >
            on the south side
          </p>
        </div>

        {/* Line 5: of chicago. + [ creative freelancer ] label */}
        <div className="flex flex-col items-center md:items-start md:pl-[44%] [@media(min-width:1440px)]:flex-row [@media(min-width:1440px)]:items-end gap-3">
          <p
            className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap"
            style={interStyle}
          >
            of chicago.
          </p>
          <p
            className="text-[14px] text-[#1f1f1f] leading-[1.1] [@media(min-width:1440px)]:pb-2"
            style={monoStyle}
          >
            [ creative freelancer ]
          </p>
        </div>
      </div>
      </div>
    </section>

    {/* Profile / Bio section */}
    <section className="bg-white px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Mobile-only: 002 + [ About ] stacked at top */}
        <div className="flex flex-col gap-5 mb-5 md:hidden">
          <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>
            002
          </p>
          <p className="text-[14px] text-[#1f1f1f] uppercase leading-[1.1]" style={monoStyle}>
            [ About ]
          </p>
        </div>

        {/* Row: [ About ] far-left | text block + photo */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">

          {/* [ About ] label — desktop only */}
          <p
            className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap"
            style={monoStyle}
          >
            [ About ]
          </p>

          {/* Right content block */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:gap-8 md:w-[clamp(600px,calc(160px_+_57vw),983px)]">

            {/* Text block with corner-bracket frame */}
            <div className="flex items-stretch gap-3 flex-1">
              {/* Left bracket column */}
              <div className="flex flex-col justify-between w-6 shrink-0">
                <CornerBracket />
                <CornerBracket className="-rotate-90" />
              </div>
              {/* Body text */}
              <p
                className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] tracking-[-0.56px] py-3"
                style={interStyle}
              >
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
              {/* Right bracket column */}
              <div className="flex flex-col justify-between w-6 shrink-0">
                <CornerBracket className="rotate-90" />
                <CornerBracket className="rotate-180" />
              </div>
            </div>

            {/* 002 label + photo */}
            <div className="flex items-start gap-6 shrink-0">
              <p
                className="hidden md:block text-[14px] text-[#1f1f1f] uppercase leading-[1.1]"
                style={monoStyle}
              >
                002
              </p>
              <div className="w-full md:w-[436px] aspect-[436/614] overflow-hidden">
                <img
                  src={profilePhoto}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Full-bleed photo section (pexels-vazhnik-7562188 2) */}
    <section className="w-full aspect-[375/565] md:aspect-[8/5] overflow-hidden">
      <img
        src={photographerPhoto}
        alt=""
        className="w-full h-full object-cover"
      />
    </section>
    {/* Services section */}
    <section id="services" className="bg-black px-4 md:px-8 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-12">

        {/* [ services ] label */}
        <p className="text-[14px] text-white uppercase leading-[1.1] whitespace-nowrap" style={monoStyle}>
          [ services ]
        </p>

        {/* [4]  DELIVERABLES */}
        <div className="flex items-center justify-between uppercase text-white whitespace-nowrap">
          <span
            className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] tracking-[-0.08em] leading-normal"
            style={interStyle}
          >
            [4]
          </span>
          <span
            className="font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] tracking-[-0.08em] leading-normal"
            style={interStyle}
          >
            Deliverables
          </span>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-12">
          {services.map((service) => (
            <div key={service.num} className="flex flex-col gap-3">

              {/* [ N ] + rule */}
              <div className="flex flex-col gap-[9px]">
                <p className="text-[14px] text-white uppercase leading-[1.1]" style={monoStyle}>
                  {service.num}
                </p>
                <div className="w-full border-t border-white" />
              </div>

              {/* Name | description + image */}
              <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-start md:justify-between">
                <p
                  className="font-bold italic text-[36px] text-white tracking-[-0.04em] leading-[1.1] uppercase whitespace-nowrap"
                  style={interStyle}
                >
                  {service.name}
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6 items-start">
                  <p
                    className="text-[14px] text-white leading-[1.3] tracking-[-0.56px] md:w-[393px]"
                    style={interStyle}
                  >
                    {service.desc}
                  </p>
                  <div className="size-[151px] shrink-0 overflow-hidden">
                    <img src={service.img} alt="" className="w-full h-full object-cover" />
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

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0 uppercase">
          {/* Mobile: [ portfolio ] above title */}
          <p className="md:hidden text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>
            [ portfolio ]
          </p>
          {/* Title + 004 */}
          <div className="flex items-start gap-[10px]">
            <div
              className="flex flex-col font-light text-[clamp(32px,calc(9.524vw_-_41.14px),96px)] text-black tracking-[-0.08em] leading-[0.86]"
              style={interStyle}
            >
              <p>Selected</p>
              <p>Work</p>
            </div>
            <p className="text-[14px] text-[#1f1f1f] leading-[1.1]" style={monoStyle}>
              004
            </p>
          </div>
          {/* Desktop: [ portfolio ] rotated -90° on far right */}
          <div className="hidden md:flex h-[110px] w-[15px] items-center justify-center">
            <p
              className="-rotate-90 text-[14px] text-[#1f1f1f] leading-[1.1] uppercase whitespace-nowrap"
              style={monoStyle}
            >
              [ portfolio ]
            </p>
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {portfolioProjects.map((p) => (
            <ProjectCard
              key={p.title}
              img={p.img}
              title={p.title}
              tags={p.tags}
              height="h-[390px]"
              titleSize="text-[24px]"
            />
          ))}
          <PortfolioCta />
        </div>

        {/* Desktop: two-column masonry */}
        <div className="hidden md:flex gap-6 items-end">
          {/* Left column — self-stretch overrides items-end so it fills grid height */}
          <div className="flex flex-col flex-1 self-stretch justify-between">
            <ProjectCard
              img={portfolioProjects[0].img}
              title={portfolioProjects[0].title}
              tags={portfolioProjects[0].tags}
              height={portfolioProjects[0].desktopHeight}
              titleSize="text-[36px]"
            />
            <ProjectCard
              img={portfolioProjects[1].img}
              title={portfolioProjects[1].title}
              tags={portfolioProjects[1].tags}
              height={portfolioProjects[1].desktopHeight}
              titleSize="text-[36px]"
            />
            <PortfolioCta />
          </div>
          {/* Right column — staggered down */}
          <div className="flex flex-col flex-1 gap-[117px] pt-[240px]">
            <ProjectCard
              img={portfolioProjects[2].img}
              title={portfolioProjects[2].title}
              tags={portfolioProjects[2].tags}
              height={portfolioProjects[2].desktopHeight}
              titleSize="text-[36px]"
            />
            <ProjectCard
              img={portfolioProjects[3].img}
              title={portfolioProjects[3].title}
              tags={portfolioProjects[3].tags}
              height={portfolioProjects[3].desktopHeight}
              titleSize="text-[36px]"
            />
          </div>
        </div>

      </div>
    </section>

    {/* Testimonials section */}
    <section id="testimonials" className="bg-[#fafafa]">

      {/* Mobile: title + horizontal scroll carousel */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p
          className="text-[64px] font-medium capitalize text-black tracking-[-0.07em] leading-[0.8]"
          style={interStyle}
        >
          Testimonials
        </p>
        {/* Outer div owns overflow-x; inner div adds pt-8 so rotated card tops aren't clipped */}
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4 pt-8 pb-4 snap-x snap-mandatory">
            {testimonials.map((t) => (
              <div key={t.name} className={`snap-start flex-shrink-0 ${t.rot}`}>
                <TestimonialCard
                  logo={t.logo} logoW={t.logoW} logoH={t.logoH}
                  quote={t.quote} name={t.name}
                  className="w-[260px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: giant text with cards scattered over it */}
      <div className="hidden md:block relative h-[840px] overflow-hidden">
        {/* Card 1 (Lukas) — rendered first = behind text in DOM stacking order */}
        <div className="absolute" style={{ left: testimonials[0].left, top: testimonials[0].top }}>
          <div className={testimonials[0].rot}>
            <TestimonialCard
              logo={testimonials[0].logo} logoW={testimonials[0].logoW} logoH={testimonials[0].logoH}
              quote={testimonials[0].quote} name={testimonials[0].name}
              className="w-[353px]"
            />
          </div>
        </div>
        {/* "Testimonials" text — shifted down so top cards sit above it */}
        <div className="absolute left-0 right-0 top-[360px] flex justify-center pointer-events-none">
          <p
            className="font-medium capitalize text-black text-center tracking-[-0.07em] leading-[1.1] whitespace-nowrap text-[clamp(80px,13.75vw,198px)]"
            style={interStyle}
          >
            Testimonials
          </p>
        </div>
        {/* Cards 2-4 — rendered last = in front of text */}
        {testimonials.slice(1).map((t) => (
          <div key={t.name} className="absolute" style={{ left: t.left, top: t.top }}>
            <div className={t.rot}>
              <TestimonialCard
                logo={t.logo} logoW={t.logoW} logoH={t.logoH}
                quote={t.quote} name={t.name}
                className="w-[353px]"
              />
            </div>
          </div>
        ))}
      </div>

    </section>

    {/* News section */}
    <section id="news" className="bg-[#f3f3f3]">

      {/* Mobile: title + horizontal scroll */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p
          className="font-light text-[32px] text-black tracking-[-0.08em] uppercase leading-[0.86]"
          style={interStyle}
        >
          Keep up with my latest news &amp; achievements
        </p>
        <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-4 px-4 pb-4 snap-x snap-mandatory">
            {newsItems.map((item, i) => (
              <NewsCard
                key={i}
                img={item.img}
                text={item.text}
                imgHeight="h-[398px]"
                className="w-[300px] shrink-0 snap-start"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: rotated title + 3 staggered cards with dividers */}
      {/* overflow-hidden prevents side-scroll during fluid resize */}
      <div className="hidden md:block px-8 py-[120px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex items-end justify-between">

          {/* Left: title rotated -90° */}
          <div className="flex h-[706px] w-[110px] shrink-0 items-center justify-center">
            <div className="-rotate-90">
              <div
                className="flex flex-col font-light text-[64px] text-black tracking-[-0.08em] uppercase leading-[0.86] whitespace-nowrap"
                style={interStyle}
              >
                <p>Keep up with my latest</p>
                <p>News &amp; achievements</p>
              </div>
            </div>
          </div>

          {/* Right: 3 fluid-width cards + thin dividers
              Formula guarantees ≥30px gap between title and first card:
              card_width = (100vw - 64px padding - 110px title - 30px gap - 2px dividers - 4×31px flex-gaps) / 3
                         = (100vw - 330px) / 3, capped at 353px */}
          <div className="flex items-start gap-[31px]">
            <NewsCard
              img={newsItems[0].img}
              text={newsItems[0].text}
              imgHeight="aspect-[353/469]"
              className="w-[min(353px,calc((100vw_-_330px)_/_3))]"
            />
            <div className="w-px self-stretch bg-[#c8c8c8]" />
            <NewsCard
              img={newsItems[1].img}
              text={newsItems[1].text}
              imgHeight="aspect-[353/469]"
              className="w-[min(353px,calc((100vw_-_330px)_/_3))] pt-[120px]"
            />
            <div className="w-px self-stretch bg-[#c8c8c8]" />
            <NewsCard
              img={newsItems[2].img}
              text={newsItems[2].text}
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

        {/* Top: headline + socials + rule */}
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

        {/* Bottom: legal + coded by + H.Studio overflowing */}
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

          {/* Section 1: 3-column row + rule */}
          <div className="flex flex-col gap-12">
            <div className="flex items-start justify-between">
              {/* Left: headline + button */}
              <div className="flex flex-col gap-4 w-[298px]">
                <p className="uppercase text-[24px] font-light italic text-white leading-[1.1] tracking-[-0.04em]" style={interStyle}>
                  Have a <span className="font-bold not-italic">project</span> in mind?
                </p>
                <button className="self-start cursor-pointer text-[14px] font-medium text-white border border-white rounded-[24px] px-4 py-3" style={interStyle}>
                  Let&apos;s talk
                </button>
              </div>
              {/* Center: Facebook + Instagram */}
              <div className="flex flex-col gap-1.5 w-[298px] items-center">
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Facebook</a>
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Instagram</a>
              </div>
              {/* Right: x.com + Linkedin */}
              <div className="flex flex-col gap-1.5 w-[298px] items-end">
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>x.com</a>
                <a href="#" className="uppercase text-[18px] font-medium text-white tracking-[-0.04em]" style={interStyle}>Linkedin</a>
              </div>
            </div>
            <div className="border-t border-white" />
          </div>

          {/* Section 2: H.Studio + legal
              At 1440px viewport the content area is 1376px.
              H.Studio at 290px ≈ 1271px + coded-by 23px + legal 110px = 1404px → 28px overflow.
              Formula derived so total always fits with ~20px gap from 1440px up to 1504px (where
              max-w-[1440px] takes over), then holds at 290px above that.
              [overflow-y:clip] is used (not overflow-hidden) because clip does NOT affect the
              container's intrinsic width, so the container stays exactly text-wide and the right
              side of the 'o' is never clipped. */}
          <div className="flex items-end justify-between">
            {/* Left: [ Coded By Claude ] vertical + H.Studio bottom-clipped */}
            <div className="flex items-end gap-2">
              {/* [ Coded By Claude ] rotated -90°, height scales proportionally */}
              <div
                className="w-[15px] flex items-center justify-center shrink-0"
                style={{ height: "clamp(70px, calc(12.59vw - 27.33px), 160px)" }}
              >
                <div className="-rotate-90">
                  <span className="text-[12px] text-white whitespace-nowrap" style={monoStyle}>
                    [ Coded By Claude ]
                  </span>
                </div>
              </div>
              {/* H.Studio: [overflow-y:clip] clips only the bottom descenders;
                  overflow-x stays visible so the container width = text width exactly */}
              <div
                className="[overflow-y:clip]"
                style={{ height: "clamp(95px, calc(17.23vw - 37.38px), 219px)" }}
              >
                <p
                  className="font-semibold capitalize text-white tracking-[-0.06em] leading-[0.8] whitespace-nowrap"
                  style={{ ...interStyle, fontSize: "clamp(126px, calc(22.82vw - 49.51px), 290px)" }}
                >
                  H.Studio
                </p>
              </div>
            </div>
            {/* Right: legal links */}
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
