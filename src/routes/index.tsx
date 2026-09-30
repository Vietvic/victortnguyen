import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import type React from "react";
import misWorkspace from "@/assets/mis-workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victor Nguyen — Management Information Systems" },
      { name: "description", content: "Victor Nguyen is an MIS professional in Minnesota with experience across systems administration, business operations, data, cybersecurity, and program management." },
      { property: "og:title", content: "Victor Nguyen — Management Information Systems" },
      { property: "og:description", content: "Systems, operations, data, and cybersecurity experience focused on practical business outcomes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Victor Nguyen — Management Information Systems" },
      { name: "twitter:description", content: "Systems, operations, data, and cybersecurity experience focused on practical business outcomes." },
    ],
  }),
  component: Index,
});

const EXPERIENCE = [
  {
    dates: "2026 — Present",
    role: "Programs Manager",
    company: "FRAYEO · Volunteer",
    summary: "Coordinate workforce development, digital literacy, career events, and community programs across partners, participants, and internal teams.",
    points: [
      "Manage schedules, documentation, participant information, follow-up, and project deliverables.",
      "Implemented Monday.com, Google Calendar, database workflows, and online scheduling to improve organization and capacity.",
      "Support information systems, website and database activities, and operational improvements.",
    ],
  },
  {
    dates: "2026",
    role: "Workforce & Digital Literacy Coordinator",
    company: "FRAYEO · Contract",
    summary: "Designed and launched a four-week technology program with beginner, intermediate, and advanced learning levels.",
    points: [
      "Delivered practical training in computer skills, cybersecurity, AI tools, job-search technology, and productivity software.",
      "Coordinated outreach, enrollment, schedules, materials, job fairs, and workforce partnerships.",
    ],
  },
  {
    dates: "2024 — 2026",
    role: "Operations / Systems Administrator",
    company: "Stauer",
    summary: "Resolved technical and operational issues across CRM, database, payment, and business workflows.",
    points: [
      "Maintained Maximizer CRM and Hyperion data and produced Excel and Hyperion reports.",
      "Collaborated with IT, sales, customer service, and vendors to document issues and improve workflows.",
    ],
  },
  {
    dates: "2020 — 2024",
    role: "Manager",
    company: "Nails & Spa",
    summary: "Managed daily operations in a fast-paced service business, balancing staff, customers, vendors, inventory, schedules, and finances.",
    points: [],
  },
];

const PROJECTS: { number: string; category: string; title: string; body: string; tools: string[]; href?: string }[] = [
  { number: "01", category: "Systems implementation", title: "FRAYEO Digital Literacy Program", body: "Planned and launched a four-week community technology program with Northstar Digital Literacy and CareerForce — still running today. Coordinated curriculum, schedules, participants, materials, classroom support, and follow-up across beginner, intermediate, and advanced levels.", tools: ["Program planning", "Partnerships", "Training"], href: "/projects/frayeo-digital-literacy" },
  { number: "02", category: "Risk & security", title: "Medical Devices Risk Assessment", body: "Completed a NIST Cybersecurity Framework risk assessment for a simulated medical-device company — reviewing 108 controls, scoring every risk by impact and likelihood, and pairing each of the 16 above-threshold risks with a costed recommendation.", tools: ["NIST CSF", "Risk assessment", "Controls", "Documentation"], href: "/projects/medical-device-risk-assessment" },
  { number: "03", category: "Security assessment", title: "DataKing Penetration Test", body: "Conducted a structured external security assessment, identified weaknesses including password and authentication gaps, and documented remediation recommendations.", tools: ["NIST SP 800-115", "OWASP", "Vulnerability scanning"], href: "/projects/dataking-security-assessment" },
  { number: "04", category: "Product collaboration", title: "AI College Budgeting System", body: "Collaborated at the U.S. Bank + Code Savvy AI Challenge on a responsive budgeting website for college students, including questionnaire design, input validation, and data collection. Try the interactive demo on the project page.", tools: ["HTML", "CSS", "JavaScript", "Validation"], href: "/projects/college-budgeting-system" },
];

const SKILLS = [
  { title: "Information systems & data", items: "Microsoft Excel · Google Workspace · Monday.com · Maximizer CRM · Hyperion · ZOHO · SQL · Database management · Reporting" },
  { title: "Projects & operations", items: "Project coordination · Program management · Requirements analysis · Process improvement · Stakeholder management · Documentation · Risk management" },
  { title: "Cybersecurity & infrastructure", items: "NIST frameworks · Risk assessment · Wireshark · Nessus · OpenVAS · Snort · Linux · Windows Server · Networking · SSH" },
  { title: "Development", items: "Python · Java · C · SQL · HTML/CSS/JavaScript · Shell scripting · SpringToolSuite · Android Studio" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <ProfileStrip />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-primary-foreground/15 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="font-display text-lg">VN<span className="text-signal">.</span></a>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-xs font-semibold md:gap-8 md:text-sm">
          <a href="#experience" className="hidden transition-opacity hover:opacity-70 sm:block">Experience</a>
          <a href="#projects" className="hidden transition-opacity hover:opacity-70 sm:block">Projects</a>
          <a href="#skills" className="hidden transition-opacity hover:opacity-70 sm:block">Skills</a>
          <a href={`mailto:${"victortnguyen18@gmail.com"}`} className="border border-primary-foreground/40 px-4 py-2.5 transition-colors hover:bg-primary-foreground hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[680px] items-end overflow-hidden bg-primary text-primary-foreground md:min-h-[760px]">
      <img src={misWorkspace} alt="Information systems workspace with process maps, network equipment, and data dashboards" width={1600} height={1000} className="absolute inset-0 size-full object-cover object-[65%_center]" />
      <div className="bg-hero-scrim absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-36 md:px-8 md:pb-20">
        <div className="max-w-3xl">
          <div className="animate-rise mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-normal text-primary-foreground/75">
            <span className="bg-signal h-2 w-2" />
            Twin Cities, Minnesota
            <span className="text-primary-foreground/35">/</span>
            U.S. Citizen
          </div>
          <h1 className="font-display animate-rise-delay-1 text-5xl leading-[1.04] sm:text-6xl md:text-7xl lg:text-8xl">
            Victor Nguyen
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-2xl">
            Connecting systems, data, and people to make organizations work better.
          </p>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/65 md:text-base">
            Management Information Systems professional with experience across systems administration, business operations, cybersecurity, and program delivery.
          </p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="bg-signal inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90">View selected projects <ArrowDown size={16} /></a>
            <a href="/Victor-Nguyen-Resume.pdf" download="Victor-Nguyen-Resume.pdf" onClick={downloadResume} className="inline-flex items-center gap-2 border border-primary-foreground/35 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary">Résumé <Download size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileStrip() {
  return (
    <section aria-label="Professional profile" className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl md:grid-cols-3">
        <div className="border-b border-border px-5 py-8 md:border-b-0 md:border-r md:px-8"><p className="eyebrow">Current study</p><p className="mt-2 font-display text-lg">M.S. Management Information Systems</p><p className="mt-1 text-sm text-muted-foreground">Metropolitan State University · 4.0 GPA</p></div>
        <div className="border-b border-border px-5 py-8 md:border-b-0 md:border-r md:px-8"><p className="eyebrow">Completed degree</p><p className="mt-2 font-display text-lg">B.S. Cybersecurity</p><p className="mt-1 text-sm text-muted-foreground">Metropolitan State University · 2024 · 3.6 GPA</p></div>
        <Link to="/leadership/ais" className="group px-5 py-8 md:px-8"><p className="eyebrow">Leadership</p><p className="mt-2 flex items-center justify-between gap-3 font-display text-lg">Vice President, AIS <ArrowUpRight className="shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={17} /></p><p className="mt-1 text-sm text-muted-foreground">Association for Information Systems · Metropolitan State University Chapter</p></Link>
      </div>
    </section>
  );
}

function SectionIntro({ label, title, text }: { label: string; title: string; text: string }) {
  return <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]"><p className="eyebrow text-accent">{label}</p><div><h2 className="font-display text-3xl md:text-5xl">{title}</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{text}</p></div></div>;
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionIntro label="Experience" title="Systems thinking in practice." text="A progression from hands-on business operations to technology-supported workflows, cross-functional systems work, and program leadership." />
        <div>
          {EXPERIENCE.map((item) => <article key={`${item.role}-${item.company}`} className="grid gap-5 border-b border-border py-10 md:grid-cols-[1fr_2fr]">
            <div><p className="text-sm font-semibold text-accent">{item.dates}</p><p className="mt-2 text-sm text-muted-foreground">{item.company}</p></div>
            <div><h3 className="font-display text-2xl">{item.role}</h3><p className="mt-3 leading-relaxed">{item.summary}</p>{item.points.length > 0 && <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">{item.points.map((point) => <li key={point} className="flex gap-3"><span className="bg-signal mt-2 h-1.5 w-1.5 shrink-0" />{point}</li>)}</ul>}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 border-b border-primary-foreground/20 pb-10 md:grid-cols-[1fr_2fr]"><p className="eyebrow text-signal">Selected projects</p><div><h2 className="font-display text-3xl md:text-5xl">Built, assessed, and improved.</h2><p className="mt-4 max-w-2xl leading-relaxed text-primary-foreground/65">Coursework and community initiatives that show how I approach information systems: understand the need, organize the work, and deliver a usable result.</p></div></div>
        <div className="grid md:grid-cols-2">
          {PROJECTS.map((project, index) => <article key={project.number} className={`border-b border-primary-foreground/20 py-10 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
            <Link to={project.href ?? "/projects/frayeo-digital-literacy"} className="group block" disabled={!project.href}>
              <div className="flex items-center justify-between"><span className="font-display text-3xl text-signal">{project.number}</span><span className="text-xs font-semibold uppercase text-primary-foreground/50">{project.category}</span></div>
              <h3 className="font-display mt-8 text-2xl">{project.title}</h3><p className="mt-4 text-sm leading-relaxed text-primary-foreground/65">{project.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="border border-primary-foreground/20 px-2.5 py-1 text-xs text-primary-foreground/70">{tool}</span>)}</div>
              <span className={`mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide transition-opacity group-hover:opacity-80 ${project.href ? "text-signal" : "text-primary-foreground/0"}`}>View project <ArrowUpRight size={14} /></span>
            </Link>
          </article>)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionIntro label="Capabilities" title="A broad technical toolkit." text="Comfortable moving between business needs, structured data, operational systems, technical teams, and the people who rely on them." />
        <div className="grid md:grid-cols-2">{SKILLS.map((skill, index) => <div key={skill.title} className={`border-b border-border py-9 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}><h3 className="font-display text-xl">{skill.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{skill.items}</p></div>)}</div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[1fr_2fr] md:px-8 md:py-28">
        <div><p className="eyebrow text-accent">Education & leadership</p><h2 className="font-display mt-5 text-3xl md:text-4xl">Learning with purpose.</h2></div>
        <div className="space-y-9">
          <div className="border-l-4 border-accent pl-6"><p className="text-sm font-semibold text-accent">Current · GPA 4.0</p><h3 className="font-display mt-2 text-2xl">M.S. Management Information Systems</h3><p className="mt-1 text-muted-foreground">Metropolitan State University</p></div>
          <div className="border-l-4 border-border pl-6"><p className="text-sm font-semibold text-muted-foreground">2024 · GPA 3.6</p><h3 className="font-display mt-2 text-2xl">B.S. Cybersecurity</h3><p className="mt-1 text-muted-foreground">Metropolitan State University</p></div>
          <div className="border-t border-border pt-8"><p className="text-sm font-semibold text-accent">Vice President · Current</p><h3 className="font-display mt-2 text-xl">Association for Information Systems — Metropolitan State University Chapter</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Collaborate with the executive board to plan projects, workshops, networking events, professional-development activities, member engagement, and stakeholder communication.</p><Link to="/leadership/ais" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-accent transition-opacity hover:opacity-75">View leadership page <ArrowUpRight size={14} /></Link></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
          <div><p className="eyebrow text-signal">Let’s connect</p><h2 className="font-display mt-5 max-w-3xl text-4xl leading-tight md:text-6xl">Looking for an MIS professional who understands both technology and operations?</h2></div>
          <div className="space-y-4 text-sm"><a href="mailto:victortnguyen18@gmail.com" className="flex items-center gap-3 border-b border-primary-foreground/20 pb-4 transition-opacity hover:opacity-70"><Mail size={18} />victortnguyen18@gmail.com <ArrowUpRight className="ml-auto" size={16} /></a><a href="tel:+16512026997" className="flex items-center gap-3 border-b border-primary-foreground/20 pb-4 transition-opacity hover:opacity-70">(651) 202-6997 <ArrowUpRight className="ml-auto" size={16} /></a><p className="flex items-center gap-3 text-primary-foreground/60"><MapPin size={18} />Twin Cities Area, MN</p></div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/50"><p>© 2026 Victor Nguyen</p><a href="/Victor-Nguyen-Resume.pdf" download="Victor-Nguyen-Resume.pdf" onClick={downloadResume} className="inline-flex items-center gap-2 hover:text-primary-foreground">Download résumé <Download size={14} /></a></div>
      </div>
    </footer>
  );
}

async function downloadResume(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  try {
    const res = await fetch("/Victor-Nguyen-Resume.pdf", { credentials: "include" });
    if (!res.ok) throw new Error();
    const url = URL.createObjectURL(await res.blob());
    const a = document.createElement("a");
    a.href = url;
    a.download = "Victor-Nguyen-Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch {
    window.location.href = "/Victor-Nguyen-Resume.pdf";
  }
}
