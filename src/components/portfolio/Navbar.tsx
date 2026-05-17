import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground text-sm shadow-glow">
              AV
            </span>
            <span className="hidden sm:inline text-sm tracking-wide">Akshaya Varshinee</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-colors ${
                    active === s.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-primary" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/M_Akshaya_Varshinee_Resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-violet transition-shadow"
          >
            Resume
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg glass"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-up">
            <ul className="grid">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${s.id}`}
                    className={`block px-4 py-3 rounded-lg text-sm ${
                      active === s.id ? "bg-secondary text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/M_Akshaya_Varshinee_Resume.pdf"
                  download
                  className="block text-center rounded-lg bg-gradient-primary px-4 py-3 text-sm font-medium text-primary-foreground"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
