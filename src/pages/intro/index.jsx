import { ArrowRight, Waypoints } from "lucide-react";
import IntroFieldNotesSection from "../../components/intro-field-notes-section";
import IntroRhythmSection from "../../components/intro-rhythm-section";
import LibraryRibbon from "../../components/library-ribbon";

function IntroPage({
  heroRef,
  lang,
  copy,
  books,
  scenarioCount,
  onStart,
}) {
  const shortHeroBody =
    lang === "vi"
      ? "Gợi ý ngắn để mở lời, giữ nhịp, rồi kết thúc gọn."
      : "Short cues to start, keep rhythm, and end cleanly.";

  const missionTitle =
    lang === "vi" ? "Nói ít. Trúng ý." : "Say less. Mean more.";

  const missionBullets =
    lang === "vi"
      ? ["Nói vừa đủ", "Nhìn phản ứng", "Khép lại lịch sự"]
      : ["Say enough", "Read reactions", "Close politely"];

  const doctrineNotes =
    lang === "vi"
      ? [
          { id: "d-1", index: "01", title: "Ngắn", body: "Một câu là đủ." },
          { id: "d-2", index: "02", title: "Động", body: "Đổi vị trí để thoát nhịp." },
          { id: "d-3", index: "03", title: "Gọn", body: "Kết thúc trước khi quá dài." },
        ]
      : [
          { id: "d-1", index: "01", title: "Brief", body: "One sentence is enough." },
          { id: "d-2", index: "02", title: "Move", body: "Shift position to break rhythm." },
          { id: "d-3", index: "03", title: "Clean", body: "End it before it drags." },
        ];

  const bloomNotes =
    lang === "vi"
      ? [
          { id: "b-1", index: "01", title: "Mềm", body: "Nói vừa đủ để giữ nhịp nhẹ." },
          { id: "b-2", index: "02", title: "Thoáng", body: "Để đối phương có lối rẽ dễ chịu." },
        ]
      : [
          { id: "b-1", index: "01", title: "Soft", body: "Say only enough to keep the tone light." },
          { id: "b-2", index: "02", title: "Open", body: "Leave the other person an easy turn." },
        ];

  return (
    <>
      <section ref={heroRef} className="section-ornament hero-shell overflow-hidden">
        <div className="px-4 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-4 lg:gap-6 xl:grid-cols-[0.98fr_1.02fr]">
            <div className="flex flex-col justify-between gap-5">
              <div>
                <h1 className="hero-headline max-w-[8ch] text-balance font-[var(--font-display)] text-[2.55rem] font-semibold leading-[0.9] tracking-[-0.055em] text-[var(--text)] sm:max-w-[9ch] sm:text-[4.4rem] lg:text-[5.6rem]">
                  {copy.hero.heroTitle}
                </h1>
                <p className="hero-copy mt-3 max-w-[19ch] text-[0.94rem] leading-6 text-[var(--text-soft)] sm:mt-5 sm:max-w-[20ch] sm:text-[1.04rem] sm:leading-8">
                  {shortHeroBody}
                </p>
              </div>

              <div className="grid gap-3">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
                  <button
                    type="button"
                    onClick={onStart}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full bg-[var(--surface-inverse)] px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(36,28,22,0.22)] active:translate-y-px sm:min-h-12 sm:w-auto sm:px-6 sm:text-[11px] sm:tracking-[0.2em]"
                  >
                    <Waypoints className="h-4 w-4" strokeWidth={1.8} />
                    {copy.hero.runFirstScenario}
                  </button>
                  <a
                    href="#field-notes"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full border border-[var(--line)] bg-white/52 px-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text)] hover:border-[var(--line-strong)] hover:bg-white sm:min-h-12 sm:w-auto sm:px-5 sm:text-[11px] sm:tracking-[0.2em]"
                  >
                    <ArrowRight className="h-4 w-4 text-[var(--accent)]" strokeWidth={1.8} />
                    {copy.hero.noteButton}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="hero-doctrine-panel relative overflow-hidden border border-[var(--line)] p-4 sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.64),transparent_42%)]" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                        {copy.hero.liveDoctrine}
                      </p>
                      <p className="mt-2 max-w-[18ch] text-sm leading-6 text-[var(--text-soft)]">
                        {lang === "vi"
                          ? "Playbook nhỏ để giữ cuộc nói chuyện đúng hướng."
                          : "A compact playbook to keep the exchange on track."}
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-[var(--line)] bg-white/56 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)] sm:block sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                      daily.dialogue
                    </div>
                  </div>

                  <div className="hero-book-panel mt-5 hidden sm:block">
                    <span aria-hidden="true" className="hero-book-ornament hero-book-ornament-crest" />
                    <span aria-hidden="true" className="hero-book-ornament hero-book-ornament-quill" />
                    <span aria-hidden="true" className="hero-book-corner hero-book-corner-top" />
                    <span aria-hidden="true" className="hero-book-corner hero-book-corner-bottom" />
                    <div className="book-stage book-stage-soft hero-book-stage">
                      <div className="book-shell book-shell-soft book-shell-hero">
                        <div className="book-spine" />
                        <div className="book-cover">
                          <div className="book-cover-inner">
                            <span className="text-[10px] uppercase tracking-[0.22em] text-black/55">
                              {lang === "vi" ? "Sổ tay giao tiếp" : "Daily dialogue notes"}
                            </span>
                            <p className="mt-4 max-w-[9ch] font-[var(--font-display)] text-3xl leading-[0.92] tracking-[-0.05em] text-zinc-950">
                              {lang === "vi" ? "Xử lý giao tiếp." : "Handling conversations."}
                            </p>
                          </div>
                        </div>
                        <div className="book-flip-sheet book-flip-sheet-one" aria-hidden="true" />
                        <div className="book-flip-sheet book-flip-sheet-two" aria-hidden="true" />
                        {doctrineNotes.map((note, index) => (
                          <div
                            key={note.id}
                            className={`book-page ${
                              index === 0 ? "book-page-one" : index === 1 ? "book-page-two" : "book-page-three"
                            }`}
                          >
                            <div className="book-page-content">
                              <strong>{note.index}</strong>
                              <span>{note.title}</span>
                              <ul className="book-page-data">
                                <li>{note.body}</li>
                                <li>{lang === "vi" ? "Giữ nhịp gọn và tự nhiên." : "Keep the rhythm short and natural."}</li>
                                <li>{lang === "vi" ? "Dừng trước khi câu chuyện quá dài." : "Stop before the exchange drags."}</li>
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[22px] border border-[var(--line)] bg-white/58 px-4 py-4 sm:rounded-[24px] sm:px-5 sm:py-5">
                      <p className="text-[2.7rem] font-semibold leading-none tracking-[-0.08em] text-[var(--text)] sm:text-[3.35rem]">
                        {String(scenarioCount).padStart(2, "0")}
                      </p>
                      <p className="mt-2 max-w-[16ch] text-sm leading-6 text-[var(--text-soft)] sm:mt-3 sm:max-w-[18ch] sm:leading-7">
                        {copy.hero.scenariosArmed(scenarioCount)}
                      </p>
                    </div>
                    <div className="hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface-inverse)] px-4 py-4 text-white sm:block sm:rounded-[24px] sm:px-5 sm:py-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
                        {lang === "vi" ? "Ghi chú nhanh" : "Quick note"}
                      </p>
                      <p className="mt-2 max-w-[18ch] text-sm leading-6 text-white/84 sm:mt-3 sm:max-w-[22ch] sm:leading-7">
                        {lang === "vi"
                          ? "Bí ý thì nói một câu ngắn, dừng một nhịp rồi thoát."
                          : "Freeze up? Use one short line, pause, then exit."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-support-shell px-4 pb-3 sm:px-8 sm:pb-5 lg:px-10 lg:pb-6">
        <div className="hero-support-grid grid gap-3 lg:grid-cols-[0.76fr_1.14fr_0.82fr]">
          <article className="hero-support-card rounded-[24px] border border-[var(--line)] bg-white/52 p-5 sm:rounded-[28px] sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
              {copy.mission.tag}
            </p>
            <p className="mt-3 max-w-[24ch] text-sm leading-7 text-[var(--text)] sm:mt-4 sm:text-base sm:leading-8">
              {copy.mission.title}
            </p>
          </article>

          <article className="hero-support-card hero-support-rhythm rounded-[24px] border border-[var(--line)] bg-[rgba(255,249,242,0.82)] p-5 sm:rounded-[28px] sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              {copy.rhythm.tag}
            </p>
            <h2 className="mt-3 max-w-[9ch] font-[var(--font-display)] text-[2.15rem] font-semibold leading-[0.94] tracking-[-0.05em] text-[var(--text)] sm:mt-4 sm:max-w-[10ch] sm:text-[2.7rem]">
              {missionTitle}
            </h2>
            <div className="mt-5 grid gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">
              {missionBullets.map((line, index) => (
                <div
                  key={line}
                  className={`rounded-[20px] border p-3 sm:rounded-[22px] sm:p-4 ${
                    index === 1
                      ? "border-[var(--surface-inverse)] bg-[var(--surface-inverse)] text-white"
                      : "border-[var(--line)] bg-white/58 text-[var(--text)]"
                  }`}
                >
                  <p className={`text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px] sm:tracking-[0.2em] ${index === 1 ? "text-white/60" : "text-[var(--text-soft)]"}`}>
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-base font-semibold tracking-[-0.04em] sm:mt-6 sm:text-xl">{line}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="hero-support-card hidden rounded-[24px] border border-[var(--line)] bg-white/58 p-5 sm:block sm:rounded-[28px] sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
              {copy.hero.unitMap}
            </p>
            <div className="mt-4 grid gap-3 sm:mt-5 sm:gap-4">
              {copy.stats.map((stat) => (
                <div key={stat.label} className="flex items-end justify-between gap-3 border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0 sm:gap-4 sm:pb-4">
                  <p className="text-sm text-[var(--text-soft)]">{stat.label}</p>
                  <p className="text-[1.8rem] font-semibold leading-none tracking-[-0.06em] text-[var(--text)] sm:text-[2.2rem]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <LibraryRibbon lang={lang} books={books} />


      <IntroFieldNotesSection
        lang={lang}
        copy={copy}
        doctrineNotes={doctrineNotes}
      />

      <IntroRhythmSection lang={lang} copy={copy} bloomNotes={bloomNotes} />

    </>
  );
}

export default IntroPage;
