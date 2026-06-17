import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "../brand-mark";

function AppHeader({ navItems, currentPage, onNavigate, lang, onLanguageChange, languageLabel }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const languageItems = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  ];

  return (
    <header className="sticky top-0 z-30 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pt-6">
      <div className="paper-shell paper-grain mx-auto max-w-[1380px] overflow-hidden border border-[var(--line)] bg-[rgba(255,250,243,0.78)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:hidden">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate("intro");
            }}
            className="inline-flex items-center text-left"
          >
            <BrandMark compact className="scale-[0.94] sm:scale-100" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/65 text-[var(--text)]"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" strokeWidth={1.9} /> : <Menu className="h-4 w-4" strokeWidth={1.9} />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-[var(--line)] px-4 pb-4 lg:hidden">
            <nav className="mt-3 grid gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">
              {navItems.map((item) => {
                const active = currentPage === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate(item.id);
                    }}
                    disabled={item.disabled}
                    className={`rounded-2xl border px-4 py-3 text-left ${
                      active
                        ? "border-[var(--line-strong)] bg-[var(--surface)] text-[var(--text)] shadow-[0_10px_24px_rgba(68,49,27,0.08)]"
                        : "border-[var(--line)] bg-white/42 text-[var(--text-soft)] hover:bg-white/60 hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-35"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-[var(--line)] bg-white/40 px-3 py-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">
                {languageLabel}
              </span>
              <div className="inline-flex rounded-full border border-[var(--line)] bg-white/60 p-1">
                {languageItems.map(({ code, label, flag }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      onLanguageChange(code);
                      setMobileMenuOpen(false);
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      lang === code
                        ? "bg-[var(--surface-inverse)] text-white shadow-[0_10px_20px_rgba(36,28,22,0.18)]"
                        : "text-[var(--text-soft)] hover:text-[var(--text)]"
                    }`}
                  >
                    <span aria-hidden="true" className="text-[0.9rem] leading-none">
                      {flag}
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="hidden min-h-[78px] gap-4 px-6 py-4 lg:grid lg:grid-cols-[1.2fr_auto_1fr] lg:items-center lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate("intro")}
            className="inline-flex items-center text-left"
          >
            <BrandMark />
          </button>

          <nav className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)] lg:justify-center">
            {navItems.map((item) => {
              const active = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  disabled={item.disabled}
                  className={`rounded-full border px-4 py-2.5 ${
                    active
                      ? "border-[var(--line-strong)] bg-[var(--surface)] text-[var(--text)] shadow-[0_10px_24px_rgba(68,49,27,0.08)]"
                      : "border-transparent bg-transparent hover:border-[var(--line)] hover:bg-white/50 hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-35"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center justify-start gap-3 lg:justify-end">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
              {languageLabel}
            </span>
            <div className="inline-flex rounded-full border border-[var(--line)] bg-white/50 p-1">
              {languageItems.map(({ code, label, flag }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => onLanguageChange(code)}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                    lang === code
                      ? "bg-[var(--surface-inverse)] text-white shadow-[0_10px_20px_rgba(36,28,22,0.18)]"
                      : "text-[var(--text-soft)] hover:text-[var(--text)]"
                  }`}
                >
                  <span aria-hidden="true" className="text-sm leading-none">
                    {flag}
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
