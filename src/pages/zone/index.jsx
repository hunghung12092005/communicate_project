import { useEffect, useState } from "react";
import { ArrowLeft, Check, Pencil } from "lucide-react";
import BrandMark from "../../components/brand-mark";
import ZoneSelector from "../../components/zone-selector";

const NOTEBOOK_NAME_STORAGE_KEY = "daily-dialogue-notebook-name";
const NAME_PROFANITY_PATTERNS = [
  "dit",
  "djt",
  "dm",
  "dmm",
  "dcm",
  "clm",
  "cc",
  "cac",
  "buoi",
  "lon",
  "cho de",
  "me may",
  "ba may",
  "fuck",
  "fck",
  "shit",
  "bitch",
  "asshole",
  "dick",
  "slut",
];

function normalizeNameForModeration(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ZonePage({ activeEnvironment, activeZoneId, onZoneSelect, onBack, lang, copy }) {
  const zoneCount = activeEnvironment.zones.filter((zone) => zone.id !== "all").length;
  const currentYear = new Date().getFullYear();
  const [notebookName, setNotebookName] = useState("");
  const [draftNotebookName, setDraftNotebookName] = useState("");
  const [isEditingNotebookName, setIsEditingNotebookName] = useState(false);
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedName = window.localStorage.getItem(NOTEBOOK_NAME_STORAGE_KEY)?.trim();

    if (storedName) {
      setNotebookName(storedName);
      setDraftNotebookName(storedName);
      setIsEditingNotebookName(false);
      return;
    }

    setIsEditingNotebookName(true);
  }, []);

  const nameCopy =
    lang === "vi"
      ? {
          placeholder: "Viết họ tên của bạn",
          missing: "Bạn cần điền họ tên vào nhãn vở trước khi chọn khu vực.",
          short: "Hãy nhập họ tên rõ ràng, tối thiểu 2 từ.",
          format: "Họ tên chỉ nên chứa chữ cái, khoảng trắng, dấu gạch nối hoặc dấu nháy đơn.",
          profanity: "Tên không được chứa từ ngữ tục tĩu hoặc trái thuần phong mỹ tục.",
          save: "Lưu họ tên",
          edit: "Sửa họ tên",
        }
      : {
          placeholder: "Write your full name",
          missing: "Please enter your full name on the notebook label before choosing a zone.",
          short: "Please enter a clear full name with at least two words.",
          format: "Names should only contain letters, spaces, hyphens, or apostrophes.",
          profanity: "Names cannot contain profanity or offensive language.",
          save: "Save name",
          edit: "Edit name",
        };

  const validateNotebookName = (value) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return nameCopy.missing;
    }

    if (trimmed.length < 5 || trimmed.split(/\s+/).length < 2) {
      return nameCopy.short;
    }

    if (!/^[\p{L}\s'-]+$/u.test(trimmed)) {
      return nameCopy.format;
    }

    const normalized = normalizeNameForModeration(trimmed);

    if (NAME_PROFANITY_PATTERNS.some((pattern) => normalized.includes(pattern))) {
      return nameCopy.profanity;
    }

    return "";
  };

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
  const mobileModalCopy =
    lang === "vi"
      ? {
          title: "Điền họ tên trước khi chọn khu vực",
          body: "Nhập họ tên phù hợp để tiếp tục sang bước tình huống.",
        }
      : {
          title: "Enter your name before choosing a zone",
          body: "Add a suitable full name before continuing to the scenario step.",
        };

  const handleStartNotebookNameEdit = () => {
    setDraftNotebookName(notebookName);
    setIsEditingNotebookName(true);
  };

  const handleSaveNotebookName = () => {
    const nextName = draftNotebookName.trim();
    const validationMessage = validateNotebookName(nextName);

    if (validationMessage) {
      setNameError(validationMessage);
      setIsEditingNotebookName(true);
      return false;
    }

    setNameError("");
    setNotebookName(nextName);
    setDraftNotebookName(nextName);
    setIsEditingNotebookName(false);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(NOTEBOOK_NAME_STORAGE_KEY, nextName);
    }

    return true;
  };

  const handleZoneSelectWithValidation = (zoneId) => {
    const candidateName = isEditingNotebookName ? draftNotebookName : notebookName;
    const validationMessage = validateNotebookName(candidateName);

    if (validationMessage) {
      setNameError(validationMessage);
      setIsEditingNotebookName(true);
      return;
    }

    if (isEditingNotebookName) {
      const saved = handleSaveNotebookName();

      if (!saved) {
        return;
      }
    }

    onZoneSelect(zoneId);
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
              <div className="zone-stage-note zone-stage-book hidden rounded-[24px] border border-[var(--line)] bg-[rgba(255,252,247,0.74)] p-5 sm:p-6 lg:block">
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
                            onChange={(event) => {
                              setDraftNotebookName(event.target.value);
                              if (nameError) {
                                setNameError("");
                              }
                            }}
                            onBlur={handleSaveNotebookName}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                handleSaveNotebookName();
                              }
                            }}
                            className="zone-notebook-line-input"
                            maxLength={28}
                            placeholder={nameCopy.placeholder}
                            aria-invalid={Boolean(nameError)}
                            autoFocus
                          />
                          <button
                            type="button"
                            onClick={handleSaveNotebookName}
                            className="zone-notebook-line-action"
                            aria-label={nameCopy.save}
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
                            aria-label={nameCopy.edit}
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
                    {nameError ? (
                      <p className="zone-notebook-warning" role="alert">
                        {nameError}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="zone-stage-grid rounded-[24px] border border-[rgba(127,79,51,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.48),rgba(255,255,255,0.22))] p-2.5 sm:p-3">
                <ZoneSelector
                  zones={activeEnvironment.zones}
                  activeZoneId={activeZoneId}
                  onZoneChange={handleZoneSelectWithValidation}
                  lang={lang}
                  label={copy.zoneLabel}
                />
              </div>
            </div>

            {isEditingNotebookName ? (
              <div className="zone-name-modal fixed inset-0 z-50 grid place-items-center bg-[rgba(34,24,18,0.42)] px-4 lg:hidden">
                <div className="paper-shell paper-grain w-full max-w-md overflow-hidden rounded-[28px] border border-[var(--line)] bg-[rgba(255,250,243,0.96)] p-5 shadow-[0_28px_60px_rgba(49,34,16,0.22)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {notebookLabelCopy.nameLabel}
                  </p>
                  <h3 className="mt-3 max-w-[12ch] font-[var(--font-display)] text-[2.2rem] leading-[0.95] tracking-[-0.05em] text-[var(--text)]">
                    {mobileModalCopy.title}
                  </h3>
                  <p className="mt-3 max-w-[28ch] text-sm leading-7 text-[var(--text-soft)]">
                    {mobileModalCopy.body}
                  </p>

                  <div className="mt-5 rounded-[22px] border border-[var(--line)] bg-white/72 px-4 py-4">
                    <input
                      value={draftNotebookName}
                      onChange={(event) => {
                        setDraftNotebookName(event.target.value);
                        if (nameError) {
                          setNameError("");
                        }
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleSaveNotebookName();
                        }
                      }}
                      className="w-full border-0 border-b border-dashed border-[rgba(76,48,30,0.24)] bg-transparent pb-2 font-[var(--font-display)] text-[1.15rem] text-[var(--text)] outline-none"
                      maxLength={28}
                      placeholder={nameCopy.placeholder}
                      aria-invalid={Boolean(nameError)}
                      autoFocus
                    />
                    {nameError ? (
                      <p className="zone-notebook-warning mt-3" role="alert">
                        {nameError}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={handleSaveNotebookName}
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--surface-inverse)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(36,28,22,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(36,28,22,0.22)]"
                  >
                    <Check className="h-4 w-4" strokeWidth={1.9} />
                    {nameCopy.save}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZonePage;
