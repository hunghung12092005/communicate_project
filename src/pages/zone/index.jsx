import { ArrowLeft } from "lucide-react";
import ZoneSelector from "../../components/zone-selector";

function ZonePage({ activeEnvironment, activeZoneId, onZoneSelect, onBack, lang, copy }) {
  return (
    <section className="section-ornament selector-landing selector-landing-zone">
      <div className="selector-landing-shell px-1 sm:px-0">
        <div className="selector-landing-head mb-5 sm:mb-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-4 text-sm font-semibold text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:bg-white hover:text-[var(--text)]"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.7} />
            {copy.backToEnvironment}
          </button>
        </div>

        <div className="selector-landing-frame rounded-[24px] p-2 sm:rounded-[28px] sm:p-4 lg:p-5">
          <div className="selector-landing-inner rounded-[22px] p-2 sm:rounded-[28px] sm:p-3">
            <ZoneSelector
              zones={activeEnvironment.zones}
              activeZoneId={activeZoneId}
              onZoneChange={onZoneSelect}
              lang={lang}
              label={copy.zoneLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZonePage;
