import { ArrowLeft } from "lucide-react";
import ScenarioCardGrid from "../../components/scenario-card-grid";

function ScenarioPage({
  scenarios,
  isLoading,
  loadError,
  currentPage,
  totalPages,
  onPageChange,
  onBack,
  onSelectScenario,
  cardRefs,
  onCardPointerMove,
  onCardPointerLeave,
  lang,
  copy,
}) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

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
                isLoading={isLoading}
              />
            ) : isLoading ? (
              <ScenarioCardGrid
                scenarios={[]}
                onSelectScenario={onSelectScenario}
                cardRefs={cardRefs}
                onCardPointerMove={onCardPointerMove}
                onCardPointerLeave={onCardPointerLeave}
                lang={lang}
                copy={copy}
                isLoading={isLoading}
              />
            ) : (
              <div className="grid min-h-full place-items-center rounded-[24px] bg-[var(--surface)] p-6 sm:p-8 lg:p-10">
                <div className="max-w-md rounded-[24px] border border-dashed border-[var(--line)] bg-[var(--surface-muted)] p-6 text-left">
                  <h3 className="text-2xl font-semibold text-[var(--text)]">{copy.emptyTitle}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">{copy.emptyBody}</p>
                </div>
              </div>
            )}

            {loadError ? (
              <div className="mt-4 rounded-[22px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {loadError}
              </div>
            ) : null}

            {scenarios.length ? (
              <div className="mt-4 flex flex-col items-center gap-3 py-2">
                {isLoading ? (
                  <p className="text-sm text-[var(--text-soft)]">
                    {lang === "vi" ? "Đang chuyển trang..." : "Loading page..."}
                  </p>
                ) : null}
                {totalPages > 1 ? (
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => onPageChange(currentPage - 1)}
                      disabled={currentPage <= 1 || isLoading}
                      className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-white/64 px-4 text-sm font-semibold text-[var(--text-soft)] disabled:cursor-not-allowed disabled:opacity-45 hover:border-[var(--line-strong)] hover:bg-white"
                    >
                      {lang === "vi" ? "Trước" : "Prev"}
                    </button>
                    {pageNumbers.map((pageNumber) => (
                      <button
                        key={pageNumber}
                        type="button"
                        onClick={() => onPageChange(pageNumber)}
                        disabled={isLoading}
                        className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-semibold ${
                          pageNumber === currentPage
                            ? "border-transparent bg-[var(--surface-inverse)] text-white"
                            : "border-[var(--line)] bg-white/64 text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:bg-white"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => onPageChange(currentPage + 1)}
                      disabled={currentPage >= totalPages || isLoading}
                      className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-white/64 px-4 text-sm font-semibold text-[var(--text-soft)] disabled:cursor-not-allowed disabled:opacity-45 hover:border-[var(--line-strong)] hover:bg-white"
                    >
                      {lang === "vi" ? "Sau" : "Next"}
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScenarioPage;
