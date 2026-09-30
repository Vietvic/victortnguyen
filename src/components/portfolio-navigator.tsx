import { Link } from "@tanstack/react-router";
import { ChevronDown, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const DESTINATIONS = [
  { label: "Portfolio home", to: "/", description: "Profile, experience, skills, and education" },
  { label: "AIS Student Chapter", to: "/leadership/ais", description: "Vice President leadership and responsibilities" },
  { label: "FRAYEO Digital Literacy", to: "/projects/frayeo-digital-literacy", description: "Program launch with Northstar and CareerForce" },
  { label: "Medical Device Risk", to: "/projects/medical-device-risk-assessment", description: "NIST CSF risk assessment" },
  { label: "DataKing Security", to: "/projects/dataking-security-assessment", description: "Penetration test and findings" },
  { label: "AI College Budgeting", to: "/projects/college-budgeting-system", description: "Interactive college recommendation project" },
] as const;

const SEARCH_ITEMS = [
  ...DESTINATIONS.map((item) => ({ ...item, keywords: item.description })),
  { label: "Work experience", to: "/", hash: "experience", description: "FRAYEO, Stauer, and operations experience", keywords: "jobs roles systems administrator program manager operations" },
  { label: "Selected projects", to: "/", hash: "projects", description: "Four MIS, cybersecurity, and community projects", keywords: "portfolio work case studies" },
  { label: "Technical skills", to: "/", hash: "skills", description: "Systems, data, security, and delivery skills", keywords: "software tools technology SQL Linux Microsoft" },
  { label: "Education", to: "/", hash: "education", description: "M.S. MIS and B.S. Cybersecurity", keywords: "degree GPA Metropolitan State University college" },
] as const;

export function PortfolioNavigator() {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return SEARCH_ITEMS.slice(0, 6);
    return SEARCH_ITEMS.filter((item) =>
      `${item.label} ${item.description} ${item.keywords}`.toLowerCase().includes(normalized),
    ).slice(0, 8);
  }, [query]);

  useEffect(() => {
    const closeMenus = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setSearchOpen(false);
        setPagesOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenus);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenus);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeAll = () => {
    setSearchOpen(false);
    setPagesOpen(false);
    setQuery("");
  };

  return (
    <nav ref={containerRef} aria-label="Portfolio navigation" className="sticky top-0 z-[100] border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-3 md:px-8">
        <Link to="/" aria-label="Victor Nguyen portfolio home" className="interactive-lift hidden shrink-0 border border-border bg-primary px-3 py-2 text-sm font-bold text-primary-foreground sm:inline-flex">
          VN<span className="text-signal">.</span>
        </Link>

        <div className="relative min-w-0 flex-1">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={17} />
          <input
            type="search"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setSearchOpen(true); setPagesOpen(false); }}
            onFocus={() => { setSearchOpen(true); setPagesOpen(false); }}
            placeholder="Search projects, skills, experience…"
            aria-label="Search portfolio"
            aria-expanded={searchOpen}
            aria-controls="portfolio-search-results"
            className="h-10 w-full border border-input bg-card pl-10 pr-9 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/20"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="interactive-lift absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
          )}

          {searchOpen && (
            <div id="portfolio-search-results" className="absolute left-0 right-0 top-[calc(100%+0.5rem)] border border-border bg-popover p-2 text-popover-foreground shadow-xl">
              <p className="eyebrow px-3 pb-2 pt-1">{query.trim() ? "Best matches" : "Search suggestions"}</p>
              {results.length > 0 ? results.map((item) => (
                <Link
                  key={`${item.to}-${"hash" in item ? item.hash : item.label}`}
                  to={item.to}
                  {...("hash" in item ? { hash: item.hash } : {})}
                  onClick={closeAll}
                  className="group block border-t border-border px-3 py-3 transition-colors first:border-t-0 hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
                >
                  <span className="block text-sm font-bold group-hover:text-accent">{item.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
                </Link>
              )) : <p className="px-3 py-5 text-sm text-muted-foreground">No exact match. Try “security,” “education,” or “FRAYEO.”</p>}
            </div>
          )}
        </div>

        <a
          href="mailto:victortnguyen18@gmail.com"
          aria-label="Email Victor Nguyen"
          className="interactive-lift flex h-10 shrink-0 items-center gap-2 bg-signal px-3 text-sm font-bold text-primary sm:px-4"
        >
          <Mail size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Contact</span>
        </a>

        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => { setPagesOpen((open) => !open); setSearchOpen(false); }}
            aria-expanded={pagesOpen}
            aria-controls="portfolio-page-menu"
            className="interactive-lift flex h-10 items-center gap-2 border border-border bg-card px-3 text-sm font-bold text-foreground"
          >
            <span className="hidden sm:inline">All pages</span>
            <span className="sm:hidden">Pages</span>
            <ChevronDown size={16} className={`transition-transform ${pagesOpen ? "rotate-180" : ""}`} />
          </button>
          {pagesOpen && (
            <div id="portfolio-page-menu" className="absolute right-0 top-[calc(100%+0.5rem)] w-72 border border-border bg-popover p-2 text-popover-foreground shadow-xl">
              <p className="eyebrow px-3 pb-2 pt-1">Go to a page</p>
              {DESTINATIONS.map((item) => (
                <Link key={item.to} to={item.to} onClick={closeAll} className="group block border-t border-border px-3 py-3 transition-colors first:border-t-0 hover:bg-muted focus-visible:bg-muted focus-visible:outline-none">
                  <span className="block text-sm font-bold group-hover:text-accent">{item.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}