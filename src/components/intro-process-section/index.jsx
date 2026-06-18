function IntroProcessSection({ lang = "vi" }) {
  const copy =
    lang === "vi"
      ? {
          kicker: "Quy trình giao tiếp",
          title: "Mở lời có ý. Đọc phòng đúng nhịp. Khép lại gọn.",
          body:
            "Những cuộc trò chuyện dễ chịu thường không cần nói nhiều. Chúng chỉ cần mở đúng cách, nghe đủ sâu và dừng lại đúng lúc.",
          quote:
            "Giao tiếp tốt không phải là có sẵn mọi câu trả lời, mà là biết chừa không gian để người đối diện thấy mình được lắng nghe.",
          closing: "Một cuộc nói chuyện tốt nên để lại cảm giác nhẹ, rõ và được tôn trọng.",
          steps: [
            {
              id: "01",
              title: "Mở lời có chủ đích",
              body: "Bắt đầu bằng sự hiện diện và tò mò vừa đủ. Một câu đúng tông tốt hơn ba câu gượng ép.",
            },
            {
              id: "02",
              title: "Đọc phòng rồi đáp lại",
              body: "Nghe phản ứng, nhận ra tín hiệu, rồi mới tiếp lời. Càng hiểu nhịp của người khác, bạn càng bớt phải gồng.",
            },
          ],
        }
      : {
          kicker: "Communication process",
          title: "Open with intention. Read the room. Exit with grace.",
          body:
            "Comfortable conversations rarely need more words. They simply need the right opening, enough listening, and a clean stop.",
          quote:
            "Good communication is not about having every answer ready. It is about leaving enough space for the other person to feel heard.",
          closing: "The best exchanges leave people feeling clear, respected, and at ease.",
          steps: [
            {
              id: "01",
              title: "Open with intention",
              body: "Start with presence and just enough curiosity. One line in the right tone does more than three awkward ones.",
            },
            {
              id: "02",
              title: "Read the room, then respond",
              body: "Notice reactions before you keep going. The better you read the other person, the less you need to force the conversation.",
            },
          ],
        };

  return (
    <section className="process-section section-ornament overflow-hidden">
      <div className="process-shell px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div className="process-grid grid gap-8 lg:grid-cols-[0.34fr_0.32fr_0.34fr] lg:items-center lg:gap-10">
          <div className="process-collage">
            <div className="process-scrap process-scrap-grid" />
            <div className="process-scrap process-scrap-back" />
            <div className="process-note process-note-main">
              <span className="process-note-pin" />
              <span className="process-note-doodle process-note-doodle-chat" />
              <span className="process-note-doodle process-note-doodle-star" />
              <div className="process-note-lines" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="process-note process-note-quote">
              <p>{copy.quote}</p>
            </div>
            <div className="process-branch process-branch-left" aria-hidden="true" />
            <div className="process-branch process-branch-right" aria-hidden="true" />
            <div className="process-leaf process-leaf-one" aria-hidden="true" />
            <div className="process-leaf process-leaf-two" aria-hidden="true" />
          </div>

          <div className="process-copy">
            <p className="process-kicker">{copy.kicker}</p>
            <h2 className="process-title">{copy.title}</h2>
            <p className="process-body">{copy.body}</p>
          </div>

          <div className="process-steps">
            {copy.steps.map((step, index) => (
              <article key={step.id} className={`process-step ${index === copy.steps.length - 1 ? "process-step-last" : ""}`}>
                <div className="process-step-index">
                  <span>{step.id}</span>
                </div>
                <div className="process-step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
            <p className="process-closing">{copy.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroProcessSection;
