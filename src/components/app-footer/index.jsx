import { useMemo, useState } from "react";
import BrandMark from "../brand-mark";

function AppFooter({
  lang = "vi",
  scenarioCount = 0,
  onNavigateIntro,
  onNavigateEnvironment,
  onNavigateInterview,
  onOpenFieldNotes,
}) {
  const [openPanel, setOpenPanel] = useState(null);

  const copy = useMemo(
    () =>
      lang === "vi"
        ? {
            brand: "daily.dialogue",
            tag: "Khoảng khắc giao tiếp khó xử",
            blurb:
              "Một app nhỏ để mở lời, giữ nhịp và rời đi gọn hơn trong các tình huống giao tiếp khó xử thường ngày.",
            navTitle: "Điều hướng",
            nav: [
              { id: "intro", label: "Giới thiệu", onClick: onNavigateIntro },
              { id: "environment", label: "Môi trường", onClick: onNavigateEnvironment },
              { id: "interview dialogue", label: "Phỏng vấn ứng xử", onClick: onNavigateInterview },
              { id: "notes", label: "Field notes", onClick: onOpenFieldNotes },
            ],
            systemTitle: "Hệ thống",
            stats: [
              { label: "Ngôn ngữ", value: "VI / EN" },
              { label: "Tình huống", value: String(scenarioCount).padStart(2, "0") },
              { label: "Trạng thái", value: "Ready" },
            ],
            legalTitle: "Pháp lý",
            privacy: "Chính sách riêng tư",
            terms: "Điều khoản sử dụng",
            privacyBody:
              "daily.dialogue hiện chỉ giữ route hiện tại trên URL và một số trạng thái giao diện tạm thời trong phiên đang mở. Không có tài khoản, thanh toán, localStorage hay thu thập dữ liệu cá nhân trực tiếp trong giao diện này.",
            termsBody:
              "Nội dung trong app mang tính hỗ trợ thực hành giao tiếp. Người dùng vẫn tự chịu trách nhiệm với cách dùng, bối cảnh thực tế và quyết định cuối cùng của mình.",
            supportTitle: "Hỗ trợ",
            supportLine: "Need help or want to suggest a new scenario?",
            supportCta: "team@daily-dialogue.app",
            closing: "Nói ít. Đi nhẹ.",
            copyright: `© ${new Date().getFullYear()} daily.dialogue`,
          }
        : {
            brand: "daily.dialogue",
            tag: "Field guide for awkward moments",
            blurb:
              "A small tool for starting, holding, and exiting everyday conversations with more control and less friction.",
            navTitle: "Navigation",
            nav: [
              { id: "intro", label: "Intro", onClick: onNavigateIntro },
              { id: "environment", label: "Environments", onClick: onNavigateEnvironment },
              { id: "interview", label: "Interview", onClick: onNavigateInterview },
              { id: "notes", label: "Field notes", onClick: onOpenFieldNotes },
            ],
            systemTitle: "System",
            stats: [
              { label: "Language", value: "VI / EN" },
              { label: "Scenarios", value: String(scenarioCount).padStart(2, "0") },
              { label: "Status", value: "Ready" },
            ],
            legalTitle: "Legal",
            privacy: "Privacy policy",
            terms: "Terms of use",
            privacyBody:
              "daily.dialogue currently keeps the active route in the URL and a few temporary UI states in the live session only. There is no localStorage, no billing flow, no accounts, and no direct personal-data collection in this interface.",
            termsBody:
              "The app is meant to support communication practice. Users remain responsible for context, judgment, and how these suggestions are applied in real situations.",
            supportTitle: "Support",
            supportLine: "Need help or want to suggest a new scenario?",
            supportCta: "team@daily-dialogue.app",
            closing: "Say less. Leave light.",
            copyright: `© ${new Date().getFullYear()} daily.dialogue`,
          },
    [lang, onNavigateEnvironment, onNavigateInterview, onNavigateIntro, onOpenFieldNotes, scenarioCount],
  );

  return (
    <footer className="app-footer mx-auto mt-10 max-w-[1380px] px-4 pb-0 sm:px-6 lg:px-8">
      <div className="section-ornament overflow-hidden">
        <div className="grid gap-px bg-[var(--line)] lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <section className="bg-[var(--surface)] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
            <BrandMark compact className="footer-brand-mark" />
            <h2 className="mt-2 max-w-[10ch] font-[var(--font-display)] text-[2.35rem] leading-[0.92] tracking-[-0.05em] text-[var(--text)] sm:text-[2.9rem]">
              {copy.tag}
            </h2>
            <p className="mt-4 max-w-[34ch] text-sm leading-7 text-[var(--text-soft)]">{copy.blurb}</p>
            <p className="mt-8 font-[var(--font-display)] text-[1.6rem] leading-[0.95] tracking-[-0.04em] text-[var(--text)]">
              {copy.closing}
            </p>
          </section>

          <section className="bg-[rgba(255,249,242,0.84)] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              {copy.navTitle}
            </p>
            <div className="mt-5 grid gap-2">
              {copy.nav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  className="footer-link inline-flex items-center justify-between rounded-[18px] border border-[var(--line)] bg-white/58 px-4 py-3 text-left text-sm font-semibold text-[var(--text)]"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-soft)]">open</span>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                {copy.systemTitle}
              </p>
              <div className="mt-4 grid gap-3">
                {copy.stats.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between gap-4 border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0">
                    <p className="text-sm text-[var(--text-soft)]">{stat.label}</p>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text)]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[var(--surface)] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
              {copy.legalTitle}
            </p>
            <div className="mt-5 grid gap-2">
              <button
                type="button"
                onClick={() => setOpenPanel((current) => (current === "privacy" ? null : "privacy"))}
                className="footer-link rounded-[18px] border border-[var(--line)] bg-white/58 px-4 py-3 text-left text-sm font-semibold text-[var(--text)]"
              >
                {copy.privacy}
              </button>
              <button
                type="button"
                onClick={() => setOpenPanel((current) => (current === "terms" ? null : "terms"))}
                className="footer-link rounded-[18px] border border-[var(--line)] bg-white/58 px-4 py-3 text-left text-sm font-semibold text-[var(--text)]"
              >
                {copy.terms}
              </button>
            </div>

            <div className="footer-legal-panel mt-4 min-h-[120px] rounded-[22px] border border-[var(--line)] bg-[rgba(255,252,247,0.76)] px-4 py-4 text-sm leading-7 text-[var(--text-soft)]">
              {openPanel === "privacy" ? copy.privacyBody : openPanel === "terms" ? copy.termsBody : copy.supportLine}
            </div>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                {copy.supportTitle}
              </p>
              <a
                href={`mailto:${copy.supportCta}`}
                className="footer-mail mt-3 inline-flex rounded-full border border-[var(--line)] bg-white/62 px-4 py-2.5 text-sm font-semibold text-[var(--text)]"
              >
                {copy.supportCta}
              </a>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--line)] bg-[rgba(255,251,246,0.88)] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <span>{copy.copyright}</span>
          <span>{lang === "vi" ? "Built for calmer exits and cleaner conversations." : "Built for calmer exits and cleaner conversations."}</span>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
