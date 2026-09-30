import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Download, Mail } from "lucide-react";
import class1 from "@/assets/frayeo-class-1.jpg.asset.json";
import class2 from "@/assets/frayeo-class-2.jpg.asset.json";
import class3 from "@/assets/frayeo-class-3.jpg.asset.json";
import poster1 from "@/assets/frayeo-poster-1.png.asset.json";
import poster2 from "@/assets/frayeo-poster-2.png.asset.json";

export const Route = createFileRoute("/projects/frayeo-digital-literacy")({
  head: () => ({
    meta: [
      { title: "FRAYEO Digital Literacy Program — Victor Nguyen" },
      { name: "description", content: "Case study: a four-week digital literacy program built from the ground up with Northstar Digital Literacy and CareerForce — curriculum, hands-on training, and job fairs, still running today." },
      { property: "og:title", content: "FRAYEO Digital Literacy Program — Victor Nguyen" },
      { property: "og:description", content: "A four-week community technology program launched with Northstar and CareerForce: curriculum design, hands-on training, job fairs, and workforce partnerships." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FRAYEO Digital Literacy Program — Victor Nguyen" },
      { name: "twitter:description", content: "A four-week community technology program launched with Northstar and CareerForce: curriculum design, hands-on training, job fairs, and workforce partnerships." },
    ],
  }),
  component: FrayeoProject,
});

const HIGHLIGHTS = [
  "Created and launched the four-week Digital Literacy Program from the ground up, developing the full curriculum.",
  "Partnered with Northstar Digital Literacy and CareerForce to launch the program and connect participants to certifications and career resources.",
  "Delivered hands-on training in computers, online tools, cybersecurity, AI, and job-search technology.",
  "Structured the program across beginner, intermediate, and advanced learning levels so participants could enter at the right point.",
  "Integrated Northstar concepts with current workplace technology, cybersecurity, AI, and career-readiness topics.",
  "Organized job fairs and workforce initiatives by coordinating employers, community partners, event logistics, participant support, outreach, documentation, and follow-up.",
];

const DETAILS = [
  { label: "Organization", value: "FRAYEO · Minneapolis, MN" },
  { label: "Role", value: "Workforce & Digital Literacy Coordinator (Contract)" },
  { label: "Timeline", value: "Launched 2026 · Still running" },
  { label: "Format", value: "Four-week program · Beginner, intermediate, and advanced levels" },
];

const PARTNERS = [
  {
    name: "Northstar Digital Literacy",
    body: "I built the curriculum around the Northstar Digital Literacy standards, so participants practice the exact skills the assessments measure — computer basics, internet skills, email, and everyday software — and can earn recognized certificates for what they learn.",
  },
  {
    name: "CareerForce · Minnesota's career resource",
    body: "I worked with the Minneapolis CareerForce centers to launch the class — coordinating outreach, registration, and class logistics, and connecting participants to career services and employers. The flyers we created together ran across the North and South Minneapolis locations.",
  },
];

const PHOTOS = [
  { src: class1, alt: "Victor teaching the digital literacy class in a CareerForce computer lab, with participants following along on laptops", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { src: class3, alt: "Participants working hands-on during a digital literacy session", span: "md:col-span-5", ratio: "aspect-[4/5] md:aspect-auto" },
  { src: class2, alt: "Framed certificates of completion prepared for program graduates", span: "md:col-span-12", ratio: "aspect-[16/9]" },
];

const TAGS = [
  "Program planning",
  "Curriculum design",
  "Training delivery",
  "Community partnerships",
  "Event coordination",
  "Documentation",
];

function FrayeoProject() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <Overview />
        <Partners />
        <Details />
        <Gallery />
        <Posters />
        <Tags />
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
        <a href={`mailto:${"victortnguyen18@gmail.com"}`} className="border border-primary-foreground/40 px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-primary-foreground hover:text-primary md:text-sm">Contact</a>
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
        <p className="eyebrow text-signal mt-10">Case study · 01 · Systems implementation</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          FRAYEO Digital Literacy Program
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          A four-week community technology program built from the ground up with Northstar Digital Literacy and CareerForce — taking adults with little technology experience to confident, job-ready computer use. Still running today.
        </p>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_2fr] md:px-8 md:py-24">
        <div>
          <p className="eyebrow text-accent">What I did</p>
          <h2 className="font-display mt-4 text-3xl md:text-4xl">From empty curriculum to running program.</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed">
            FRAYEO, a Minneapolis nonprofit, needed a way to help community members build the technology skills employers expect. I designed and launched the Digital Literacy Program from scratch — writing the curriculum, organizing enrollment and schedules, and delivering the training myself.
          </p>
          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                <span className="bg-signal mt-2 h-1.5 w-1.5 shrink-0" />{point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section aria-label="Launch partners" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">Launch partners</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Launched with Northstar and CareerForce.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              I didn't build this alone. I worked with Northstar Digital Literacy and CareerForce to shape, promote, and launch the class — and the program is still running, welcoming new participants as earlier cohorts complete their certificates.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {PARTNERS.map((partner, index) => (
            <div key={partner.name} className={`border-b border-border py-9 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
              <h3 className="font-display text-xl">{partner.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{partner.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Details() {
  return (
    <section aria-label="Program details" className="bg-card">
      <div className="mx-auto grid max-w-6xl gap-px border-b border-border md:grid-cols-4">
        {DETAILS.map((detail) => (
          <div key={detail.label} className="border-b border-border px-5 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
            <p className="eyebrow">{detail.label}</p>
            <p className="mt-2 text-sm font-medium leading-relaxed">{detail.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section aria-label="Photos from the program" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">From the classroom</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Hands-on training, real outcomes.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Weekly sessions in the CareerForce computer labs — and framed certificates of completion for every graduate.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {PHOTOS.map((photo) => (
            <figure key={photo.src.url} className={`${photo.span} overflow-hidden`}>
              <img src={photo.src.url} alt={photo.alt} loading="lazy" className={`h-full w-full ${photo.ratio} object-cover`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Posters() {
  return (
    <section aria-label="Program outreach posters" className="bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">Outreach</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">The flyers that filled the class.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              I designed the recruitment flyers and interest form used to enroll participants, distributed with our CareerForce and Northstar partners — multi-language support included.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[poster1, poster2].map((poster, index) => (
            <figure key={poster.url} className="overflow-hidden border border-border bg-background">
              <img src={poster.url} alt={index === 0 ? "Digital Literacy Training flyer listing computer basics, internet skills, and social media basics, with FRAYEO, CareerForce, and Northstar logos" : "Free Digital Literacy Training flyer with class topics, registration form, and Minneapolis CareerForce center locations"} loading="lazy" className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tags() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <p className="eyebrow text-accent">Skills applied</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span key={tag} className="border border-border px-3 py-1.5 text-xs text-muted-foreground">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextStep() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[2fr_1fr] md:items-center md:px-8 md:py-20">
        <div>
          <p className="eyebrow text-signal">Want the full picture?</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">This program sat alongside my wider work at FRAYEO — systems, partnerships, and operations.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="bg-signal inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90">All projects <ArrowUpRight size={16} /></Link>
          <a href={`mailto:${"victortnguyen18@gmail.com"}`} className="inline-flex items-center gap-2 border border-primary-foreground/35 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground hover:text-primary"><Mail size={16} /> Contact me</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-foreground/20 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-primary-foreground/50 md:px-8">
        <p>© 2026 Victor Nguyen</p>
        <a href="/Victor-Nguyen-Resume.pdf" download="Victor-Nguyen-Resume.pdf" className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground">Download résumé <Download size={14} /></a>
      </div>
    </footer>
  );
}
