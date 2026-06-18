import { ArrowUpRight } from "lucide-react";

function ScenarioCardGrid({
  scenarios,
  onSelectScenario,
  cardRefs,
  onCardPointerMove,
  onCardPointerLeave,
  lang,
  copy,
  isLoading = false,
}) {
  const openLabel = lang === "vi" ? "Mở playbook" : "Open playbook";
  const skeletonItems = Array.from({ length: 3 }, (_, index) => index);

  if (isLoading && !scenarios.length) {
    return (
      <div className="scenario-notebook-grid grid gap-5 xl:grid-cols-3 xl:gap-6">
        {skeletonItems.map((item) => (
          <div
            key={item}
            className="scenario-notebook-card scenario-book-card scenario-book-skeleton relative overflow-hidden rounded-[22px] border border-[rgba(136,101,63,0.12)] p-4"
          >
            <span aria-hidden="true" className="scenario-notebook-spine" />
            <span aria-hidden="true" className="scenario-book-pages" />
            <span aria-hidden="true" className="scenario-book-frame" />
            <div className="scenario-notebook-content scenario-book-content relative flex h-full flex-col">
              <div className="scenario-notebook-copy scenario-book-copy min-w-0">
                <div className="scenario-skeleton-line h-3 w-16 rounded-full" />
                <div className="scenario-skeleton-line mt-4 h-3 w-24 rounded-full" />
                <div className="scenario-skeleton-line mt-5 h-10 w-3/4 rounded-[14px]" />
                <div className="scenario-skeleton-line mt-3 h-10 w-2/3 rounded-[14px]" />
              </div>

              <div className="scenario-book-footer mt-auto flex items-end justify-between gap-3 pt-8">
                <div className="scenario-skeleton-line h-8 w-20 rounded-full" />
                <div className="scenario-skeleton-line h-10 w-10 rounded-full sm:w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="scenario-notebook-grid grid gap-5 xl:grid-cols-3 xl:gap-6">
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
          className="scenario-notebook-card scenario-book-card group relative overflow-hidden rounded-[22px] border border-[rgba(136,101,63,0.16)] p-4 text-left [transform-style:preserve-3d] hover:-translate-y-1"
        >
          <span aria-hidden="true" className="scenario-notebook-spine" />
          <span aria-hidden="true" className="scenario-book-pages" />
          <span aria-hidden="true" className="scenario-book-frame" />
          <div className="scenario-book-glow absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />
          <div className="scenario-notebook-content scenario-book-content relative flex h-full flex-col">
            <div className="scenario-notebook-copy scenario-book-copy min-w-0">
              <p className="scenario-book-code text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                {scenario.code}
              </p>
              <p className="scenario-book-location mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                {scenario.location[lang]}
              </p>
              <h3 className="scenario-book-title mt-4 line-clamp-3 max-w-[12ch] font-[var(--font-display)] text-[1.9rem] font-semibold leading-[1] tracking-[-0.05em] text-[var(--text)] sm:text-[2.25rem]">
                {scenario.title[lang]}
              </h3>
             
            </div>

            <div className="scenario-book-footer mt-auto flex items-end justify-between gap-3 pt-8">
              <div className="inline-flex rounded-full border border-[rgba(127,79,51,0.14)] bg-white/62 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                {scenario.alertLevel[lang]}
              </div>
              <div className="scenario-book-open inline-flex items-center gap-2 rounded-full border border-[rgba(127,79,51,0.14)] bg-white/78 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)] transition duration-200 group-hover:border-[rgba(127,79,51,0.24)]">
                <span className="hidden sm:inline">{openLabel}</span>
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
