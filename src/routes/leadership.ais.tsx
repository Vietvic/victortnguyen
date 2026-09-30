import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

export const Route = createFileRoute("/leadership/ais")({
  head: () => ({
    meta: [
      { title: "AIS Student Chapter Leadership — Victor Nguyen" },
      { name: "description", content: "Victor Nguyen’s leadership and responsibilities as Vice President of the Association for Information Systems Student Chapter at Metropolitan State University." },
      { property: "og:title", content: "AIS Student Chapter Leadership — Victor Nguyen" },
      { property: "og:description", content: "Professional development, networking, community building, and chapter leadership at Metropolitan State University." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AIS Student Chapter Leadership — Victor Nguyen" },
      { name: "twitter:description", content: "Professional development, networking, community building, and chapter leadership at Metropolitan State University." },
    ],
  }),
  component: AisLeadershipPage,
});

const OBJECTIVES = [
  {
    number: "01",
    title: "Information systems excellence",
    body: "Encourage students to pursue excellence in information systems and connect what they learn with the profession.",
  },
  {
    number: "02",
    title: "Career and technology knowledge",
    body: "Give members access to information about information systems careers, emerging technology, and professional opportunities.",
  },
  {
    number: "03",
    title: "Professional connections",
    body: "Create networking opportunities for Metro State students who are interested in information systems.",
  },
];

const RESPONSIBILITIES = [
  "Implement and manage chapter activities and services developed with the President.",
  "Maintain regular communication with the President and step into the role when needed.",
  "Collaborate with the executive board on chapter goals, projects, workshops, networking events, and professional-development activities.",
  "Support member engagement, stakeholder communication, and opportunities that connect students with the information systems community.",
];

function AisLeadershipPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Responsibilities />
        <Links />
        <NextStep />
      </main>
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link to="/" className="font-display text-lg">VN<span className="text-signal">.</span></Link>
        <a href="mailto:victortnguyen18@gmail.com" className="border border-primary-foreground/40 px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-primary-foreground hover:text-primary md:text-sm">Contact</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-primary-foreground/70 transition-opacity hover:opacity-80 md:text-sm">
          <ArrowLeft size={15} /> Back to portfolio
        </Link>
        <p className="eyebrow text-signal mt-10">Leadership · Association for Information Systems</p>
        <h1 className="font-display mt-4 max-w-5xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          Metropolitan State University AIS Student Chapter
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          Building a student community around information systems, professional growth, technology, and meaningful connections.
        </p>
        <div className="mt-10 flex flex-wrap gap-8 border-t border-primary-foreground/20 pt-7">
          <div><p className="eyebrow text-primary-foreground/55">My role</p><p className="mt-2 font-display text-xl">Vice President</p></div>
          <div><p className="eyebrow text-primary-foreground/55">Chapter</p><p className="mt-2 font-display text-xl">Metropolitan State University</p></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_2fr] md:px-8 md:py-24">
        <div><p className="eyebrow text-accent">About the organization</p><h2 className="font-display mt-4 text-3xl md:text-4xl">A local chapter of a global IS community.</h2></div>
        <div className="space-y-5 text-lg leading-relaxed">
          <p>The Association for Information Systems connects information systems researchers, students, educators, and practitioners around the world to advance knowledge and excellence in the field.</p>
          <p className="text-muted-foreground">The Metro State chapter brings that mission to campus. Its bylaws define a focus on professional development, social networking, community development, career knowledge, and the practical use of information systems.</p>
          <a href="https://aisnet.org/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-opacity hover:opacity-75">Visit the Association for Information Systems <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function Objectives() {
  return (
    <section className="bg-card border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]"><p className="eyebrow text-accent">Chapter objectives</p><h2 className="font-display text-3xl md:text-4xl">Helping students learn, connect, and grow.</h2></div>
        <div className="grid md:grid-cols-3">
          {OBJECTIVES.map((objective, index) => (
            <article key={objective.number} className={`border-b border-border py-9 md:border-b-0 md:px-7 ${index < OBJECTIVES.length - 1 ? "md:border-r" : ""} ${index === 0 ? "md:pl-0" : ""} ${index === OBJECTIVES.length - 1 ? "md:pr-0" : ""}`}>
              <span className="font-display text-3xl text-signal">{objective.number}</span>
              <h3 className="font-display mt-6 text-xl">{objective.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{objective.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Responsibilities() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_2fr] md:px-8 md:py-24">
        <div><p className="eyebrow text-accent">My responsibilities</p><h2 className="font-display mt-4 text-3xl md:text-4xl">Turning chapter goals into active programs.</h2></div>
        <div>
          <p className="text-lg leading-relaxed">As Vice President, I help carry plans from the executive board into the chapter’s activities and services while supporting continuity in its leadership.</p>
          <ul className="mt-8 space-y-4">
            {RESPONSIBILITIES.map((responsibility) => <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"><span className="bg-signal mt-2 h-1.5 w-1.5 shrink-0" />{responsibility}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Links() {
  const links = [
    { label: "Official chapter page", title: "Metro State AIS Student Chapter", body: "View the chapter’s official presence through Student Life & Leadership Development.", href: "https://engage.metrostate.edu/organization/aisstudentchapter" },
    { label: "Chapter news", title: "National AI win and expanded student opportunities", body: "Read The Metropolitan’s story about the chapter’s progress and growing opportunities for students.", href: "https://themetropolitan.metrostate.edu/after-ey-sponsored-national-ai-win-metro-state-ais-chapter-expands-student-opportunities/" },
  ];
  return (
    <section className="bg-card border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow text-accent">Explore the chapter</p>
        <div className="mt-8 grid md:grid-cols-2">
          {links.map((item, index) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className={`group border-y border-border py-8 md:px-8 ${index === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}><p className="eyebrow">{item.label}</p><div className="mt-4 flex items-start justify-between gap-5"><div><h3 className="font-display text-xl md:text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p></div><ArrowUpRight className="shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} /></div></a>)}
        </div>
      </div>
    </section>
  );
}

function NextStep() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[2fr_1fr] md:items-center md:px-8 md:py-20">
        <div><p className="eyebrow text-signal">Leadership in practice</p><h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">Bringing people, technology, and professional opportunity together.</h2></div>
        <div className="flex flex-wrap gap-3"><Link to="/" className="bg-signal inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90">View portfolio <ArrowUpRight size={16} /></Link><a href="mailto:victortnguyen18@gmail.com" className="inline-flex items-center gap-2 border border-primary-foreground/35 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"><Mail size={16} /> Contact me</a></div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="bg-primary border-t border-primary-foreground/20 text-primary-foreground"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-primary-foreground/50 md:px-8"><p>© 2026 Victor Nguyen</p><a href="/Victor-Nguyen-Resume.pdf" download="Victor-Nguyen-Resume.pdf" className="transition-colors hover:text-primary-foreground">Download résumé</a></div></footer>;
}