function ZoneSelector({ zones, activeZoneId, onZoneChange, lang, label }) {
  return (
    <div className="zone-selector grid gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        {zones.map((zone, index) => {
          const active = activeZoneId === zone.id;
          const isAllZone = zone.id === "all";

          return (
            <button
              key={zone.id}
              type="button"
              onClick={() => onZoneChange(zone.id)}
              className={`zone-card group relative overflow-hidden rounded-[22px] border p-4 sm:p-5 text-left ${
                active
                  ? "accent-ring border-transparent bg-[rgba(255,252,247,0.92)]"
                  : index % 2 === 0
                    ? "border-[var(--line)] bg-[rgba(255,248,241,0.74)] hover:-translate-y-1 hover:border-[var(--line-strong)]"
                    : "border-[var(--line)] bg-[rgba(255,255,255,0.58)] hover:-translate-y-1 hover:border-[var(--line-strong)]"
              }`}
            >
              <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_bottom,rgba(127,79,51,0.12),transparent_72%)]" />
              <div className="zone-card-thread absolute right-4 top-4 h-10 w-10 rounded-full border border-[rgba(127,79,51,0.1)]" />
              <div className="relative flex h-full flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                      {isAllZone ? label : `0${index + 1}`}
                    </p>
                    <p className="mt-2 font-[var(--font-display)] text-[1.48rem] font-semibold leading-[0.94] tracking-[-0.045em] text-[var(--text)] sm:text-[1.82rem]">
                      {zone.title[lang]}
                    </p>
                  </div>
                  <span
                    className={`mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                      active
                        ? "border-[rgba(127,79,51,0.18)] bg-[rgba(127,79,51,0.08)] text-[var(--text)]"
                        : "border-[var(--line)] bg-white/68 text-[var(--text-soft)]"
                    }`}
                  >
                    {active ? (lang === "vi" ? "Mở" : "Open") : "→"}
                  </span>
                </div>
                <div className="zone-card-rule h-px w-full bg-[linear-gradient(90deg,rgba(127,79,51,0.12),rgba(127,79,51,0.03),transparent)]" />
                <p className="max-w-[28ch] text-[0.94rem] leading-6 text-[var(--text-soft)] sm:text-[0.98rem] sm:leading-7">
                  {zone.subtitle[lang]}
                </p>
                <div className="zone-card-footer flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                    {isAllZone
                      ? lang === "vi"
                        ? "Xem toàn cảnh trước"
                        : "Preview first"
                      : lang === "vi"
                        ? "Điểm chạm cụ thể"
                        : "Specific setting"}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {active ? (lang === "vi" ? "Đang chọn" : "Selected") : label}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ZoneSelector;
