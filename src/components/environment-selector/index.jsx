import { ArrowUpRight } from "lucide-react";

function EnvironmentSelector({ environments, activeEnvironmentId, onEnvironmentChange, lang, label }) {
  return (
    <div className="environment-selector grid gap-3 sm:gap-4 lg:grid-cols-[1.06fr_0.94fr]">
      {environments.map((environment, index) => {
        const active = activeEnvironmentId === environment.id;

        return (
          <button
            key={environment.id}
            type="button"
            onClick={() => onEnvironmentChange(environment.id)}
            className={`environment-card group relative overflow-hidden rounded-[24px] border p-4 sm:rounded-[28px] sm:p-6 text-left ${
              active
                ? "accent-ring border-transparent bg-[var(--surface)]"
                : index === 0
                  ? "border-[var(--line)] bg-[rgba(255,248,240,0.86)] hover:-translate-y-1 hover:border-[var(--line-strong)]"
                  : "border-[var(--line)] bg-[rgba(255,255,255,0.62)] hover:-translate-y-1 hover:border-[var(--line-strong)]"
            }`}
          >
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,rgba(127,79,51,0.14),transparent_72%)] opacity-70" />
            <div className="relative flex h-full flex-col justify-between gap-6 sm:gap-10">
              <div className="flex items-start justify-between gap-4 sm:gap-5">
                <div>
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      active ? "text-[var(--accent-strong)]" : "text-[var(--text-soft)]"
                    }`}
                  >
                    {label}
                  </p>
                  <h3 className="mt-3 max-w-[11ch] font-[var(--font-display)] text-[1.8rem] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--text)] sm:mt-4 sm:text-[2.2rem]">
                    {environment.title[lang]}
                  </h3>
                </div>
                <ArrowUpRight
                  className={`mt-1 h-4 w-4 shrink-0 sm:h-5 sm:w-5 ${
                    active
                      ? "translate-x-1 -translate-y-1 text-[var(--accent-strong)]"
                      : "text-[var(--text-soft)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--text)]"
                  }`}
                  strokeWidth={1.5}
                />
              </div>

              <div className="grid gap-3 sm:gap-5 sm:grid-cols-[0.95fr_1.05fr]">
                <p className="text-[0.96rem] leading-7 sm:text-base sm:leading-8 text-[var(--text-soft)]">{environment.subtitle[lang]}</p>
                <div className="hidden rounded-[24px] border border-white/60 bg-white/44 p-4 text-right sm:block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">Index</p>
                  <p className="mt-4 text-6xl font-semibold leading-none tracking-[-0.08em] text-[var(--text)]">
                    0{index + 1}
                  </p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default EnvironmentSelector;
