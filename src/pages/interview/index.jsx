import { ArrowLeft } from "lucide-react";
import InterviewQuestionBook from "../../components/interview-question-book";

function InterviewPage({ lang, questions, onBack, onStartFlow }) {
  const copy =
    lang === "vi"
      ? {
          back: "Về giới thiệu",
          start: "Mở flow tình huống",
        }
      : {
          back: "Back to intro",
          start: "Open scenario flow",
        };

  return (
    <section className="section-ornament">
      <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-5 sm:px-0 sm:pb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-4 text-sm font-semibold text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:bg-white hover:text-[var(--text)]"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.7} />
          {copy.back}
        </button>

        <button
          type="button"
          onClick={onStartFlow}
          className="inline-flex min-h-11 items-center rounded-full border border-[var(--line)] bg-[var(--surface-inverse)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(36,28,22,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(36,28,22,0.22)]"
        >
          {copy.start}
        </button>
      </div>

      <InterviewQuestionBook lang={lang} questions={questions} />
    </section>
  );
}

export default InterviewPage;
