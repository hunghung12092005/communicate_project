import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function LibraryRibbon({ lang = "vi", books = [] }) {
  const rootRef = useRef(null);

  const copy =
    lang === "vi"
      ? {
          tag: "Library",
          note: "15 đầu sách",
          title: "Đọc nhanh. Nói gọn.",
          body: "Một dải sách tham khảo cho lúc cần thêm ý để mở lời, giữ nhịp hoặc thoát ra cho sạch.",
        }
      : {
          tag: "Library",
          note: "15 titles",
          title: "Read fast. Speak clean.",
          body: "A moving shelf of references for starting, holding, or exiting a conversation without overdoing it.",
        };

  const displayBooks = books.slice(0, 10);
  const marqueeBooks = [...displayBooks, ...displayBooks];

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".library-chip", {
          y: 10,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.from(".library-copy > *", {
          y: 22,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
        });

        gsap.from(".library-slide-card", {
          y: 24,
          opacity: 0,
          stagger: 0.06,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="library-ribbon section-ornament overflow-hidden"
      aria-label="Communication books"
    >
      <div className="library-ribbon-frame px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
        <div className="library-showcase grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
          <div className="library-copy">
            <div className="library-chip">
              <span>{copy.tag}</span>
              <i />
              <small>{copy.note}</small>
            </div>
            <h2 className="mt-4 max-w-[8ch] font-[var(--font-display)] text-[2.8rem] font-semibold leading-[0.9] tracking-[-0.055em] text-[var(--text)] sm:text-[3.4rem]">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-[27ch] text-[0.98rem] leading-7 text-[var(--text-soft)] sm:text-base sm:leading-8">
              {copy.body}
            </p>
          </div>

          <div className="library-marquee" aria-label="Communication book showcase">
            <div className="library-marquee-track">
              {marqueeBooks.map((book, index) => (
                <article
                  key={`${book.id}-${index}`}
                  className="library-slide-card"
                  aria-hidden={index >= displayBooks.length}
                >
                  <div className="library-slide-cover">
                    <img
                      src={book.image}
                      alt={`${book.title} by ${book.author}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="library-slide-meta">
                    <p className="library-slide-title">{book.title}</p>
                    <p className="library-slide-author">{book.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LibraryRibbon;
