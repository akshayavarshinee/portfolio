import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshaya Varshinee M — AI / Agentic AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Akshaya Varshinee M — B.Tech AI & Data Science student building agentic AI, RAG systems, and high-concurrency full-stack applications.",
      },
      { property: "og:title", content: "Akshaya Varshinee M — AI Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Agentic AI, RAG, and full-stack projects. Currently Agentic AI Intern at Cognizant.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
