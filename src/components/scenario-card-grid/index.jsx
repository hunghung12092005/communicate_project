import { ArrowUpRight } from "lucide-react";

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
    <div className="scenario-notebook-grid grid gap-3 xl:grid-cols-3">
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
          className={`scenario-notebook-card group relative overflow-hidden rounded-[20px] border border-[var(--line)] p-4 text-left [transform-style:preserve-3d] ${
            index % 2 === 0
              ? "bg-[linear-gradient(180deg,rgba(255,251,245,0.96),rgba(248,241,230,0.9))]"
              : "bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,242,232,0.86))]"
          } hover:-translate-y-0.5 hover:border-[var(--line-strong)]`}
        >
          <span aria-hidden="true" className="scenario-notebook-spine" />
          <span aria-hidden="true" className="scenario-notebook-rings" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,79,51,0.08),transparent_34%)] opacity-0 transition duration-200 group-hover:opacity-100" />
          <div className="scenario-notebook-content relative flex h-full items-start justify-between gap-4">
            <div className="scenario-notebook-copy min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                {scenario.code}
              </p>
              <h3 className="mt-2 line-clamp-3 max-w-[24ch] font-[var(--font-display)] text-[1.46rem] font-semibold leading-[1.14] tracking-[-0.04em] text-[var(--text)] sm:text-[1.72rem]">
                {scenario.title[lang]}
              </h3>
            </div>

            <div className="flex shrink-0 items-start gap-3 pl-2 pt-0.5">
              <div className="hidden rounded-full border border-[var(--line)] bg-white/66 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)] sm:block">
                {openLabel}
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(127,79,51,0.12)] bg-white/62 text-[var(--text-soft)] transition duration-200 group-hover:border-[rgba(127,79,51,0.24)] group-hover:text-[var(--accent-strong)]">
                <ArrowUpRight className="h-4 w-4 shrink-0 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ScenarioCardGrid;
