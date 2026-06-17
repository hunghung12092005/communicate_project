import { Shield, ShieldCheck, Siren, X } from "lucide-react";

function SurvivalModal({ scenario, onClose, lang, copy }) {
  if (!scenario) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-stone-950/45 p-3 sm:p-5 lg:items-center">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="modal-shell noise-overlay paper-shell paper-grain relative z-10 max-h-[92dvh] w-full max-w-6xl overflow-hidden border border-stone-300 bg-white">
        <div className="book-spread grid gap-px bg-stone-300 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="panel-grid bg-stone-100 p-5 sm:p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
                  {scenario.code} / {scenario.location[lang]}
                </p>
                <h2 className="mt-3 text-3xl uppercase tracking-[-0.05em] text-stone-950 sm:text-4xl">
                  {scenario.title[lang]}
                </h2>
                <p className="mt-3 max-w-[40ch] text-sm leading-7 text-stone-700">{scenario.subtitle[lang]}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center border border-stone-300 bg-white text-stone-900 transition duration-150 hover:-translate-y-px hover:border-stone-500 active:translate-y-px"
                aria-label={copy.close}
              >
                <X className="h-4 w-4" strokeWidth={1.7} />
              </button>
            </div>

            <div className="mt-8 grid gap-px bg-stone-300 sm:grid-cols-3">
              {[
                { label: copy.alertLevel, value: scenario.alertLevel[lang], icon: Siren, tone: "text-orange-600" },
                { label: copy.pressure, value: scenario.pressure[lang], icon: Shield, tone: "text-cyan-700" },
                { label: copy.outcome, value: copy.stayComposed, icon: ShieldCheck, tone: "text-emerald-700" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                    <item.icon className={`h-3.5 w-3.5 ${item.tone}`} strokeWidth={1.7} />
                    {item.label}
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.14em] text-stone-950">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="margin-note mt-8 border border-stone-300 bg-white p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">{copy.painPoint}</p>
              <p className="mt-4 text-sm leading-7 text-stone-700">{scenario.painPoint[lang]}</p>
            </div>

            <div className="margin-note mt-4 border border-stone-300 bg-white p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">{copy.exitClause}</p>
              <p className="mt-4 text-sm leading-7 text-stone-700">{scenario.escapeClause[lang]}</p>
            </div>
          </div>

          <div className="overflow-y-auto bg-stone-50 p-5 sm:p-6 lg:p-8">
            <div className="grid gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{copy.playByPlay}</p>
                <div className="mt-5 grid gap-4">
                  {scenario.tacticalPlays.map((play, index) => (
                    <article key={play.name[lang]} className="page-rule border border-stone-300 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-700">
                          {copy.play} {String(index + 1).padStart(2, "0")}
                        </p>
                        <span className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                          {copy.fieldReady}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl uppercase tracking-[-0.04em] text-stone-950">
                        {play.name[lang]}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-stone-700">{play.summary[lang]}</p>
                      <div className="mt-4 border border-stone-300 bg-stone-50 p-4 text-sm leading-7 text-stone-900">
                        "{play.script[lang]}"
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{copy.protocol}</p>
                <div className="mt-5 grid gap-px bg-stone-300">
                  {scenario.protocol[lang].map((item, index) => (
                    <div key={item} className="grid gap-4 bg-white p-4 sm:grid-cols-[auto_1fr] sm:items-start">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-orange-600">
                        {copy.step} {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-7 text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurvivalModal;
