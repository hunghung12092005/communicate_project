import { ArrowUpRight, Radar, TimerReset, TriangleAlert } from "lucide-react";

function ScenarioCardGrid({
  scenarios,
  onSelectScenario,
  cardRefs,
  onCardPointerMove,
  onCardPointerLeave,
  lang,
  copy,
}) {
  const openLabel = lang === "vi" ? "Mở playbook" : "Open playbook";

  return (
    <div className="grid gap-3 sm:gap-4 xl:grid-cols-[1.08fr_0.92fr]">
      {scenarios.map((scenario, index) => (
        <button
          key={scenario.id}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
          type="button"
          onClick={() => onSelectScenario(scenario)}
          onPointerMove={(event) => onCardPointerMove(event, index)}
          onPointerLeave={() => onCardPointerLeave(index)}
          className={`group relative overflow-hidden rounded-[24px] border p-4 sm:rounded-[30px] sm:p-6 text-left [transform-style:preserve-3d] ${
            index % 3 === 0
              ? "bg-[linear-gradient(180deg,rgba(255,248,240,0.94),rgba(245,237,224,0.9))]"
              : "bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,239,228,0.82))]"
          } border-[var(--line)] hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-[0_28px_64px_rgba(68,49,27,0.12)]`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,79,51,0.12),transparent_38%)] opacity-0 transition duration-200 group-hover:opacity-100" />
          <div className="relative flex h-full flex-col justify-between gap-5 sm:gap-8">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                  {scenario.code} / {scenario.location[lang]}
                </p>
                <h3 className="mt-3 max-w-[12ch] font-[var(--font-display)] text-[1.75rem] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--text)] sm:mt-4 sm:text-[2.4rem]">
                  {scenario.title[lang]}
                </h3>
              </div>
              <div className="flex items-start justify-between gap-3 lg:justify-end">
                <div className="hidden rounded-full border border-[var(--line)] bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)] sm:block">
                  {openLabel}
                </div>
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-[var(--text-soft)] group-hover:translate-x-[5px] group-hover:-translate-y-[5px] group-hover:text-[var(--accent-strong)] sm:h-5 sm:w-5"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <p className="max-w-[42ch] text-[0.96rem] leading-7 text-[var(--text-soft)] sm:max-w-[52ch] sm:text-base sm:leading-8">{scenario.painPoint[lang]}</p>

            <div className="hidden gap-3 sm:grid sm:grid-cols-3">
              <div className="rounded-[22px] border border-white/65 bg-white/52 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-soft)]">
                  <TriangleAlert className="h-3.5 w-3.5 text-orange-600" strokeWidth={1.7} />
                  {copy.alert}
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--text)]">{scenario.alertLevel[lang]}</p>
              </div>
              <div className="rounded-[22px] border border-white/65 bg-white/52 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-soft)]">
                  <TimerReset className="h-3.5 w-3.5 text-cyan-700" strokeWidth={1.7} />
                  {copy.window}
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--text)]">{scenario.pressure[lang]}</p>
              </div>
              <div className="rounded-[22px] border border-white/65 bg-white/52 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-soft)]">
                  <Radar className="h-3.5 w-3.5 text-emerald-700" strokeWidth={1.7} />
                  {copy.signal}
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--text)]">{scenario.signal[lang]}</p>
              </div>
            </div>

            <div className="hidden flex-wrap gap-2 sm:flex">
              {scenario.tacticalPlays.map((play) => (
                <span
                  key={play.name[lang]}
                  className="rounded-full border border-[var(--line)] bg-white/55 px-3 py-2 text-sm font-medium text-[var(--text-soft)]"
                >
                  {play.name[lang]}
                </span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ScenarioCardGrid;
