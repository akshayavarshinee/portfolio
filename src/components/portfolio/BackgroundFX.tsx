export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-40 animate-float"
        style={{ background: "radial-gradient(closest-side, oklch(0.78 0.16 220 / 0.6), transparent)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-30 animate-float"
        style={{
          background: "radial-gradient(closest-side, oklch(0.68 0.18 290 / 0.6), transparent)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-20 animate-float"
        style={{
          background: "radial-gradient(closest-side, oklch(0.78 0.13 180 / 0.6), transparent)",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}
