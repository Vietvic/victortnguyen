import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects/college-budgeting-system")({
  head: () => ({
    meta: [
      { title: "College Budgeting System — Victor Nguyen" },
      { name: "description", content: "Case study: a college budgeting website built at the U.S. Bank + Code Savvy AI Challenge, applying generative AI and design thinking to a common financial situation — plus an interactive demo of the idea." },
      { property: "og:title", content: "College Budgeting System — Victor Nguyen" },
      { property: "og:description", content: "Generative AI and design thinking applied to college budgeting at a U.S. Bank–sponsored hackathon — with a working demo you can try." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "College Budgeting System — Victor Nguyen" },
      { name: "twitter:description", content: "Generative AI and design thinking applied to college budgeting at a U.S. Bank–sponsored hackathon — with a working demo you can try." },
    ],
  }),
  component: CollegeBudgetingProject,
});

const HIGHLIGHTS = [
  "Collaborated with a team at the U.S. Bank + Code Savvy AI Challenge, a half-day hackathon focused on generative AI and design thinking.",
  "Designed a responsive budgeting website that helps college students plan for a common financial situation: choosing a school they can actually afford.",
  "Built the questionnaire flow — field of study, budget per semester, and degree type — with input validation to keep the data clean.",
  "Collected and structured user responses so the site could generate a sensible school recommendation from the answers.",
];

const DETAILS = [
  { label: "Event", value: "U.S. Bank + Code Savvy AI Challenge · Half-day AI hackathon" },
  { label: "Focus", value: "Generative AI + design thinking applied to college budgeting" },
  { label: "My role", value: "Responsive website · Questionnaire design · Input validation · Data collection" },
  { label: "Built with", value: "HTML · CSS · JavaScript" },
];

const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Input validation",
  "Questionnaire design",
  "Data collection",
  "Responsive design",
  "Design thinking",
];

// ---- Interactive demo dataset ---------------------------------------------
// Estimated resident tuition per semester, for demonstration purposes only.

type Degree = "Certificate / Associate" | "Bachelor's" | "Master's";
type Field =
  | "Business"
  | "Computer Science & IT"
  | "Healthcare & Nursing"
  | "Engineering"
  | "Education"
  | "Liberal Arts & Social Sciences";

const FIELDS: Field[] = [
  "Business",
  "Computer Science & IT",
  "Healthcare & Nursing",
  "Engineering",
  "Education",
  "Liberal Arts & Social Sciences",
];

const DEGREES: Degree[] = ["Certificate / Associate", "Bachelor's", "Master's"];

interface School {
  name: string;
  location: string;
  costPerSemester: number;
  degrees: Degree[];
  fields: Field[];
  note: string;
}

const SCHOOLS: School[] = [
  {
    name: "Minneapolis College",
    location: "Minneapolis, MN",
    costPerSemester: 3000,
    degrees: ["Certificate / Associate"],
    fields: ["Business", "Computer Science & IT", "Healthcare & Nursing", "Education", "Liberal Arts & Social Sciences"],
    note: "Two-year community college with strong transfer pathways into Minnesota state universities.",
  },
  {
    name: "St. Paul College",
    location: "St. Paul, MN",
    costPerSemester: 3100,
    degrees: ["Certificate / Associate"],
    fields: ["Business", "Computer Science & IT", "Healthcare & Nursing", "Engineering"],
    note: "Technically focused community college with hands-on labs and apprenticeship connections.",
  },
  {
    name: "Metropolitan State University",
    location: "St. Paul & Minneapolis, MN",
    costPerSemester: 4200,
    degrees: ["Bachelor's", "Master's"],
    fields: ["Business", "Computer Science & IT", "Healthcare & Nursing", "Education", "Liberal Arts & Social Sciences"],
    note: "Urban state university built for working students — evening, weekend, and online options.",
  },
  {
    name: "University of Minnesota Twin Cities",
    location: "Minneapolis & St. Paul, MN",
    costPerSemester: 7800,
    degrees: ["Bachelor's", "Master's"],
    fields: ["Business", "Computer Science & IT", "Healthcare & Nursing", "Engineering", "Education", "Liberal Arts & Social Sciences"],
    note: "Flagship public research university with the widest range of majors and research opportunities.",
  },
  {
    name: "Concordia University, St. Paul",
    location: "St. Paul, MN",
    costPerSemester: 8600,
    degrees: ["Bachelor's", "Master's"],
    fields: ["Business", "Computer Science & IT", "Healthcare & Nursing", "Education"],
    note: "Private university known for accelerated adult and graduate programs.",
  },
  {
    name: "Macalester College",
    location: "St. Paul, MN",
    costPerSemester: 14500,
    degrees: ["Bachelor's"],
    fields: ["Liberal Arts & Social Sciences", "Computer Science & IT", "Business"],
    note: "Selective liberal arts college with small classes and a strong international community.",
  },
];

const ADJACENT: Record<Degree, Degree[]> = {
  "Certificate / Associate": ["Bachelor's", "Master's"],
  "Bachelor's": ["Certificate / Associate", "Master's"],
  "Master's": ["Bachelor's", "Certificate / Associate"],
};

interface Recommendation {
  school: School;
  headline: string;
  detail: string;
  alternatives: School[];
}

function parseBudget(raw: string): number | null {
  const cleaned = raw.replace(/[$,\s]/g, "");
  if (!/^\d+(\.\d+)?$/.test(cleaned)) return null;
  const value = Math.round(Number(cleaned));
  if (value < 500 || value > 30000) return null;
  return value;
}

function recommend(field: Field, degree: Degree, budget: number): Recommendation | null {
  let pool = SCHOOLS.filter((s) => s.degrees.includes(degree) && s.fields.includes(field));
  let fallbackNote: string | null = null;

  if (pool.length === 0) {
    for (const alt of ADJACENT[degree]) {
      pool = SCHOOLS.filter((s) => s.degrees.includes(alt) && s.fields.includes(field));
      if (pool.length > 0) {
        fallbackNote = `No ${degree.toLowerCase()} program for ${field} in the demo data — this is the closest match at the ${alt.toLowerCase()} level.`;
        break;
      }
    }
  }
  if (pool.length === 0) return null;

  const within = pool.filter((s) => s.costPerSemester <= budget);
  const ranked = [...(within.length > 0 ? within : pool)].sort(
    (a, b) => (within.length > 0 ? b.costPerSemester - a.costPerSemester : a.costPerSemester - b.costPerSemester),
  );
  const best = ranked[0];

  const headline =
    within.length > 0
      ? `Fits your budget — about $${best.costPerSemester.toLocaleString()} per semester`
      : `Lowest-cost match — about $${best.costPerSemester.toLocaleString()} per semester`;

  const detail =
    within.length > 0
      ? `Estimated $${best.costPerSemester.toLocaleString()} per semester, about $${(best.costPerSemester * 2).toLocaleString()} per year — under your $${budget.toLocaleString()} target. ${best.note}`
      : `The demo data has no ${field} program under $${budget.toLocaleString()} per semester. ${best.note} Consider a higher budget or a transfer pathway starting at a community college.`;

  return {
    school: best,
    headline,
    detail: fallbackNote ? `${fallbackNote} ${detail}` : detail,
    alternatives: ranked.slice(1, 3),
  };
}

function formatMoney(value: number): string {
  return `$${value.toLocaleString()}`;
}

function CollegeBudgetingProject() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <main>
        <Hero />
        <Overview />
        <Hackathon />
        <InteractiveDemo />
        <Details />
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
        <p className="eyebrow text-signal mt-10">Case study · 06 · Product collaboration</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          College Budgeting System
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          A hackathon-built budgeting website that helps students match a school to their finances — designed with generative AI and design thinking at the U.S. Bank + Code Savvy AI Challenge. Try the interactive version below.
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
          <h2 className="font-display mt-4 text-3xl md:text-4xl">A common money problem, turned into a tool.</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed">
            The hackathon challenge was to design a creative tech solution to a financial situation people face every day. Our team picked one every student knows: figuring out which college you can actually afford. I helped design and build a responsive website that asks a student a few simple questions and recommends a school that fits their budget.
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

function Hackathon() {
  return (
    <section aria-label="About the hackathon" className="bg-card border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">The event</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">U.S. Bank + Code Savvy AI Challenge</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
              A half-day hackathon about learning generative AI and design thinking by doing. Participants got hands-on experience using AI to design a creative tech solution to a common financial situation faced by people every day — spending the day learning how generative AI and design thinking combine to brainstorm and build innovative solutions.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Our answer was the College Budgeting System: a website where a student describes their situation in three inputs and gets a school recommendation they can act on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveDemo() {
  const [field, setField] = useState<Field | "">("");
  const [degree, setDegree] = useState<Degree | "">("");
  const [budget, setBudget] = useState("");
  const [budgetError, setBudgetError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [result, setResult] = useState<Recommendation | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBudgetError(null);
    setFormError(null);

    if (!field || !degree) {
      setFormError("Please choose both a field of study and a degree type.");
      setResult(null);
      return;
    }
    const parsed = parseBudget(budget);
    if (parsed === null) {
      setBudgetError("Enter a budget between $500 and $30,000 per semester.");
      setResult(null);
      return;
    }
    setResult(recommend(field, degree, parsed));
  }

  const inputClass =
    "w-full border border-input bg-card px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent";

  return (
    <section aria-label="Interactive demo" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">Try the idea</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Answer three questions, get a school.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              A working recreation of the questionnaire flow we designed at the hackathon. Pick a field of study and degree type, enter what you can spend per semester, and the site recommends a Minnesota college — using estimated resident tuition for demonstration purposes, not real quotes.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-12 grid gap-6 md:grid-cols-3">
          <div>
            <label htmlFor="field-of-study" className="eyebrow">Field of study</label>
            <select
              id="field-of-study"
              value={field}
              onChange={(e) => setField(e.target.value as Field | "")}
              className={`${inputClass} mt-3`}
            >
              <option value="" disabled>Select a field…</option>
              {FIELDS.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="degree-type" className="eyebrow">Degree type</label>
            <select
              id="degree-type"
              value={degree}
              onChange={(e) => setDegree(e.target.value as Degree | "")}
              className={`${inputClass} mt-3`}
            >
              <option value="" disabled>Select a degree…</option>
              {DEGREES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="eyebrow">Price range per semester ($)</label>
            <input
              id="budget"
              type="text"
              inputMode="numeric"
              placeholder="e.g. 4,500"
              value={budget}
              onChange={(e) => { setBudget(e.target.value); setBudgetError(null); }}
              aria-invalid={budgetError ? "true" : undefined}
              className={`${inputClass} mt-3 ${budgetError ? "border-destructive" : ""}`}
            />
            {budgetError && <p className="mt-2 text-xs text-destructive">{budgetError}</p>}
          </div>

          {formError && <p className="text-sm text-destructive md:col-span-3">{formError}</p>}

          <div className="md:col-span-3">
            <button
              type="submit"
              className="bg-signal inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90"
            >
              <Sparkles size={16} /> Generate recommendation
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-10 border-l-4 border-accent bg-card p-6 md:p-10" role="status">
            <p className="eyebrow text-accent">Recommended college</p>
            <h3 className="font-display mt-3 text-2xl md:text-3xl">{result.school.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{result.school.location}</p>
            <p className="mt-4 text-lg font-semibold">{result.headline}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{result.detail}</p>

            {result.alternatives.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <p className="eyebrow">Other options to compare</p>
                <ul className="mt-4 space-y-3">
                  {result.alternatives.map((alt) => (
                    <li key={alt.name} className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                      <span className="font-medium">{alt.name} <span className="text-muted-foreground">· {alt.location}</span></span>
                      <span className="text-muted-foreground">≈ {formatMoney(alt.costPerSemester)} / semester</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-8 text-xs text-muted-foreground">
              Demo only — tuition figures are rough estimates for a Minnesota resident and are not offers or quotes. Always confirm costs with the school.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Details() {
  return (
    <section aria-label="Project details" className="border-b border-border">
      <div className="mx-auto grid gap-px md:grid-cols-4">
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
          <p className="eyebrow text-signal">Keep exploring</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">From hackathons to case studies — I like turning messy questions into working tools.</h2>
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
        <a href="/Victor-Nguyen-Resume.pdf" download="Victor-Nguyen-Resume.pdf" className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground">Download résumé</a>
      </div>
    </footer>
  );
}
