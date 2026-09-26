import { createFileRoute } from "@tanstack/react-router";
import deskStillLife from "@/assets/desk-still-life.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elena Marsh — Writer & Brand Consultant" },
      {
        name: "description",
        content:
          "Elena Marsh is a writer and brand consultant helping thoughtful companies find their voice through essays, brand narratives, and editorial strategy.",
      },
      { property: "og:title", content: "Elena Marsh — Writer & Brand Consultant" },
      {
        property: "og:description",
        content:
          "Essays, brand narratives, and editorial strategy for thoughtful companies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Elena Marsh — Writer & Brand Consultant" },
      {
        name: "twitter:description",
        content:
          "Essays, brand narratives, and editorial strategy for thoughtful companies.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const WRITING = [
  {
    kicker: "Essay",
    title: "The Quiet Power of Saying Less",
    blurb:
      "Why the most persuasive brands whisper — and what happens to the ones that shout.",
    pub: "The Ledger Review",
    year: "2026",
  },
  {
    kicker: "Case study",
    title: "Rebuilding a Voice for Fern & Field",
    blurb:
      "A heritage outdoor brand had a loyal following and nothing to say. Here's how we found its voice again.",
    pub: "Client work",
    year: "2025",
  },
  {
    kicker: "Essay",
    title: "Notes on Writing for People Who Skim",
    blurb:
      "Attention is not a moral failing. A working method for clarity without condescension.",
    pub: "Substack",
    year: "2025",
  },
  {
    kicker: "Case study",
    title: "The Six-Word Positioning Workshop",
    blurb:
      "How three founders, one whiteboard, and a hard deadline produced a strategy everyone could repeat.",
    pub: "Client work",
    year: "2024",
  },
];

const SERVICES = [
  {
    title: "Brand narrative",
    body: "A complete story system — positioning, voice, and messaging your whole team can actually use, delivered as a working document rather than a PDF that dies in a drive.",
  },
  {
    title: "Editorial strategy",
    body: "A publishing plan built around what you believe, not what an algorithm wants. Includes formats, cadence, and the first month of pieces written.",
  },
  {
    title: "Writing & ghostwriting",
    body: "Essays, founder letters, and long-form pieces written in your name and your register — researched, drafted, and revised until it sounds inevitable.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Elena didn't give us copy. She gave us a way of talking about ourselves that we still use in every pitch, two years later.",
    name: "Priya Raman",
    role: "Co-founder, Fern & Field",
  },
  {
    quote:
      "The rare consultant who writes beautifully and thinks like an operator. Our launch essay outperformed every ad we've ever run.",
    name: "Daniel Okafor",
    role: "CEO, Ledger & Co.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl tracking-tight">
          Elena Marsh
        </a>
        <nav className="flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline link-underline-hover hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 sm:hidden"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid items-center gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow animate-rise">Writer &amp; brand consultant</p>
          <h1 className="font-display mt-5 animate-rise-delay-1 text-5xl leading-[1.08] tracking-tight text-balance md:text-7xl">
            Words that make thoughtful companies{" "}
            <span className="italic text-accent">impossible to ignore.</span>
          </h1>
          <p className="mt-7 max-w-md animate-rise-delay-2 text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm a writer and brand consultant. I help founders and teams find
            the story they already have — then say it with clarity, restraint,
            and a little warmth.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-rise-delay-3">
            <a
              href="#contact"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              Start a conversation
            </a>
            <a
              href="#work"
              className="link-underline link-underline-hover rounded-sm px-2 py-3 text-sm font-medium"
            >
              Read selected work
            </a>
          </div>
        </div>
        <div className="animate-rise-delay-2">
          <img
            src={deskStillLife}
            alt="Manuscript pages and a fountain pen on a sunlit wooden desk"
            width={1056}
            height={1408}
            className="aspect-[3/4] w-full rounded-md border border-border/60 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-4 text-4xl tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="border-t border-border/60 bg-card/50">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Selected work"
          title="Essays and case studies"
        />
        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {WRITING.map((piece) => (
            <article key={piece.title} className="group">
              <div className="flex items-baseline justify-between gap-4">
                <p className="eyebrow text-accent">{piece.kicker}</p>
                <p className="text-xs text-muted-foreground">{piece.year}</p>
              </div>
              <h3 className="font-display mt-3 text-2xl leading-snug tracking-tight transition-colors group-hover:text-accent md:text-[1.75rem]">
                <a href="#contact" className="link-underline link-underline-hover">
                  {piece.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {piece.blurb}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {piece.pub}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <SectionHeading eyebrow="About" title="A brief biography" />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              For the past decade I've written for magazines, founded brands,
              and sat on both sides of the editor's desk. Somewhere between the
              two, I found the work I love most: helping companies say what
              they mean.
            </p>
            <p>
              My clients range from seed-stage founders to hundred-year-old
              institutions. What they share is a belief that clarity is a
              competitive advantage — and that the right sentence, in the right
              place, can change how a whole company behaves.
            </p>
            <p>
              I write a weekly letter on language and business, advise three
              clients at a time, and live in Chicago with a small dog and a
              large dictionary.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2 text-sm">
              <a href="#contact" className="link-underline link-underline-hover font-medium text-foreground">
                Weekly letter
              </a>
              <a href="#contact" className="link-underline link-underline-hover font-medium text-foreground">
                LinkedIn
              </a>
              <a href="#contact" className="link-underline link-underline-hover font-medium text-foreground">
                Speaking inquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border/60 bg-card/50">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Three ways we can work together"
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="border-t-2 border-foreground/80 pt-6">
              <p className="font-display text-3xl text-accent">0{i + 1}</p>
              <h3 className="font-display mt-3 text-2xl tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name}>
              <blockquote className="font-display text-2xl leading-snug tracking-tight text-balance md:text-[1.6rem]">
                <span className="text-accent">&ldquo;</span>
                {t.quote}
                <span className="text-accent">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t.name}</span>
                {" · "}
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="eyebrow text-primary-foreground/60">Contact</p>
        <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.1] tracking-tight text-balance md:text-6xl">
          Have something worth saying?{" "}
          <span className="italic opacity-70">Let's write it well.</span>
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm">
          <a
            href="mailto:hello@example.com"
            className="link-underline link-underline-hover font-medium"
          >
            hello@example.com
          </a>
          <a href="#top" className="link-underline link-underline-hover font-medium">
            Back to top
          </a>
        </div>
        <p className="mt-16 text-xs text-primary-foreground/50">
          © 2026 Elena Marsh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
