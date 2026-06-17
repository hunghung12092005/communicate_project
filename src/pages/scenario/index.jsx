import { ArrowLeft } from "lucide-react";
import ScenarioCardGrid from "../../components/scenario-card-grid";

function ScenarioPage({
  scenarios,
  onBack,
  onSelectScenario,
  cardRefs,
  onCardPointerMove,
  onCardPointerLeave,
  lang,
  copy,
}) {
  return (
    <section className="section-ornament selector-landing selector-landing-scenario">
      <div className="selector-landing-shell px-1 sm:px-0">
        <div className="selector-landing-head mb-5 sm:mb-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-4 text-sm font-semibold text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:bg-white hover:text-[var(--text)]"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.7} />
            {copy.backToZone}
          </button>
        </div>

        <div className="selector-landing-frame rounded-[24px] p-2 sm:rounded-[28px] sm:p-4 lg:p-5">
          <div className="selector-landing-inner rounded-[22px] p-2 sm:rounded-[28px] sm:p-3">
            {scenarios.length ? (
              <ScenarioCardGrid
                scenarios={scenarios}
                onSelectScenario={onSelectScenario}
                cardRefs={cardRefs}
                onCardPointerMove={onCardPointerMove}
                onCardPointerLeave={onCardPointerLeave}
                lang={lang}
                copy={copy}
              />
            ) : (
              <div className="grid min-h-full place-items-center rounded-[24px] bg-[var(--surface)] p-6 sm:p-8 lg:p-10">
                <div className="max-w-md rounded-[24px] border border-dashed border-[var(--line)] bg-[var(--surface-muted)] p-6 text-left">
                  <h3 className="text-2xl font-semibold text-[var(--text)]">{copy.emptyTitle}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">{copy.emptyBody}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScenarioPage;
