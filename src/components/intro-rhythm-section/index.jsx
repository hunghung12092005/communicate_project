function IntroRhythmSection({ lang, copy, bloomNotes }) {
  const rhythmLead =
    lang === "vi"
      ? "Không cần câu quá hay. Chỉ cần giữ nhịp ổn."
      : "You do not need the perfect line. You need a steady pace.";

  const rhythmMiniNotes =
    lang === "vi"
      ? [
          { id: "cadence", label: "Nhịp", body: "Nói ngắn, dừng nhẹ." },
          { id: "focus", label: "Trục", body: "Giữ một hướng trong mỗi lượt." },
        ]
      : [
          { id: "cadence", label: "Cadence", body: "Short line, small pause." },
          { id: "focus", label: "Focus", body: "Keep one thread per turn." },
        ];

  return (
    <section className="section-ornament overflow-hidden">
      <div className="grid gap-px bg-[var(--line)] xl:grid-cols-[0.82fr_1.18fr]">
        <div className="rhythm-shell bg-[var(--surface)] px-4 py-6 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                {copy.rhythm.tag}
              </p>
              <h2 className="mt-3 max-w-[7ch] text-balance font-[var(--font-display)] text-[2.45rem] font-semibold leading-[0.9] tracking-[-0.055em] text-[var(--text)] sm:mt-4 sm:max-w-[8ch] sm:text-[4rem]">
                {lang === "vi" ? "Giữ nhịp nhỏ." : "Keep it small."}
              </h2>
              <p className="mt-3 max-w-[22ch] text-[0.94rem] leading-6 text-[var(--text-soft)] sm:mt-4 sm:max-w-[24ch] sm:text-base sm:leading-8">
                {rhythmLead}
              </p>
            </div>

            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {rhythmMiniNotes.map((note, index) => (
                <article
                  key={note.id}
                  className={`rounded-[22px] px-4 py-4 sm:rounded-[24px] sm:px-5 ${
                    index === 0
                      ? "border border-[var(--line)] bg-white/56"
                      : "rhythm-ink-card text-white"
                  }`}
                >
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${index === 0 ? "text-[var(--text-soft)]" : "text-white/58"}`}>
                    {note.label}
                  </p>
                  <p className={`mt-5 max-w-[12ch] text-base font-semibold leading-6 tracking-[-0.04em] sm:mt-8 sm:text-lg ${index === 0 ? "text-[var(--text)]" : "text-white"}`}>
                    {note.body}
                  </p>
                </article>
              ))}
            </div>

           
          </div>
        </div>

        <div className="bg-[var(--surface-muted)] p-3 sm:p-4">
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rhythm-stage relative overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
              <div className="bloom-panel">
                <div className="chapter-bloom hidden lg:block" aria-hidden="true">
                  <span className="bloom-petal bloom-petal-one" />
                  <span className="bloom-petal bloom-petal-two" />
                  <span className="bloom-petal bloom-petal-three" />
                  <span className="bloom-petal bloom-petal-four" />
                  <span className="bloom-core" />
                  <span className="bloom-stem" />
                </div>

                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                      {lang === "vi" ? "Mở, giữ, dừng" : "Open, hold, stop"}
                    </p>
                    <p className="mt-2 max-w-[18ch] text-sm leading-6 text-[var(--text-soft)]">
                      {lang === "vi" ? "Ba nhịp đủ dùng cho hầu hết tình huống." : "Three beats handle most moments."}
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-[var(--line)] bg-white/58 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)] sm:block">
                    daily.dialogue
                  </div>
                </div>

                <div className="book-stage book-stage-soft hidden min-h-[240px] sm:flex sm:min-h-[280px]">
                  <div className="book-shell book-shell-soft book-shell-rhythm scale-[0.82] sm:scale-[0.9] lg:scale-100">
                    <div className="book-spine" />
                    <div className="book-cover">
                      <div className="book-cover-inner">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-black/55">{copy.rhythm.tag}</span>
                        <p className="mt-4 max-w-[8ch] font-[var(--font-display)] text-3xl leading-[0.92] tracking-[-0.05em] text-zinc-950">
                          {lang === "vi" ? "Giữ nhịp vừa." : "Keep the pace gentle."}
                        </p>
                      </div>
                    </div>
                    {bloomNotes.map((note, index) => (
                      <div key={note.id} className={`book-page ${index === 0 ? "book-page-one" : "book-page-two"}`}>
                        <div className="book-page-content">
                          {note.index}
                          <span>{note.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid content-start gap-4">
              {copy.rhythm.notes.map((note, index) => (
                <article
                  key={note.title}
                  className={`rounded-[24px] px-4 py-4 sm:rounded-[28px] sm:px-5 sm:py-5 ${
                    index === 0
                      ? "rhythm-side-card border border-[var(--line)] bg-[rgba(255,252,247,0.72)]"
                      : "border border-[var(--surface-inverse)] bg-[var(--surface-inverse)] text-white"
                  }`}
                >
                  <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${index === 0 ? "text-[var(--accent-strong)]" : "text-white/58"}`}>
                    {note.label}
                  </p>
                  <h3 className={`mt-5 max-w-[10ch] text-[1.35rem] font-semibold leading-[0.94] tracking-[-0.045em] sm:mt-10 sm:text-[1.7rem] ${index === 0 ? "text-[var(--text)]" : "text-white"}`}>
                    {note.title}
                  </h3>
                  <p className={`mt-2 max-w-[18ch] text-sm leading-6 sm:mt-3 ${index === 0 ? "text-[var(--text-soft)]" : "text-white/74"}`}>
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroRhythmSection;
