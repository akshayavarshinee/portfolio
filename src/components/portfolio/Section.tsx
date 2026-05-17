import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mb-12 sm:mb-16">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-5xl font-semibold text-gradient">{title}</h2>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
