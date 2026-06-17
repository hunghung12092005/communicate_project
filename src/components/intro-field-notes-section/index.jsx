function IntroFieldNotesSection({ lang, copy, doctrineNotes }) {
  const fieldLead =
    lang === "vi"
      ? "Ít chữ hơn, ít mắc kẹt hơn."
      : "Fewer words. Fewer traps.";

  const fieldFooter =
    lang === "vi"
      ? "Nhìn, đáp, rời đi."
      : "See it. Answer it. Leave.";

  const bookLead =
    lang === "vi"
      ? "Ba nguyên tắc ngắn để giữ cuộc nói chuyện không trôi quá xa."
      : "Three short rules to keep the exchange from drifting too far.";

  return (
    <section id="field-notes" className="section-ornament overflow-hidden">
      <div className="bg-[var(--surface)] px-4 py-6 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-[0.74fr_1.26fr] lg:gap-5">
          <div className="field-notes-shell rounded-[28px] px-4 py-5 sm:px-6 sm:py-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              {copy.doctrine.tag}
            </p>
            <h2 className="mt-3 max-w-[7ch] font-[var(--font-display)] text-[2.4rem] font-semibold leading-[0.9] tracking-[-0.055em] text-[var(--text)] sm:mt-4 sm:text-[3.7rem]">
              {lang === "vi" ? "Giữ thể diện." : "Keep your shape."}
            </h2>
            <p className="mt-3 max-w-[18ch] text-[0.94rem] leading-6 text-[var(--text-soft)] sm:mt-4 sm:text-base sm:leading-8">
              {fieldLead}
            </p>

            <div className="field-note-footer mt-6 rounded-[22px] px-4 py-4 sm:mt-8 sm:rounded-[24px] sm:px-5 sm:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                {lang === "vi" ? "Lối thoát" : "Exit line"}
              </p>
              <p className="mt-2 font-[var(--font-display)] text-[1.6rem] leading-[0.95] tracking-[-0.045em] text-[var(--text)] sm:mt-3 sm:text-[1.9rem]">
                {fieldFooter}
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="field-notebook-stack">
              <span aria-hidden="true" className="field-notebook-sheet field-notebook-sheet-back hidden sm:block" />
              <span aria-hidden="true" className="field-notebook-sheet field-notebook-sheet-front hidden sm:block" />
              <div className="field-notebook-panel relative overflow-hidden rounded-[30px] border border-[var(--line)] p-5 sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),transparent_34%)]" />
                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[rgba(92,72,47,0.12)] pb-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                        {lang === "vi" ? "Notebook" : "Spine note"}
                      </p>
                      <p className="mt-2 max-w-[22ch] text-sm leading-6 text-[var(--text-soft)]">
                        {bookLead}
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-[var(--line)] bg-white/72 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)] sm:block">
                      daily.dialogue
                    </div>
                  </div>

                  <div className="grid gap-4 pt-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-5">
                    <div className="book-stage book-stage-soft hidden min-h-[210px] sm:flex">
                      <div className="book-shell book-shell-soft scale-[0.86] sm:scale-100">
                        <div className="book-spine" />
                        <div className="book-cover">
                          <div className="book-cover-inner">
                            <span className="text-[10px] uppercase tracking-[0.22em] text-black/55">{copy.doctrine.tag}</span>
                            <p className="mt-4 max-w-[8ch] font-[var(--font-display)] text-3xl leading-[0.92] tracking-[-0.05em] text-zinc-950">
                              {lang === "vi" ? "Giữ thể diện." : "Keep your dignity."}
                            </p>
                          </div>
                        </div>
                        {doctrineNotes.map((note, index) => (
                          <div
                            key={note.id}
                            className={`book-page ${index === 0 ? "book-page-one" : index === 1 ? "book-page-two" : "book-page-three"}`}
                          >
                            <div className="book-page-content">
                              {note.index}
                              <span>{note.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-2.5 sm:gap-3">
                      {doctrineNotes.map((note, index) => (
                        <article
                          key={note.id}
                          className={`rounded-[22px] px-4 py-4 sm:rounded-[24px] ${
                            index === 1
                              ? "field-note-highlight border border-[rgba(76,58,38,0.16)]"
                              : "border border-[rgba(92,72,47,0.12)] bg-[rgba(255,255,255,0.52)]"
                          }`}
                        >
                          <div className="flex items-baseline justify-between gap-3">
                            <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${index === 1 ? "text-[var(--accent-strong)]" : "text-[var(--text-soft)]"}`}>
                              {note.index}
                            </p>
                            <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${index === 1 ? "text-[var(--accent-strong)]" : "text-[var(--text-soft)]/70"}`}>
                              {copy.doctrine.tag}
                            </p>
                          </div>
                          <h3 className="mt-4 text-[1.08rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--text)] sm:mt-5 sm:text-[1.2rem]">
                            {note.title}
                          </h3>
                          <p className="mt-2 max-w-[24ch] text-sm leading-6 text-[var(--text-soft)]">{note.body}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden gap-4 sm:grid">
              <div className="margin-note rounded-[26px] border border-[var(--line)] bg-[rgba(255,252,247,0.74)] px-5 py-5 text-sm leading-7 text-[var(--text-soft)]">
                {lang === "vi" ? "Quan sát trước, trả lời sau, rời đi đúng lúc." : "Observe first, answer second, leave on time."}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default IntroFieldNotesSection;
