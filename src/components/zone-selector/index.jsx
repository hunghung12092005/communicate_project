function ZoneSelector({ zones, activeZoneId, onZoneChange, lang, label }) {
  return (
    <div className="zone-selector grid gap-3 sm:gap-4 md:grid-cols-2">
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
        {zones.map((zone, index) => {
          const active = activeZoneId === zone.id;

          return (
            <button
              key={zone.id}
              type="button"
              onClick={() => onZoneChange(zone.id)}
              className={`zone-card group relative overflow-hidden rounded-[24px] border p-4 sm:rounded-[28px] sm:p-6 text-left ${
                active
                  ? "accent-ring border-transparent bg-[var(--surface)]"
                  : index % 2 === 0
                    ? "border-[var(--line)] bg-[rgba(255,248,241,0.82)] hover:-translate-y-1 hover:border-[var(--line-strong)]"
                    : "border-[var(--line)] bg-[rgba(255,255,255,0.6)] hover:-translate-y-1 hover:border-[var(--line-strong)]"
              }`}
            >
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_bottom,rgba(127,79,51,0.12),transparent_70%)]" />
              <div className="relative flex h-full flex-col justify-between gap-5 sm:gap-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                    0{index + 1}
                  </p>
                  <p className="mt-3 font-[var(--font-display)] text-[1.65rem] font-semibold leading-[0.92] tracking-[-0.05em] text-[var(--text)] sm:mt-5 sm:text-[2rem]">
                    {zone.title[lang]}
                  </p>
                </div>
                <p className="max-w-[24ch] text-[0.96rem] leading-7 text-[var(--text-soft)] sm:max-w-[26ch] sm:text-base sm:leading-8">{zone.subtitle[lang]}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ZoneSelector;
