import { useEffect, useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import BrandMark from "./components/brand-mark";
import SurvivalModal from "./components/SurvivalModal";
import { communicationBooks } from "./data/books";
import { scenarioEnvironments as fallbackScenarioEnvironments, scenarios as fallbackScenarios } from "./data/scenarios";
import { uiCopy } from "./data/ui-copy";
import { fetchAppData } from "./lib/content-api";
import {
  buildEnvironmentPath,
  buildIntroPath,
  buildScenarioPath,
  buildZonePath,
  normalizePathname,
  parsePathname,
} from "./lib/routes";
import EnvironmentPage from "./pages/environment";
import IntroPage from "./pages/intro";
import ScenarioPage from "./pages/scenario";
import ZonePage from "./pages/zone";

gsap.registerPlugin(useGSAP);

function getPathDepth(pathname) {
  return normalizePathname(pathname).split("/").filter(Boolean).length;
}

function App() {
  const [pathname, setPathname] = useState(() => {
    if (typeof window === "undefined") {
      return buildIntroPath();
    }

    return normalizePathname(window.location.pathname);
  });
  const [activeScenario, setActiveScenario] = useState(null);
  const [lang, setLang] = useState("vi");
  const [appData, setAppData] = useState(() => ({
    scenarioEnvironments: fallbackScenarioEnvironments,
    scenarios: fallbackScenarios,
    books: communicationBooks,
  }));

  const appRef = useRef(null);
  const heroRef = useRef(null);
  const modalRef = useRef(null);
  const cardRefs = useRef([]);
  const cardTiltControllers = useRef(new Map());
  const shouldAnimatePageTurnRef = useRef(false);

  const copy = uiCopy[lang];
  const { scenarioEnvironments, scenarios, books } = appData;
  const route = useMemo(() => parsePathname(pathname), [pathname]);
  const currentPage = route.page === "invalid" ? "intro" : route.page;
  const activeEnvironment =
    scenarioEnvironments.find((environment) => environment.id === route.environmentId) ?? null;
  const activeZone =
    activeEnvironment?.zones.find((zone) => zone.id === route.zoneId) ?? null;
  const environmentScenarios = useMemo(
    () =>
      activeEnvironment
        ? scenarios.filter((scenario) => scenario.environmentId === activeEnvironment.id)
        : [],
    [activeEnvironment],
  );
  const visibleScenarios = useMemo(() => {
    if (!activeEnvironment) {
      return [];
    }

    if (!route.zoneId || route.zoneId === "all") {
      return environmentScenarios;
    }

    return environmentScenarios.filter((scenario) => scenario.zoneId === route.zoneId);
  }, [activeEnvironment, environmentScenarios, route.zoneId]);
  const stepItems = useMemo(
    () => [
      { id: "environment", label: copy.nav[1].label },
      { id: "zone", label: copy.nav[2].label },
      { id: "scenario", label: copy.nav[3].label },
    ],
    [copy],
  );
  const navItems = useMemo(
    () => [
      { id: "intro", label: copy.nav[0].label, disabled: false },
      { id: "environment", label: copy.nav[1].label, disabled: false },
    ],
    [copy],
  );

  const navigateTo = (nextPath, options = {}) => {
    if (typeof window === "undefined") {
      setPathname(normalizePathname(nextPath));
      return;
    }

    const normalized = normalizePathname(nextPath);
    const method = options.replace ? "replaceState" : "pushState";
    const nextShouldAnimate =
      options.animate ?? getPathDepth(normalized) > getPathDepth(pathname);

    shouldAnimatePageTurnRef.current = nextShouldAnimate;
    window.history[method]({}, "", normalized);
    setPathname(normalized);
    window.scrollTo({ top: 0, left: 0 });
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchAppData(controller.signal)
      .then((payload) => {
        setAppData({
          scenarioEnvironments:
            payload.scenarioEnvironments.length > 0
              ? payload.scenarioEnvironments
              : fallbackScenarioEnvironments,
          scenarios: payload.scenarios.length > 0 ? payload.scenarios : fallbackScenarios,
          books: payload.books.length > 0 ? payload.books : communicationBooks,
        });
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }

        console.warn("Falling back to local app data.", error);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handlePopState = () => {
      shouldAnimatePageTurnRef.current = false;
      setPathname(normalizePathname(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    setActiveScenario(null);
  }, [pathname]);

  useEffect(() => {
    return () => {
      cardTiltControllers.current.clear();
      cardRefs.current = [];
    };
  }, [pathname]);

  useEffect(() => {
    if (route.page === "invalid") {
      navigateTo(buildIntroPath(), { replace: true, animate: false });
      return;
    }

    if ((route.page === "zone" || route.page === "scenario") && !activeEnvironment) {
      navigateTo(buildEnvironmentPath(), { replace: true, animate: false });
      return;
    }

    if (route.page === "scenario" && !activeZone) {
      navigateTo(buildZonePath(route.environmentId), { replace: true, animate: false });
    }
  }, [activeEnvironment, activeZone, route]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-kicker", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, delay: 0.05 });
      gsap.fromTo(".hero-headline", { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, delay: 0.15 });
      gsap.fromTo(".hero-copy", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.25 });
    }, heroRef);

    return () => ctx.revert();
  }, [lang]);

  useEffect(() => {
    if (!activeScenario) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(".modal-shell", { yPercent: 8, opacity: 0, scaleY: 0.96 }, { yPercent: 0, opacity: 1, scaleY: 1, duration: 0.55, ease: "back.out(1.2)" });
    }, modalRef);

    return () => ctx.revert();
  }, [activeScenario, lang]);

  useGSAP(
    () => {
      if (!shouldAnimatePageTurnRef.current) {
        gsap.set(".page-turn-overlay", { autoAlpha: 0 });
        gsap.set(".page-transition-content", { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
        return undefined;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
      });

      timeline.set(".page-turn-overlay", { autoAlpha: 1 });
      timeline.set(".page-turn-sheet", {
        rotateY: 0,
        xPercent: 0,
        z: 0,
        transformOrigin: "left center",
        force3D: true,
      });
      timeline.set(".page-turn-shadow, .page-turn-glow, .page-turn-sheet-curve, .page-turn-sheet-specular", {
        force3D: true,
      });
      timeline.set(".page-turn-stack, .page-turn-sheet-curve, .page-turn-sheet-specular, .page-turn-left-page", {
        clearProps: "all",
      });
      timeline.set(".page-transition-content", { opacity: 1, filter: "blur(0px)" });

      timeline.fromTo(
        ".page-turn-left-page",
        {
          opacity: 0.92,
          scaleX: 0.996,
          xPercent: 0,
        },
        {
          opacity: 1,
          scaleX: 1,
          xPercent: -0.4,
          duration: 0.28,
          ease: "power2.out",
        },
        0,
      );

      timeline.fromTo(
        ".page-turn-sheet",
        {
          rotateY: 0,
          xPercent: 0,
          z: 0,
        },
        {
          rotateY: -112,
          xPercent: -16,
          z: 18,
          duration: 0.74,
          ease: "power2.inOut",
        },
        0,
      );

      timeline.fromTo(
        ".page-turn-stack",
        {
          opacity: 0.34,
          xPercent: 1,
          scaleX: 0.96,
        },
        {
          opacity: 0.88,
          xPercent: 0,
          scaleX: 1,
          duration: 0.22,
          ease: "power2.out",
        },
        0,
      );

      timeline.fromTo(
        ".page-turn-sheet-back",
        { opacity: 0.18 },
        { opacity: 0.98, duration: 0.42, ease: "power1.out" },
        0.06,
      );

      timeline.fromTo(
        ".page-turn-shadow",
        {
          opacity: 0.22,
          scaleX: 0.54,
          xPercent: -8,
        },
        {
          opacity: 0,
          scaleX: 1.42,
          xPercent: 18,
          duration: 0.58,
          ease: "power2.out",
        },
        0,
      );

      timeline.fromTo(
        ".page-turn-gutter",
        { opacity: 0.68, scaleY: 0.98, xPercent: 0 },
        { opacity: 0.1, scaleY: 1.04, xPercent: 8, duration: 0.54, ease: "power1.out" },
        0.02,
      );

      timeline.fromTo(
        ".page-turn-glow",
        {
          opacity: 0.66,
          xPercent: -2,
        },
        {
          opacity: 0,
          xPercent: 34,
          duration: 0.48,
          ease: "power2.out",
        },
        0.04,
      );

      timeline.fromTo(
        ".page-turn-sheet-curve",
        {
          opacity: 0.56,
          scaleX: 0.74,
          skewY: -8,
        },
        {
          opacity: 0.08,
          scaleX: 1.36,
          skewY: 10,
          duration: 0.56,
          ease: "power2.out",
        },
        0.02,
      );

      timeline.fromTo(
        ".page-turn-sheet-specular",
        {
          opacity: 0.22,
          xPercent: -18,
        },
        {
          opacity: 0.82,
          xPercent: 18,
          duration: 0.28,
          ease: "power1.in",
        },
        0.08,
      );

      timeline.to(
        ".page-turn-sheet-specular",
        {
          opacity: 0,
          xPercent: 42,
          duration: 0.22,
          ease: "power1.out",
        },
        0.34,
      );

      timeline.fromTo(
        ".page-transition-content",
        {
          y: 14,
          opacity: 0,
          scale: 0.996,
          filter: "blur(3px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.42,
          ease: "power2.out",
        },
        0.18,
      );

      timeline.to(
        ".page-turn-overlay",
        {
          autoAlpha: 0,
          duration: 0.12,
          ease: "power1.out",
        },
        0.6,
      );

      timeline.call(() => {
        shouldAnimatePageTurnRef.current = false;
      });
    },
    {
      scope: appRef,
      dependencies: [pathname],
      revertOnUpdate: true,
    },
  );

  const handleCardPointerMove = (event, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    if (event.pointerType === "touch") return;

    const rect = card.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const rotateY = gsap.utils.mapRange(0, rect.width, -6, 6, pointerX);
    const rotateX = gsap.utils.mapRange(0, rect.height, 6, -6, pointerY);
    let controller = cardTiltControllers.current.get(card);

    if (!controller) {
      controller = {
        rotateXTo: gsap.quickTo(card, "rotateX", { duration: 0.22, ease: "power2.out" }),
        rotateYTo: gsap.quickTo(card, "rotateY", { duration: 0.22, ease: "power2.out" }),
      };
      gsap.set(card, { transformPerspective: 900, force3D: true });
      cardTiltControllers.current.set(card, controller);
    }

    controller.rotateXTo(rotateX);
    controller.rotateYTo(rotateY);
  };

  const handleCardPointerLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const controller = cardTiltControllers.current.get(card);

    if (controller) {
      controller.rotateXTo(0);
      controller.rotateYTo(0);
      return;
    }

    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.35, ease: "power2.out" });
  };

  const handleStartFlow = () => navigateTo(buildEnvironmentPath(), { animate: true });
  const handleEnvironmentSelect = (environmentId) => navigateTo(buildZonePath(environmentId), { animate: true });
  const handleZoneSelect = (zoneId) => {
    if (!activeEnvironment) return;
    navigateTo(buildScenarioPath(activeEnvironment.id, zoneId), { animate: true });
  };
  const handleBackToIntro = () => navigateTo(buildIntroPath(), { animate: false });
  const handleBackToEnvironment = () => navigateTo(buildEnvironmentPath(), { animate: false });
  const handleBackToZone = () => {
    if (!activeEnvironment) return;
    navigateTo(buildZonePath(activeEnvironment.id), { animate: false });
  };
  const handleHeaderNavigate = (pageId) => {
    if (pageId === "intro") {
      navigateTo(buildIntroPath(), { animate: false });
      return;
    }

    if (pageId === "environment") {
      navigateTo(buildEnvironmentPath(), { animate: false });
      return;
    }

    if (pageId === "zone" && activeEnvironment) {
      navigateTo(buildZonePath(activeEnvironment.id), { animate: false });
      return;
    }

    if (pageId === "scenario" && activeEnvironment && activeZone) {
      navigateTo(buildScenarioPath(activeEnvironment.id, activeZone.id), { animate: true });
    }
  };
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleOpenFieldNotes = () => {
    if (typeof window === "undefined") return;

    if (currentPage !== "intro") {
      navigateTo(buildIntroPath(), { animate: false });
      window.setTimeout(() => {
        document.getElementById("field-notes")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return;
    }

    document.getElementById("field-notes")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={appRef} className="min-h-[100dvh] bg-[var(--bg)] text-[var(--text)]">
      <div className="book-ambient" aria-hidden="true" />
      <div className="book-flourish" aria-hidden="true" />

      <div className="page-turn-overlay" aria-hidden="true">
        <div className="page-turn-brand">
          <BrandMark compact />
        </div>
        <div className="page-turn-spread">
          <div className="page-turn-left-page" />
        </div>
        <div className="page-turn-stack">
          <div className="page-turn-stack-leaf page-turn-stack-leaf-one" />
          <div className="page-turn-stack-leaf page-turn-stack-leaf-two" />
        </div>
        <div className="page-turn-shadow" />
        <div className="page-turn-gutter" />
        <div className="page-turn-sheet">
          <div className="page-turn-sheet-face page-turn-sheet-front" />
          <div className="page-turn-sheet-face page-turn-sheet-back" />
          <div className="page-turn-sheet-curve" />
          <div className="page-turn-sheet-edge" />
          <div className="page-turn-sheet-specular" />
          <div className="page-turn-glow" />
        </div>
      </div>

      <div className="relative z-10">
        <AppHeader
          navItems={navItems}
          currentPage={currentPage}
          onNavigate={handleHeaderNavigate}
          lang={lang}
          onLanguageChange={setLang}
          languageLabel={copy.hero.language}
        />

        <main
          className="page-stage mx-auto flex max-w-[1380px] flex-col gap-10 px-4 py-5 sm:px-6 lg:px-8 lg:py-6"
        >
          <div className="page-transition-content">
            {currentPage === "intro" ? (
              <IntroPage
                heroRef={heroRef}
                lang={lang}
                copy={copy}
                books={books}
                environments={scenarioEnvironments}
                scenarioCount={scenarios.length}
                onStart={handleStartFlow}
              />
            ) : null}

            {currentPage === "environment" ? (
              <EnvironmentPage
                environments={scenarioEnvironments}
                activeEnvironmentId={activeEnvironment?.id ?? null}
                onEnvironmentSelect={handleEnvironmentSelect}
                onBack={handleBackToIntro}
                lang={lang}
                copy={copy.scenarioGrid}
                steps={stepItems}
              />
            ) : null}

            {currentPage === "zone" && activeEnvironment ? (
              <ZonePage
                activeEnvironment={activeEnvironment}
                activeZoneId={null}
                onZoneSelect={handleZoneSelect}
                onBack={handleBackToEnvironment}
                lang={lang}
                copy={copy.scenarioGrid}
                steps={stepItems}
              />
            ) : null}

            {currentPage === "scenario" && activeEnvironment ? (
              <ScenarioPage
                activeEnvironment={activeEnvironment}
                activeZone={activeZone}
                scenarios={visibleScenarios}
                onBack={handleBackToZone}
                onSelectScenario={setActiveScenario}
                cardRefs={cardRefs}
                onCardPointerMove={handleCardPointerMove}
                onCardPointerLeave={handleCardPointerLeave}
                lang={lang}
                copy={copy.scenarioGrid}
                steps={stepItems}
              />
            ) : null}
          </div>
        </main>

        <AppFooter
          lang={lang}
          scenarioCount={scenarios.length}
          onNavigateIntro={handleBackToIntro}
          onNavigateEnvironment={handleStartFlow}
          onOpenFieldNotes={handleOpenFieldNotes}
        />
      </div>

      <div ref={modalRef}>
        {activeScenario ? (
          <SurvivalModal scenario={activeScenario} onClose={() => setActiveScenario(null)} lang={lang} copy={copy.modal} />
        ) : null}
      </div>

      <button
        type="button"
        onClick={handleScrollTop}
        className="floating-top-button fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,250,243,0.88)] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text)] shadow-[0_18px_34px_rgba(68,49,27,0.14)] backdrop-blur-md hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-white sm:bottom-6 sm:right-6 sm:px-5"
      >
        {copy.doctrine.resetTop}
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
      </button>
    </div>
  );
}

export default App;
