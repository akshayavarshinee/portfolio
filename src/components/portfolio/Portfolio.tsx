import { Navbar } from "@/components/portfolio/Navbar";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { Section } from "@/components/portfolio/Section";

/* ---------------- Data ---------------- */

const NAME = "Akshaya Varshinee M";
const ROLE = "AI / Agentic AI Engineer · Full-Stack Developer";
const INTRO =
  "B.Tech in AI & Data Science. I build agentic AI systems, RAG pipelines, and high-concurrency backends — turning research-grade ideas into production-ready software.";

const skills = [
  {
    title: "AI / LLM Systems",
    accent: "from-cyan-400/30 to-sky-500/10",
    items: ["OpenAI Agents SDK", "CrewAI", "LangChain", "LangGraph", "MCP", "A2A", "RAG"],
  },
  {
    title: "ML & Data",
    accent: "from-violet-400/30 to-fuchsia-500/10",
    items: ["Scikit-Learn", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Vector DBs & Cloud",
    accent: "from-teal-400/30 to-emerald-500/10",
    items: ["ChromaDB", "Qdrant", "Azure OpenAI", "Azure AI Search", "Azure Functions", "AWS"],
  },
  {
    title: "Programming",
    accent: "from-indigo-400/30 to-blue-500/10",
    items: ["Python", "JavaScript", "C++", "C", "Java"],
  },
  {
    title: "Web & Backend",
    accent: "from-sky-400/30 to-cyan-500/10",
    items: ["React.js", "Tailwind", "Node.js", "Express.js", "FastAPI", "Electron.js", "REST APIs"],
  },
  {
    title: "Databases & Tools",
    accent: "from-purple-400/30 to-indigo-500/10",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Redis", "Git", "Postman", "k6", "Grafana"],
  },
];

const marqueeSkills = [
  "OpenAI Agents SDK", "LangChain", "CrewAI", "RAG", "Qdrant", "ChromaDB",
  "Azure OpenAI", "FastAPI", "React", "Node.js", "PostgreSQL", "BullMQ",
  "Redis", "Python", "TensorFlow", "Scikit-Learn", "MCP", "A2A", "Docker", "k6",
];

const experience = [
  {
    role: "Agentic AI Intern",
    company: "Cognizant Technology Solutions",
    dates: "Apr 2026 – Present",
    points: [
      "Building industry-oriented Agentic AI and RAG applications using Microsoft Azure AI services and cloud-native architectures.",
      "Working with Azure Foundry, Containers, and Functions across deployment pipelines for production LLM systems.",
      "Designing scalable AI solutions and backend integrations for real-world business use cases.",
      "Exploring optimization strategies for latency, token usage, and production cost efficiency in LLM-based systems.",
    ],
  },
  {
    role: "COE Intern — Drug Repurposing using Agentic AI",
    company: "Chennai Institute of Technology",
    dates: "Nov 2025",
    points: [
      "Designed two agent pipelines (drug & disease analysis) that autonomously retrieve biomedical data from ChEMBL, OpenTargets, and BindingDB.",
      "Implemented tool-based agent workflows with the OpenAI Agents SDK and FastAPI for evidence aggregation across 5+ APIs.",
      "Built modular backend services to normalize and combine heterogeneous biomedical datasets into structured analysis outputs.",
    ],
  },
];

const projects = [
  {
    name: "Befunge-93 Esoteric Coding Contest Platform",
    featured: true,
    dates: "Dec 2025 – Jan 2026",
    description:
      "High-concurrency competitive programming platform for the Befunge-93 esolang, built to host 200+ simultaneous contestants with an async judging architecture.",
    points: [
      "Async judging pipeline using BullMQ + Redis-backed queues — never blocks the Node event loop.",
      "Worker-based execution layer running a Befunge-93 interpreter for live grading and leaderboard updates.",
      "Load-tested with k6 at 400 concurrent users — 0% HTTP failure rate under peak contest traffic.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "BullMQ", "Redis", "k6"],
    links: { github: "https://github.com/akshayavarshinee" },
  },
  {
    name: "Drug Repurposing using Agentic AI",
    featured: true,
    dates: "2025",
    description:
      "Multi-agent pipeline orchestrating biomedical APIs to surface candidate drug–disease relationships automatically.",
    points: [
      "Specialized agents fetch ChEMBL SMILES, OpenTargets targets, BindingDB scores, patents, and clinical-trial evidence.",
      "Aggregates signals from 5+ biomedical APIs into a single ranked report.",
      "OpenAI Agents SDK + FastAPI orchestration with tool-based information retrieval.",
    ],
    stack: ["OpenAI Agents SDK", "FastAPI", "ChEMBL", "OpenTargets", "BindingDB", "Serper"],
    links: { github: "https://github.com/akshayavarshinee" },
  },
  {
    name: "Offline Multimodal RAG System",
    featured: false,
    dates: "Ongoing",
    description:
      "Offline-first multimodal retrieval system supporting text, document, and image queries with no cloud dependency.",
    points: [
      "Local embedding generation and vector indexing with Qdrant.",
      "Similarity-based retrieval pipeline engineered for fully local inference.",
    ],
    stack: ["LangChain", "Qdrant", "Multimodal RAG"],
    links: {},
  },
  {
    name: "Agentic AI Travel Planner",
    featured: false,
    dates: "Ongoing",
    description:
      "Multi-agent travel planning system with planner → retrieval → reranking → critic evaluation loop.",
    points: [
      "Gathers preferences and pulls candidates via the Foursquare Places API.",
      "Critic agent iteratively refines recommendations for higher itinerary quality.",
      "Generates downloadable itineraries with Google Maps Static API visualizations.",
    ],
    stack: ["OpenAI Agents SDK", "FastAPI", "Foursquare API", "Google Maps"],
    links: {},
  },
];

const achievements = [
  { title: "TCS CodeVita Season 13", detail: "Round 1 Qualifier" },
  { title: "JETRO Talent for Japan 2025", detail: "Finalist" },
  { title: "IIT Madras Esolang Contest", detail: "Finalist" },
  { title: "IEEE DebugX", detail: "Second Runner-Up" },
  { title: "H@CIT Codeathon 2025 & 2026", detail: "Finalist" },
];

const certifications = [
  {
    title: "The Complete Agentic AI Engineering Course",
    issuer: "Udemy · Ongoing",
    detail: "OpenAI Agents SDK, CrewAI, LangGraph, Autogen, MCP",
  },
  {
    title: "Cloud Fundamentals",
    issuer: "Microsoft · Ongoing",
    detail: "Azure AI services, Azure OpenAI, Azure AI Search",
  },
];

/* ---------------- Page ---------------- */

export function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="animate-fade-up max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for internships & collaborations
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Akshaya</span>
              <br />
              <span className="text-foreground">Varshinee.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              {ROLE}.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
              {INTRO}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-violet transition-all hover:-translate-y-0.5"
              >
                View Projects →
              </a>
              <a
                href="/M_Akshaya_Varshinee_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Me →
              </a>
            </div>

            {/* quick stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl">
              {[
                { k: "8.50", v: "CGPA" },
                { k: "2+", v: "Internships" },
                { k: "4+", v: "AI Projects" },
                { k: "5+", v: "Hackathon Finals" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-4 sm:p-5 glow-border">
                  <div className="text-2xl sm:text-3xl font-display font-semibold text-gradient">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 relative">
          <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-3 pr-3">
              {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
                <span
                  key={i}
                  className="shrink-0 rounded-full glass px-4 py-2 text-sm text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About"
        title="Engineering at the edge of AI and software."
      >
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 glass rounded-3xl p-8 sm:p-10 glow-border">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm a B.Tech student in <span className="text-gradient font-medium">Artificial Intelligence & Data Science</span> at
              Chennai Institute of Technology, currently working as an{" "}
              <span className="text-foreground">Agentic AI Intern at Cognizant</span>.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              My focus is on building agentic systems that actually ship — multi-agent
              orchestration with the OpenAI Agents SDK, retrieval-augmented generation,
              and production deployment on Microsoft Azure. I'm equally comfortable
              writing concurrent backends in Node.js and shipping React frontends.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I like problems where research-grade ideas meet real-world constraints —
              latency, cost, scale — and the system has to hold up.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-4">
            {[
              { t: "Focus", d: "Agentic AI · RAG · LLM systems · Cloud-native backends" },
              { t: "Stack", d: "OpenAI Agents SDK, FastAPI, Azure, React, Node.js, PostgreSQL" },
              { t: "Currently", d: "Building Agentic AI + RAG products at Cognizant" },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-6 glow-border">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {c.t}
                </div>
                <div className="mt-2 text-foreground">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        eyebrow="Skills"
        title="A toolkit built for shipping."
        description="Languages, frameworks, and platforms I use day-to-day across AI, backend, and frontend work."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((g) => (
            <div
              key={g.title}
              className={`relative glass rounded-2xl p-6 glow-border overflow-hidden group transition-transform hover:-translate-y-1`}
            >
              <div
                className={`absolute -top-12 -right-12 h-40 w-40 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${g.accent} pointer-events-none transition-opacity group-hover:opacity-80`}
              />
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-secondary/70 border border-border px-2.5 py-1 text-xs text-foreground/85"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        eyebrow="Experience"
        title="Where I've been building."
      >
        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />
          <div className="space-y-8">
            {experience.map((e) => (
              <div key={e.role} className="relative pl-10 sm:pl-14">
                <div className="absolute left-0 top-2 grid h-7 w-7 sm:h-9 sm:w-9 place-items-center rounded-full bg-gradient-primary shadow-glow">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </div>
                <div className="glass rounded-2xl p-6 sm:p-8 glow-border">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-foreground">{e.role}</h3>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {e.dates}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gradient font-medium">{e.company}</div>
                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        eyebrow="Projects"
        title="Things I've built."
        description="From agentic biomedical pipelines to high-concurrency contest platforms."
      >
        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className={`relative glass rounded-3xl p-7 sm:p-8 glow-border group overflow-hidden transition-transform hover:-translate-y-1 ${
                p.featured ? "lg:row-span-1" : ""
              }`}
            >
              {p.featured && (
                <div
                  className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-40 pointer-events-none"
                  style={{ background: "var(--gradient-primary)" }}
                />
              )}
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold">{p.name}</h3>
                  {p.featured && (
                    <span className="shrink-0 rounded-full bg-gradient-primary text-primary-foreground text-[10px] uppercase tracking-wider px-2.5 py-1">
                      Featured
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{p.dates}</div>

                <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>

                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary/50 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {(p.links.github) && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg glass px-4 py-2 text-sm hover:bg-secondary transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Education" title="Academic foundation.">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 glass rounded-3xl p-8 glow-border">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">Chennai Institute of Technology</h3>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Sep 2024 – May 2028
              </span>
            </div>
            <div className="mt-1 text-sm text-gradient font-medium">
              B.Tech, Artificial Intelligence & Data Science
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Kundrathur, Chennai · CGPA <span className="text-foreground">8.50</span>
            </div>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {["Data Structures & Algorithms", "DBMS", "OOPs", "Web Development", "Operating Systems", "Computer Networks"].map(
                  (c) => (
                    <span
                      key={c}
                      className="rounded-lg bg-secondary/70 border border-border px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 glow-border">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Volunteering
            </div>
            <h3 className="mt-2 text-lg font-semibold">
              Technical Volunteer — Stranger Codes, TALOS 5.0
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Organized the Befunge-93 esolang contest at the AI&DS department symposium —
              built the competition site, authored syntax docs, designed problems, and
              provided on-site technical support.
            </p>
          </div>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section
        id="achievements"
        eyebrow="Achievements & Certifications"
        title="Recognition and learning."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Achievements
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="glass rounded-xl p-4 glow-border hover:-translate-y-0.5 transition-transform"
                >
                  <div className="text-sm font-medium">{a.title}</div>
                  <div className="mt-1 text-xs text-gradient">{a.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Certifications
            </div>
            <div className="grid gap-3">
              {certifications.map((c) => (
                <div key={c.title} className="glass rounded-xl p-5 glow-border">
                  <div className="text-sm font-medium">{c.title}</div>
                  <div className="mt-1 text-xs text-gradient">{c.issuer}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{c.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's build something together."
        description="Open to internships, research collaborations, and hackathon teams. The fastest way to reach me is email."
      >
        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2 grid gap-3">
            {[
              { label: "Email", value: "akshayavarshinee@gmail.com", href: "mailto:akshayavarshinee@gmail.com" },
              { label: "Phone", value: "+91 96001 00140", href: "tel:+919600100140" },
              { label: "LinkedIn", value: "Akshaya Varshinee M", href: "https://www.linkedin.com/in/akshaya-varshinee-m" },
              { label: "GitHub", value: "akshayavarshinee", href: "https://github.com/akshayavarshinee" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass rounded-2xl p-5 glow-border flex items-center justify-between gap-4 hover:-translate-y-0.5 transition-transform"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 text-foreground">{c.value}</div>
                </div>
                <span className="text-muted-foreground group-hover:text-foreground">↗</span>
              </a>
            ))}
          </div>

          <form
            className="lg:col-span-3 glass rounded-3xl p-7 sm:p-8 glow-border"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const subject = encodeURIComponent(`Portfolio: ${data.get("name")}`);
              const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
              window.location.href = `mailto:akshayavarshinee@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="block mt-4">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl bg-secondary/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
                placeholder="Tell me about the role, project, or idea…"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-violet hover:-translate-y-0.5 transition-all"
            >
              Send Message →
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 mt-10">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} {NAME}. Built with care.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground transition-colors" href="mailto:akshayavarshinee@gmail.com">Email</a>
            <a className="hover:text-foreground transition-colors" href="https://github.com/akshayavarshinee" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-foreground transition-colors" href="https://www.linkedin.com/in/akshaya-varshinee-m" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
