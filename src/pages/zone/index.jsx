import { useEffect, useState } from "react";
import { ArrowLeft, Check, Pencil } from "lucide-react";
import BrandMark from "../../components/brand-mark";
import ZoneSelector from "../../components/zone-selector";

const NOTEBOOK_NAME_STORAGE_KEY = "daily-dialogue-notebook-name";

function ZonePage({ activeEnvironment, activeZoneId, onZoneSelect, onBack, lang, copy }) {
  const zoneCount = activeEnvironment.zones.filter((zone) => zone.id !== "all").length;
  const currentYear = new Date().getFullYear();
  const defaultNotebookName = "Office Armor User";
  const [notebookName, setNotebookName] = useState(defaultNotebookName);
  const [draftNotebookName, setDraftNotebookName] = useState(defaultNotebookName);
  const [isEditingNotebookName, setIsEditingNotebookName] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedName = window.localStorage.getItem(NOTEBOOK_NAME_STORAGE_KEY)?.trim();

    if (storedName) {
      setNotebookName(storedName);
      setDraftNotebookName(storedName);
    }
  }, []);

  const notebookLabelCopy =
    lang === "vi"
      ? {
          schoolLabel: "Trường:",
          schoolValue: "dialogue",
          classLabel: "Lớp:",
          classValue: "Giao tiếp",
          subjectLabel: "Môn:",
          subjectValue: activeEnvironment.title.vi,
          nameLabel: "Họ tên:",
          yearLabel: "Năm học:",
          yearValue: String(currentYear),
        }
      : {
          schoolLabel: "School:",
          schoolValue: "dialogue",
          classLabel: "Class:",
          classValue: "Daily Dialogue",
          subjectLabel: "Subject:",
          subjectValue: activeEnvironment.title.en,
          nameLabel: "Name:",
          yearLabel: "Year:",
          yearValue: String(currentYear),
        };
  const coverCopy =
    lang === "vi"
      ? {
          notebook: "Trường dialogue",
          prepared: "Lớp: Giao tiếp hàng ngày",
        }
      : {
          notebook: "Dialogue schoolbook",
          prepared: "Class: Daily Dialogue",
        };

  const handleStartNotebookNameEdit = () => {
    setDraftNotebookName(notebookName);
    setIsEditingNotebookName(true);
  };

  const handleSaveNotebookName = () => {
    const nextName = draftNotebookName.trim() || defaultNotebookName;

    setNotebookName(nextName);
    setDraftNotebookName(nextName);
    setIsEditingNotebookName(false);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(NOTEBOOK_NAME_STORAGE_KEY, nextName);
    }
  };

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
            <div className="zone-stage grid gap-4 px-2 pb-2 pt-1 sm:px-3 sm:pb-3 sm:pt-2 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-5">
              <div className="zone-stage-note zone-stage-book rounded-[24px] border border-[var(--line)] bg-[rgba(255,252,247,0.74)] p-5 sm:p-6">
                <span aria-hidden="true" className="zone-book-spine" />
                <span aria-hidden="true" className="zone-book-page zone-book-page-one" />
                <span aria-hidden="true" className="zone-book-page zone-book-page-two" />
                <span aria-hidden="true" className="zone-book-seal" />
                <div className="zone-book-content relative z-[1]">
                  <div className="zone-cover-top">
                    <p className="zone-cover-kicker">{coverCopy.notebook}</p>
                    <div className="zone-cover-band">
                      <span>{coverCopy.prepared}</span>
                    </div>
                  </div>
                  <div className="zone-cover-brand">
                    <BrandMark className="zone-cover-brandmark" />
                  </div>
                  <div className="zone-cover-title">
                    <h2 className="zone-cover-heading">
                      {lang == "vi" ? "Bài học " : "Lesson "} {activeEnvironment.title[lang]}
                    </h2>
                  </div>
                  <div className="zone-notebook-label">
                    <span aria-hidden="true" className="zone-notebook-sun" />
                    <span aria-hidden="true" className="zone-notebook-cup">
                      <span className="zone-notebook-cup-count">{String(zoneCount).padStart(2, "0")}</span>
                    </span>
                    <div className="zone-notebook-line zone-notebook-line-school">
                      <span className="zone-notebook-line-label">{notebookLabelCopy.schoolLabel}</span>
                      <span className="zone-notebook-line-dots" />
                      <span className="zone-notebook-line-value">{notebookLabelCopy.schoolValue}</span>
                    </div>
                    <div className="zone-notebook-line zone-notebook-line-split">
                      <div className="zone-notebook-line-segment">
                        <span className="zone-notebook-line-label">{notebookLabelCopy.classLabel}</span>
                        <span className="zone-notebook-line-dots" />
                        <span className="zone-notebook-line-value">{notebookLabelCopy.classValue}</span>
                      </div>
                      <div className="zone-notebook-line-segment">
                        <span className="zone-notebook-line-label">{notebookLabelCopy.subjectLabel}</span>
                        <span className="zone-notebook-line-dots" />
                        <span className="zone-notebook-line-value">{notebookLabelCopy.subjectValue}</span>
                      </div>
                    </div>
                    <div className="zone-notebook-line zone-notebook-line-name">
                      <span className="zone-notebook-line-label">{notebookLabelCopy.nameLabel}</span>
                      <span className="zone-notebook-line-dots" />
                      {isEditingNotebookName ? (
                        <span className="zone-notebook-line-edit">
                          <input
                            value={draftNotebookName}
                            onChange={(event) => setDraftNotebookName(event.target.value)}
                            onBlur={handleSaveNotebookName}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                handleSaveNotebookName();
                              }
                            }}
                            className="zone-notebook-line-input"
                            maxLength={28}
                            autoFocus
                          />
                          <button
                            type="button"
                            onClick={handleSaveNotebookName}
                            className="zone-notebook-line-action"
                            aria-label={lang === "vi" ? "Lưu họ tên" : "Save name"}
                          >
                            <Check className="h-[18px] w-[18px]" strokeWidth={2} />
                          </button>
                        </span>
                      ) : (
                        <span className="zone-notebook-line-edit">
                          <span className="zone-notebook-line-value">{notebookName}</span>
                          <button
                            type="button"
                            onClick={handleStartNotebookNameEdit}
                            className="zone-notebook-line-action"
                            aria-label={lang === "vi" ? "Sửa họ tên" : "Edit name"}
                          >
                            <Pencil className="h-[18px] w-[18px]" strokeWidth={1.9} />
                          </button>
                        </span>
                      )}
                    </div>
                    <div className="zone-notebook-line zone-notebook-line-year">
                      <span className="zone-notebook-line-label">{notebookLabelCopy.yearLabel}</span>
                      <span className="zone-notebook-line-dots" />
                      <span className="zone-notebook-line-value">{notebookLabelCopy.yearValue}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="zone-stage-grid rounded-[24px] border border-[rgba(127,79,51,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.48),rgba(255,255,255,0.22))] p-2.5 sm:p-3">
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
        </div>
      </div>
    </section>
  );
}

export default ZonePage;
