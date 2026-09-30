import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

export const Route = createFileRoute("/projects/medical-device-risk-assessment")({
  head: () => ({
    meta: [
      { title: "Medical Devices Risk Assessment — Victor Nguyen" },
      { name: "description", content: "Case study: a NIST Cybersecurity Framework risk assessment for a simulated medical-device company — 108 controls reviewed, impact and likelihood scored, and every above-threshold risk paired with a costed recommendation." },
      { property: "og:title", content: "Medical Devices Risk Assessment — Victor Nguyen" },
      { property: "og:description", content: "A structured NIST CSF risk assessment of a simulated medical-device company: 108 controls, impact × likelihood scoring, and 16 costed remediation recommendations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Devices Risk Assessment — Victor Nguyen" },
      { name: "twitter:description", content: "A structured NIST CSF risk assessment of a simulated medical-device company: 108 controls, impact × likelihood scoring, and 16 costed remediation recommendations." },
    ],
  }),
  component: MedTechRiskProject,
});

const HIGHLIGHTS = [
  "Completed a full information security risk assessment for MedTech Dynamics, a simulated medical-device company, structured entirely around the NIST Cybersecurity Framework.",
  "Reviewed 108 controls across all five NIST CSF functions — Identify, Protect, Detect, Respond, and Recover — working through control questions, respondent answers, and documentary evidence for each.",
  "Identified the vulnerabilities behind each control and the threat events that could exploit them, along with any compensating controls already in place.",
  "Scored every applicable control on an impact × likelihood scale and flagged the 16 controls that exceeded the risk threshold.",
  "Paired every flagged control with a specific recommendation, including estimated labor hours and implementation cost.",
];

const DETAILS = [
  { label: "Client", value: "MedTech Dynamics · Simulated medical-device company" },
  { label: "Assessment", value: "Information security risk assessment · CYRB 490-50 class project" },
  { label: "Framework", value: "NIST Cybersecurity Framework · Impact × likelihood risk scoring" },
  { label: "Deliverable", value: "108-control scored matrix · 16 costed recommendations · October 2023" },
];

const METHOD = [
  {
    step: "01",
    name: "Map the framework",
    body: "Worked through the NIST CSF control catalog function by function — Identify, Protect, Detect, Respond, Recover — turning each control statement into concrete questions for the client.",
  },
  {
    step: "02",
    name: "Gather responses and evidence",
    body: "Recorded each control's respondent answers, documentary evidence, and assessor comments — from how physical assets are prioritized to how remote access is managed.",
  },
  {
    step: "03",
    name: "Analyze vulnerabilities and threats",
    body: "Documented the vulnerability behind every control and the threat event that could exploit it — phishing, unauthorized access, mishandled sensitive information — plus compensating controls already in place.",
  },
  {
    step: "04",
    name: "Score the risk",
    body: "Rated impact and likelihood (low, medium, high) for each control and converted them into a 1–100 risk score. Anything scoring above 1 required a documented recommendation.",
  },
  {
    step: "05",
    name: "Recommend and cost the fixes",
    body: "Wrote practical remediation for all 16 flagged controls with estimated labor hours and dollar cost, so the client could prioritize by risk and budget.",
  },
];

const FINDINGS = [
  {
    title: "Detection alerts go uninvestigated",
    score: "Risk 100",
    body: "Notifications from detection systems were not reliably investigated — a targeted attack or malware event could land without anyone acting on the alert. Recommendation: implement a robust detection and anti-malware system.",
  },
  {
    title: "Outdated vulnerability scanning",
    score: "Risk 100",
    body: "Vulnerability scanning systems were not kept updated, upgraded, or regularly verified, so scans could miss current threats or fail silently. Recommendation: update and upgrade the scanning systems and check on them routinely.",
  },
  {
    title: "Credential and device management",
    score: "Risk 50",
    body: "How identities and credentials were issued, verified, revoked, and audited left room for integrity loss on accessible systems. Recommendation: performance reviews for the responsible owner and a device database that is constantly kept current.",
  },
  {
    title: "System development life cycle",
    score: "Risk 50",
    body: "The SDLC used to manage systems created a path to unauthorized access through unpatched software. Recommendation: keep software updated and monitor the systems continuously.",
  },
  {
    title: "Incident response capacity",
    score: "Risk 50",
    body: "Executing the response plan depended on how capable each individual was — a thin bench slowed response and recovery. Recommendation: add personnel sized to the team's capability to shorten response and recovery time.",
  },
  {
    title: "Configuration change control",
    score: "Risk 25",
    body: "Communication about how system updates were performed was unclear — a change done incorrectly could cause problems. Recommendation: document the update process and communicate it across teams.",
  },
];

const STRENGTH = {
  title: "What the assessment showed: the fundamentals held",
  body: "Most controls scored at the lowest risk level — physical access management, data-at-rest and data-in-transit protection, least-privilege access, security awareness training, and remote access were all in reasonable shape. The gaps concentrated where medical-device organizations often struggle: detection, response, and disciplined change management.",
};

const TAGS = [
  "NIST CSF",
  "Risk assessment",
  "Control analysis",
  "Vulnerability identification",
  "Threat analysis",
  "Impact & likelihood scoring",
  "Remediation planning",
  "Cost estimation",
];

function MedTechRiskProject() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <main>
        <Hero />
        <Overview />
        <Method />
        <Findings />
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
        <p className="eyebrow text-signal mt-10">Case study · 04 · Risk &amp; security</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          Medical Devices Risk Assessment
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          A structured information security risk assessment of a simulated medical-device company, built on the NIST Cybersecurity Framework — 108 controls reviewed, every risk scored by impact and likelihood, and each gap paired with a costed fix.
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
          <h2 className="font-display mt-4 text-3xl md:text-4xl">Score every control, fix every gap.</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed">
            The goal was to give a medical-device organization a complete, defensible picture of its security risk: not just a list of weaknesses, but a scored, prioritized view of where the danger actually is and what each fix would cost.
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

function Method() {
  return (
    <section aria-label="Assessment method" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">How the assessment worked</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Five steps from framework to fix.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              The NIST Cybersecurity Framework gave the assessment its structure; the scoring model gave its results their priority order.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {METHOD.map((stage, index) => (
            <div key={stage.step} className={`border-b border-border py-9 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl text-signal">{stage.step}</span>
              </div>
              <h3 className="font-display mt-6 text-xl">{stage.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Findings() {
  return (
    <section aria-label="Key risks and recommendations" className="bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">Key risks &amp; recommendations</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Highest risk first, every risk costed.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Sixteen controls scored above the risk threshold. These are the highest-scoring risks, each with the recommendation and cost estimate documented in the assessment matrix.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {FINDINGS.map((finding, index) => (
            <div key={finding.title} className={`border-b border-border py-9 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">{finding.title}</h3>
                <span className="shrink-0 border border-border px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{finding.score}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{finding.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border-l-4 border-accent pl-6">
          <h3 className="font-display text-xl">{STRENGTH.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{STRENGTH.body}</p>
        </div>
      </div>
    </section>
  );
}

function Details() {
  return (
    <section aria-label="Assessment details" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-px md:grid-cols-4">
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
          <p className="eyebrow text-signal">Want the full picture?</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">This risk assessment sits alongside my hands-on security testing and systems work.</h2>
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
