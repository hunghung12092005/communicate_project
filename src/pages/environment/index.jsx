import { ArrowLeft } from "lucide-react";
import EnvironmentSelector from "../../components/environment-selector";

function EnvironmentPage({
  environments,
  activeEnvironmentId,
  onEnvironmentSelect,
  onBack,
  lang,
  copy,
}) {
  return (
    <section className="section-ornament selector-landing selector-landing-environment">
      <div className="selector-landing-shell px-1 sm:px-0">
        <div className="selector-landing-head mb-5 sm:mb-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-4 text-sm font-semibold text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:bg-white hover:text-[var(--text)]"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.7} />
            {copy.backToIntro}
          </button>
        </div>

        <div className="selector-landing-frame rounded-[24px] p-2 sm:rounded-[28px] sm:p-4 lg:p-5">
          <div className="selector-landing-inner rounded-[22px] p-2 sm:rounded-[28px] sm:p-3">
            <EnvironmentSelector
              environments={environments}
              activeEnvironmentId={activeEnvironmentId}
              onEnvironmentChange={onEnvironmentSelect}
              lang={lang}
              label={copy.environmentLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnvironmentPage;
