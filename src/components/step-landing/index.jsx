import { ArrowLeft } from "lucide-react";

function StepLanding({
  badge,
  title,
  body,
  summary,
  backLabel,
  onBack,
  stepNumber,
  totalSteps,
  steps,
  currentStepId,
  children,
}) {
  return (
    <section className="section-ornament overflow-hidden">
      <div className="bg-[var(--surface-muted)] p-2 sm:p-4 lg:p-5">
        <div className="rounded-[24px] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.12))] p-4 sm:rounded-[28px] sm:p-6 lg:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {onBack ? (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-4 text-sm font-semibold text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:bg-white hover:text-[var(--text)]"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.7} />
                {backLabel}
              </button>
            ) : (
              <span />
            )}

            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              <span>{badge}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--accent-strong)]" />
              <span>
                {stepNumber}/{totalSteps}
              </span>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="max-w-[10ch] text-balance font-[var(--font-display)] text-[2.6rem] font-semibold leading-[0.9] tracking-[-0.05em] text-[var(--text)] sm:max-w-[12ch] sm:text-[4rem] lg:text-[4.4rem]">
              {title}
            </h2>
            <p className="mt-4 max-w-[34ch] text-[0.97rem] leading-7 text-[var(--text-soft)] sm:mt-5 sm:text-base sm:leading-8">{body}</p>
          </div>

          <div className="mt-7 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
            {steps.map((step, index) => {
              const active = step.id === currentStepId;

              return (
                <div
                  key={step.id}
                  className={`page-rule rounded-[20px] px-4 py-3.5 sm:rounded-[24px] sm:py-4 ${
                    active
                      ? "accent-ring border border-transparent bg-[var(--surface)]"
                      : "border border-[var(--line)] bg-[rgba(255,255,255,0.5)]"
                  }`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                    0{index + 1}
                  </p>
                  <p className={`mt-3 text-sm font-semibold sm:mt-5 ${active ? "text-[var(--text)]" : "text-[var(--text-soft)]"}`}>
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>

          {summary ? (
            <div className="soft-panel mt-7 rounded-[22px] border border-[var(--line)] p-4 sm:rounded-[26px] sm:p-6">
              {summary}
            </div>
          ) : null}

          <div className="mt-7">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepLanding;
