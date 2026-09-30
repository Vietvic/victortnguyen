import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

export const Route = createFileRoute("/projects/dataking-security-assessment")({
  head: () => ({
    meta: [
      { title: "DataKing Penetration Test — Victor Nguyen" },
      { name: "description", content: "Case study: a structured external penetration test following NIST SP 800-115 and the OWASP Testing Guide — reconnaissance, exploitation, findings, and remediation recommendations." },
      { property: "og:title", content: "DataKing Penetration Test — Victor Nguyen" },
      { property: "og:description", content: "An external security assessment from open-source intelligence through password spraying and full network access — documented as a professional findings report with remediation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "DataKing Penetration Test — Victor Nguyen" },
      { name: "twitter:description", content: "An external security assessment from open-source intelligence through password spraying and full network access — documented as a professional findings report with remediation." },
    ],
  }),
  component: DataKingProject,
});

const HIGHLIGHTS = [
  "Planned the engagement around the NIST SP 800-115 Technical Guide to Information Security Testing, the OWASP Testing Guide (v4), and customized testing frameworks.",
  "Gathered open-source intelligence, including employee information and historical breached credentials, to use against external login services.",
  "Performed scanning and enumeration to identify vulnerabilities, then confirmed them through controlled exploitation.",
  "Executed credential stuffing and password spraying attacks against the Outlook Web App, eventually gaining valid credentials and access to the internal network through the VPN portal.",
  "Documented every finding with a CVSS-based severity rating, impact, affected system, and NIST control references.",
  "Delivered a full findings report with step-by-step remediation: MFA on external services, restricted logon attempts, and a stronger password policy.",
];

const DETAILS = [
  { label: "Assessment", value: "External penetration test · Simulated attacker with no inside knowledge" },
  { label: "Frameworks", value: "NIST SP 800-115 · OWASP Testing Guide v4 · CVSS severity ratings" },
  { label: "Findings", value: "1 critical · 1 high · 1 moderate · 1 low · Informational" },
  { label: "Deliverable", value: "Security Assessment Findings Report with remediation plan" },
];

const ATTACK_CHAIN = [
  {
    step: "01",
    name: "Open-source intelligence",
    body: "Collected historical breached-credential dumps and employee information tied to the company — 868 account credentials in total — and flagged the risk of staff reusing work emails as logins on other services.",
  },
  {
    step: "02",
    name: "Credential stuffing & enumeration",
    body: "Tried the breached credentials against the Outlook Web App login. The stuffing attack itself failed, but inconsistent error messages allowed username enumeration — a list of valid accounts to aim the next attack at.",
  },
  {
    step: "03",
    name: "Password spraying",
    body: "Tested a predictable seasonal password pattern (season + year + special character) against every valid account. Because logon attempts were unrestricted, the pattern eventually matched — yielding a successful login to OWA.",
  },
  {
    step: "04",
    name: "Internal network access",
    body: "Leveraged the valid credentials to log into the client VPN portal, reaching the internal network — and demonstrating how three small gaps combine into a critical, full-compromise path.",
  },
];

const FINDINGS = [
  {
    title: "Missing multi-factor authentication",
    severity: "High",
    body: "VPN and OWA logins accepted valid credentials with no second factor. Recommendation: implement and enforce MFA across all external-facing login services.",
  },
  {
    title: "Weak password policy",
    severity: "High",
    body: "A seasonal password pattern succeeded against valid accounts. Recommendation: 14+ character passwords, unique per account, no dictionary words or proper names — plus employee training and checks against known-breached passwords.",
  },
  {
    title: "Unrestricted logon attempts",
    severity: "Critical",
    body: "Unlimited attempts on external logins made brute force and password guessing practical. Recommendation: restrict logon attempts and automatically lock accounts, per NIST SP 800-53 AC-7(1).",
  },
  {
    title: "Username enumeration",
    severity: "Moderate",
    body: "The login page revealed which accounts existed. Recommendation: synchronize valid and invalid account messages so failures are indistinguishable.",
  },
];

const STRENGTH = {
  title: "What the client did right: SIEM monitoring",
  body: "The internal security team detected the vulnerability scanning within minutes, identified the attacker's IP address, and blacklisted it from further scanning. Detection and response worked — the gaps were in authentication policy, not visibility.",
};

const TAGS = [
  "NIST SP 800-115",
  "OWASP Testing Guide",
  "OSINT",
  "Vulnerability scanning",
  "Credential attacks",
  "CVSS scoring",
  "Remediation planning",
  "Technical writing",
];

function DataKingProject() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <main>
        <Hero />
        <Overview />
        <AttackChain />
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
        <p className="eyebrow text-signal mt-10">Case study · 03 · Security assessment</p>
        <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
          DataKing Penetration Test
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          A structured external penetration test conducted exactly the way an attacker would: from public information and breached credentials to a valid login, internal network access, and a full professional findings report with remediation.
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
          <h2 className="font-display mt-4 text-3xl md:text-4xl">Think like an attacker, write like an engineer.</h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed">
            The goal was to evaluate an organization's external security posture the way a real attacker would — no inside knowledge, no allowances, just the public attack surface. Every phase followed a defined methodology, and every result fed a report the client could act on.
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

function AttackChain() {
  return (
    <section aria-label="Attack chain" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">How the test unfolded</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Four steps from public data to full access.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              No single exploit broke the network. Three ordinary policy gaps — reused credentials, unrestricted attempts, and a guessable password pattern — chained together into a critical path.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {ATTACK_CHAIN.map((stage, index) => (
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
    <section aria-label="Findings" className="bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 border-b border-border pb-10 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-accent">Findings &amp; remediation</p>
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Every weakness came with a fix.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Findings were rated by CVSS severity, tied to NIST control references, and paired with specific, prioritized remediation steps the IT team could implement.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {FINDINGS.map((finding, index) => (
            <div key={finding.title} className={`border-b border-border py-9 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">{finding.title}</h3>
                <span className="shrink-0 border border-border px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{finding.severity}</span>
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
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">This assessment sits alongside my broader security work — risk analysis, tooling, and systems.</h2>
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
