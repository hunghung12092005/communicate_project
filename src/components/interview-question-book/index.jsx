import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpenText } from "lucide-react";

function InterviewQuestionBook({ lang = "vi", questions = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [lang, questions]);

  const copy =
    lang === "vi"
      ? {
          eyebrow: "Phỏng vấn hành vi",
          title: "Quy trình phỏng vấn hành vi.",
          body: "Bộ 5 câu hỏi thường gặp để luyện cách kể tình huống, hành động và kết quả thật mạch lạc.",
          noteTitle: "Gợi ý dùng nhanh",
          noteBody: "Chưa cần đáp án mẫu. Hãy trả lời theo nhịp tình huống, hành động và kết quả để câu chuyện gọn và rõ hơn.",
          pageLabel: "Trang",
          stackLabel: "5 câu hỏi hay gặp",
          prev: "Câu trước",
          next: "Câu tiếp",
          complete: "Hết bộ câu hỏi",
          leftPageTitle: "Sổ luyện phỏng vấn hành vi",
          leftPageBody: "Mỗi lượt một câu hỏi để bạn tập kể lại trải nghiệm thật, giữ câu trả lời có cấu trúc và không lan man.",
          marginNote: "Nói theo 3 nhịp: bối cảnh, việc bạn làm, kết quả cuối cùng.",
        }
      : {
          eyebrow: "Behavioral interview",
          title: "Behavioral interview flow.",
          body: "A set of five common questions to help you practice clear stories with situation, action, and result.",
          noteTitle: "Quick use",
          noteBody: "No model answers yet. Answer with a clear situation, the action you took, and the result you reached.",
          pageLabel: "Page",
          stackLabel: "5 common questions",
          prev: "Previous",
          next: "Next",
          complete: "End of set",
          leftPageTitle: "Behavioral interview folio",
          leftPageBody: "One question at a time so you can practice real examples and keep each answer structured instead of drifting.",
          marginNote: "Use three beats: situation, action, and result.",
        };

  const totalQuestions = questions.length;
  const activeQuestion = questions[activeIndex] ?? null;

  if (!activeQuestion) {
    return null;
  }

  return (
    <section className="section-ornament interview-shell">
      <div className="paper-shell paper-grain interview-shell-frame overflow-hidden border border-[var(--line)] bg-[rgba(255,249,242,0.84)] p-3 sm:p-4 lg:p-5">
        <div className="interview-shell-inner relative overflow-hidden rounded-[26px] border border-[rgba(255,255,255,0.55)] bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(246,237,225,0.68))] p-5 sm:p-7 lg:p-8">
          <div className="interview-book-spread interview-book-hinge book-spread rounded-[28px] border border-[var(--line)] bg-[rgba(255,252,247,0.88)] p-3 sm:p-4 lg:p-5">
            <div className="interview-book-grid relative grid gap-3 md:grid-cols-2 md:gap-0">
              <article className="interview-question-page interview-book-page interview-page-left page-rule relative min-h-[380px] rounded-[24px] border border-[rgba(112,86,54,0.12)] px-6 pb-6 pt-7 shadow-[0_18px_40px_rgba(68,49,27,0.06)] sm:min-h-[470px] sm:px-8 sm:pb-8 sm:pt-8 md:rounded-r-[10px]">
                <div className="interview-page-doodle interview-page-doodle-top" aria-hidden="true" />
                <div className="interview-page-doodle interview-page-doodle-bottom" aria-hidden="true" />
                <div className="interview-page-edge interview-page-edge-left" aria-hidden="true" />
                <div className="interview-page-head interview-page-head-left relative z-[1]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    <BookOpenText className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {copy.eyebrow}
                  </div>
                  <h2 className="mt-5 max-w-[9ch] font-[var(--font-display)] text-[2.7rem] leading-[0.94] tracking-[-0.055em] text-[var(--text)] sm:text-[3.5rem]">
                    {copy.leftPageTitle}
                  </h2>
                  <p className="mt-4 max-w-[25ch] text-[0.98rem] leading-8 text-[var(--text-soft)] sm:text-[1.05rem] sm:leading-9">
                    {copy.leftPageBody}
                  </p>
                </div>

                <div className="interview-note-sheet interview-note-sheet-simple relative z-[1] mt-10 px-1 sm:mt-12">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {copy.noteTitle}
                  </p>
                 
                </div>

                <div className="interview-page-footer relative z-[1] mt-10 flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-[var(--line)] bg-white/62 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
                    {copy.stackLabel}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                    {activeIndex + 1}/{totalQuestions}
                  </span>
                </div>
              </article>

              <article className="interview-question-page interview-book-page interview-page-right page-rule relative min-h-[380px] rounded-[24px] border border-[rgba(112,86,54,0.12)] px-6 pb-6 pt-7 shadow-[0_18px_40px_rgba(68,49,27,0.06)] sm:min-h-[470px] sm:px-8 sm:pb-8 sm:pt-8 md:rounded-l-[10px]">
                <div className="interview-page-doodle interview-page-doodle-top-right" aria-hidden="true" />
                <div className="interview-page-doodle interview-page-doodle-bottom-right" aria-hidden="true" />
                <div className="interview-page-edge interview-page-edge-right" aria-hidden="true" />

                <div className="interview-page-head relative z-[1] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {copy.pageLabel} {activeQuestion.number}
                  </span>
                  <span className="rounded-full border border-[var(--line)] bg-white/7 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                    {copy.title}
                  </span>
                </div>

                <div className="interview-question-sheet interview-question-sheet-centered relative z-[1] mt-8">
                  <div className="interview-margin-line interview-margin-line-right" aria-hidden="true" />
                  <div className="interview-question-copy interview-question-copy-centered min-h-[200px] pl-8 sm:min-h-[250px] sm:pl-12">
                    <p className="max-w-[19ch] font-[var(--font-display)] text-[2.05rem] leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-[2.7rem]">
                      {activeQuestion.prompt[lang]}
                    </p>
                  </div>
                </div>

                <div className="interview-page-footer relative z-[1] mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveIndex((current) => Math.max(0, current - 1))}
                    disabled={activeIndex === 0}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white/68 px-4 text-sm font-semibold text-[var(--text-soft)] disabled:cursor-not-allowed disabled:opacity-40 hover:border-[var(--line-strong)] hover:bg-white hover:text-[var(--text)]"
                  >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.7} />
                    {copy.prev}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((current) => Math.min(totalQuestions - 1, current + 1))}
                    disabled={activeIndex === totalQuestions - 1}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-inverse)] px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(36,28,22,0.18)]"
                  >
                    {activeIndex === totalQuestions - 1 ? copy.complete : copy.next}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InterviewQuestionBook;
