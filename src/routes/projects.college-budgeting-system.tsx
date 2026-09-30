import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects/college-budgeting-system")({
  head: () => ({
    meta: [
      { title: "AI College Budgeting System — Victor Nguyen" },
      { name: "description", content: "Case study: an AI college budgeting website built at the U.S. Bank + Code Savvy AI Challenge, applying generative AI and design thinking to a common financial situation — plus an interactive demo of the idea." },
      { property: "og:title", content: "AI College Budgeting System — Victor Nguyen" },
      { property: "og:description", content: "Generative AI and design thinking applied to college budgeting at a U.S. Bank–sponsored hackathon — with a working demo you can try." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI College Budgeting System — Victor Nguyen" },
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
// Estimated tuition per semester (published sticker price, rounded), for demonstration purposes only.

type Degree = "Certificate / Associate" | "Bachelor's" | "Master's";
type Field =
  | "Business"
  | "Computer Science & IT"
  | "Healthcare & Nursing"
  | "Engineering"
  | "Education"
  | "Liberal Arts & Social Sciences";
type Region = "Midwest" | "Northeast" | "South" | "West";
type Location = Region | "Any";

const FIELDS: Field[] = [
  "Business",
  "Computer Science & IT",
  "Healthcare & Nursing",
  "Engineering",
  "Education",
  "Liberal Arts & Social Sciences",
];

const DEGREES: Degree[] = ["Certificate / Associate", "Bachelor's", "Master's"];
const LOCATIONS: Location[] = ["Any", "Midwest", "Northeast", "South", "West"];

interface School {
  name: string;
  location: string;
  region: Region;
  costPerSemester: number;
  degrees: Degree[];
  fields: Field[];
  score: number; // overall reputation / outcomes score used to rank "best"
}

const DEG: Record<string, Degree> = { C: "Certificate / Associate", B: "Bachelor's", M: "Master's" };
const FLD: Record<string, Field> = {
  b: "Business", c: "Computer Science & IT", h: "Healthcare & Nursing",
  e: "Engineering", d: "Education", l: "Liberal Arts & Social Sciences",
};

const RAW: [string, string, Region, number, string, string, number][] = [
  // Midwest
  ["Minneapolis College", "Minneapolis, MN", "Midwest", 3000, "C", "bchdl", 40],
  ["St. Paul College", "St. Paul, MN", "Midwest", 3100, "C", "bche", 38],
  ["Metropolitan State University", "St. Paul, MN", "Midwest", 4200, "BM", "bchdl", 52],
  ["University of Minnesota Twin Cities", "Minneapolis, MN", "Midwest", 8000, "BM", "bchedl", 80],
  ["University of Wisconsin–Madison", "Madison, WI", "Midwest", 5800, "BM", "bchedl", 86],
  ["University of Michigan", "Ann Arbor, MI", "Midwest", 9000, "BM", "bchedl", 93],
  ["University of Illinois Urbana-Champaign", "Champaign, IL", "Midwest", 8500, "BM", "bchedl", 88],
  ["Purdue University", "West Lafayette, IN", "Midwest", 5000, "BM", "bched", 84],
  ["Northwestern University", "Evanston, IL", "Midwest", 33000, "BM", "bchedl", 96],
  ["University of Chicago", "Chicago, IL", "Midwest", 34000, "BM", "bcl", 97],
  ["Macalester College", "St. Paul, MN", "Midwest", 32000, "B", "bcl", 82],
  ["Harper College", "Palatine, IL", "Midwest", 2400, "C", "bchl", 36],
  // Northeast
  ["Massachusetts Institute of Technology", "Cambridge, MA", "Northeast", 30500, "BM", "bce", 99],
  ["Harvard University", "Cambridge, MA", "Northeast", 30000, "BM", "bchedl", 99],
  ["Columbia University", "New York, NY", "Northeast", 34500, "BM", "bchedl", 96],
  ["University of Pennsylvania", "Philadelphia, PA", "Northeast", 33000, "BM", "bchedl", 97],
  ["Cornell University", "Ithaca, NY", "Northeast", 33500, "BM", "bchedl", 95],
  ["Penn State University", "University Park, PA", "Northeast", 9500, "BM", "bchedl", 78],
  ["Rutgers University", "New Brunswick, NJ", "Northeast", 8500, "BM", "bchedl", 76],
  ["University of Massachusetts Amherst", "Amherst, MA", "Northeast", 8800, "BM", "bchedl", 79],
  ["CUNY Baruch College", "New York, NY", "Northeast", 3700, "BM", "bl", 70],
  ["Bunker Hill Community College", "Boston, MA", "Northeast", 3200, "C", "bchl", 35],
  // South
  ["Georgia Institute of Technology", "Atlanta, GA", "South", 6200, "BM", "bce", 92],
  ["University of Texas at Austin", "Austin, TX", "South", 5700, "BM", "bchedl", 90],
  ["University of Florida", "Gainesville, FL", "South", 3200, "BM", "bchedl", 87],
  ["University of North Carolina at Chapel Hill", "Chapel Hill, NC", "South", 4400, "BM", "bchdl", 89],
  ["University of Virginia", "Charlottesville, VA", "South", 9500, "BM", "bchedl", 91],
  ["Duke University", "Durham, NC", "South", 32000, "BM", "bchel", 97],
  ["Vanderbilt University", "Nashville, TN", "South", 31500, "BM", "bchedl", 94],
  ["Texas A&M University", "College Station, TX", "South", 6400, "BM", "bchedl", 82],
  ["Austin Community College", "Austin, TX", "South", 1400, "C", "bchel", 37],
  ["Valencia College", "Orlando, FL", "South", 1600, "C", "bchl", 42],
  // West
  ["Stanford University", "Stanford, CA", "West", 31000, "BM", "bchedl", 99],
  ["University of California, Berkeley", "Berkeley, CA", "West", 7600, "BM", "bcedl", 95],
  ["University of California, Los Angeles", "Los Angeles, CA", "West", 7200, "BM", "bchedl", 95],
  ["University of Southern California", "Los Angeles, CA", "West", 34000, "BM", "bchedl", 92],
  ["University of Washington", "Seattle, WA", "West", 6300, "BM", "bchedl", 90],
  ["California Institute of Technology", "Pasadena, CA", "West", 32000, "BM", "ce", 98],
  ["Arizona State University", "Tempe, AZ", "West", 6200, "BM", "bchedl", 76],
  ["University of Colorado Boulder", "Boulder, CO", "West", 6800, "BM", "bcedl", 80],
  ["De Anza College", "Cupertino, CA", "West", 800, "C", "bchl", 45],
  ["Santa Monica College", "Santa Monica, CA", "West", 700, "C", "bchl", 44],
];

const SCHOOLS: School[] = RAW.map(([name, location, region, costPerSemester, d, f, score]) => ({
  name, location, region, costPerSemester, score,
  degrees: d.split("").map((k) => DEG[k]!).filter(Boolean),
  fields: f.split("").map((k) => FLD[k]!).filter(Boolean),
}));

interface RankedSchool extends School { overBudget: boolean }

interface Recommendation {
  school: RankedSchool;
  headline: string;
  detail: string;
  alternatives: RankedSchool[];
}

function parseBudget(raw: string): number | null {
  const cleaned = raw.replace(/[$,\s]/g, "");
  if (!/^\d+(\.\d+)?$/.test(cleaned)) return null;
  const value = Math.round(Number(cleaned));
  if (value < 500 || value > 100000) return null;
  return value;
}

function recommend(field: Field, degree: Degree, location: Location, budget: number): Recommendation | null {
  const pool = SCHOOLS.filter(
    (s) => s.degrees.includes(degree) && s.fields.includes(field) && (location === "Any" || s.region === location),
  );
  if (pool.length === 0) return null;

  const within: RankedSchool[] = pool
    .filter((s) => s.costPerSemester <= budget)
    .sort((a, b) => b.score - a.score || a.costPerSemester - b.costPerSemester)
    .map((s) => ({ ...s, overBudget: false }));
  const over: RankedSchool[] = pool
    .filter((s) => s.costPerSemester > budget)
    .sort((a, b) => a.costPerSemester - b.costPerSemester)
    .map((s) => ({ ...s, overBudget: true }));

  const list = [...within, ...over].slice(0, 10);
  const best = list[0];
  if (!best) return null;
  const where = location === "Any" ? "anywhere in the U.S." : `in the ${location}`;

  const headline = best.overBudget
    ? `Closest match — about ${formatMoney(best.costPerSemester)} per semester`
    : `Best fit within your budget — about ${formatMoney(best.costPerSemester)} per semester`;
  const detail = best.overBudget
    ? `No ${degree.toLowerCase()} program in ${field} ${where} fits under ${formatMoney(budget)} per semester in the demo data, so this is the lowest-cost option. Consider raising your budget or starting at a community college.`
    : `The highest-rated ${degree.toLowerCase()} option for ${field} ${where} that fits under your ${formatMoney(budget)} target — roughly ${formatMoney(best.costPerSemester * 2)} per year in tuition.`;

  return { school: best, headline, detail, alternatives: list.slice(1) };
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
        <InteractiveDemo />
        <Overview />
        <Hackathon />
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
        <p className="eyebrow text-signal mt-10">Case study · 04 · Product collaboration</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          AI College Budgeting System
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
            <h2 className="font-display text-4xl leading-tight md:text-5xl">U.S. Bank + Code Savvy AI Challenge</h2>
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
  const [location, setLocation] = useState<Location>("Any");
  const [budget, setBudget] = useState("");
  const [budgetError, setBudgetError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [result, setResult] = useState<Recommendation | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
      setBudgetError("Enter a budget between $500 and $100,000 per semester.");
      setResult(null);
      return;
    }
    setSubmitted(true);
    setResult(recommend(field, degree, location, parsed));
  }

  const inputClass =
    "w-full border border-input bg-card px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent";

  return (
    <section aria-label="Interactive demo" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">Try the idea</p>
          <div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">Answer four questions, get a school.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              A working recreation of the questionnaire flow we designed at the hackathon. Pick a field of study and degree type, enter what you can spend per semester, and the site recommends the best-rated U.S. college that fits, plus other options to compare — using estimated tuition for demonstration purposes, not real quotes.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
            <label htmlFor="location" className="eyebrow">Location</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value as Location)}
              className={`${inputClass} mt-3`}
            >
              {LOCATIONS.map((l) => <option key={l} value={l}>{l === "Any" ? "Any location" : l}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="eyebrow">Price range per semester ($)</label>
            <input
              id="budget"
              type="text"
              inputMode="numeric"
              placeholder="e.g. 10,000"
              value={budget}
              onChange={(e) => { setBudget(e.target.value); setBudgetError(null); }}
              aria-invalid={budgetError ? "true" : undefined}
              className={`${inputClass} mt-3 ${budgetError ? "border-destructive" : ""}`}
            />
            {budgetError && <p className="mt-2 text-xs text-destructive">{budgetError}</p>}
          </div>

          {formError && <p className="text-sm text-destructive md:col-span-2 lg:col-span-4">{formError}</p>}

          <div className="md:col-span-2 lg:col-span-4">
            <button
              type="submit"
              className="bg-signal inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-primary transition-opacity hover:opacity-90"
            >
              <Sparkles size={16} /> Generate recommendation
            </button>
          </div>
        </form>

        {submitted && !result && (
          <p className="mt-10 text-sm text-muted-foreground" role="status">No colleges in the demo data match that field, degree, and location. Try "Any location" or a different degree type.</p>
        )}

        {result && (
          <div className="mt-10 border-l-4 border-accent bg-card p-6 md:p-10" role="status">
            <p className="eyebrow text-accent">Recommended college</p>
            <h3 className="font-display mt-3 text-2xl md:text-3xl">{result.school.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{result.school.location}</p>
            <p className="mt-4 text-lg font-semibold">{result.headline}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{result.detail}</p>

            {result.alternatives.length > 0 && (
              <div className="mt-8 border-t border-border pt-6">
                <p className="eyebrow">Other colleges to compare</p>
                <ol className="mt-4 space-y-3">
                  {result.alternatives.map((alt) => (
                    <li key={alt.name} className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                      <span className="font-medium">{alt.name} <span className="text-muted-foreground">· {alt.location}</span></span>
                      <span className={alt.overBudget ? "text-destructive" : "text-muted-foreground"}>≈ {formatMoney(alt.costPerSemester)} / semester{alt.overBudget ? " · over budget" : ""}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <p className="mt-8 text-xs text-muted-foreground">
              Demo only — tuition figures are rough estimates (in-state for public schools) and are not offers or quotes. Always confirm costs with the school.
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
