export const officeScenarios = [
  {
    id: "elevator-lock",
    environmentId: "office",
    zoneId: "vertical-transit",
    code: "S-01",
    title: { en: "The Elevator Lock", vi: "Kẹt Trong Thang Máy" },
    subtitle: {
      en: "Meeting the CEO in a steel echo chamber",
      vi: "Chạm mặt sếp lớn trong chiếc hộp thép đầy im lặng",
    },
    location: { en: "VERTICAL TRANSIT", vi: "KHOANG DI CHUYỂN" },
    painPoint: {
      en: "Thirty seconds of silence feels like a board review with fewer exits.",
      vi: "Ba mươi giây im lặng trong thang máy có cảm giác như một buổi review với ít đường thoát hơn.",
    },
    alertLevel: { en: "HIGH", vi: "CAO" },
    pressure: { en: "00:30 WINDOW", vi: "CỬA SỔ 00:30" },
    signal: { en: "CONFINED AIRSPACE", vi: "KHÔNG GIAN KHÉP KÍN" },
    tacticalPlays: [
      {
        name: { en: "The Weather Pivot", vi: "Bẻ Lái Sang Thời Tiết" },
        summary: {
          en: "Open with one calm observation, then stop before it becomes a monologue.",
          vi: "Mở đầu bằng một nhận xét nhẹ nhàng rồi dừng đúng lúc trước khi nó thành độc thoại.",
        },
        script: {
          en: "Morning. That humidity is doing a full hostile takeover today.",
          vi: "Chào buổi sáng. Hôm nay độ ẩm đúng là đang chiếm quyền kiểm soát luôn.",
        },
      },
      {
        name: { en: "The Intense Document Stare", vi: "Nhìn Tài Liệu Cực Kỳ Chuyên Nghiệp" },
        summary: {
          en: "Create a visible mission by reviewing one page like it matters to the quarter.",
          vi: "Tạo cảm giác bạn đang có nhiệm vụ bằng cách chăm chú vào một trang tài liệu như thể nó quyết định cả quý này.",
        },
        script: {
          en: "Keep one document open, nod once, and treat the elevator ride as transit, not networking.",
          vi: "Mở sẵn một tài liệu, gật đầu một cái, và coi chuyến thang máy chỉ là di chuyển chứ không phải cơ hội networking.",
        },
      },
      {
        name: { en: "The Micro-Nod of Respect", vi: "Cái Gật Đầu Vừa Đủ" },
        summary: {
          en: "Acknowledge, smile once, return to neutral. Minimal signal, zero awkward overreach.",
          vi: "Thừa nhận sự hiện diện, cười nhẹ một lần rồi quay lại trạng thái bình thường. Tín hiệu vừa đủ, không gượng gạo.",
        },
        script: {
          en: "Small nod. Brief eye contact. Soft smile. No second attempt.",
          vi: "Gật nhẹ. Giao tiếp mắt ngắn. Cười nhẹ. Không cố thêm lần hai.",
        },
      },
    ],
    protocol: {
      en: [
        "Enter with shoulders square and one hand occupied by a notebook, badge, or coffee lid.",
        "If the CEO speaks first, answer in one sentence and end on a stable tone, not a question.",
        "Exit on your floor with a clean 'Have a good one' and keep moving.",
      ],
      vi: [
        "Bước vào với tư thế vững, một tay cầm sổ, thẻ hoặc nắp ly để tạo cảm giác đang bận.",
        "Nếu sếp nói trước, trả lời trong một câu và kết lại dứt khoát, đừng biến nó thành câu hỏi.",
        "Ra khỏi thang máy bằng một câu chào gọn rồi tiếp tục di chuyển.",
      ],
    },
    escapeClause: {
      en: "If silence stretches, turn slightly toward the floor indicator and let the ride stay quiet.",
      vi: "Nếu sự im lặng kéo dài, hơi xoay người về bảng số tầng và để chuyến đi tiếp tục trong yên lặng.",
    },
  },
  {
    id: "restroom-sync",
    environmentId: "office",
    zoneId: "shared-utilities",
    code: "S-02",
    title: { en: "The Restroom Sync", vi: "Khoảnh Khắc Ở Bồn Rửa" },
    subtitle: {
      en: "Encountering a peer at the sink",
      vi: "Chạm mặt đồng nghiệp ở khu rửa tay",
    },
    location: { en: "SANITATION ZONE", vi: "KHU VỆ SINH" },
    painPoint: {
      en: "Hand washing plus eye contact creates forced intimacy no job description prepared you for.",
      vi: "Rửa tay mà còn phải giao tiếp mắt tạo ra một kiểu thân mật gượng ép mà chẳng JD nào từng nhắc tới.",
    },
    alertLevel: { en: "ELEVATED", vi: "TĂNG CAO" },
    pressure: { en: "00:18 WINDOW", vi: "CỬA SỔ 00:18" },
    signal: { en: "MIRROR ECHO", vi: "PHẢN CHIẾU GƯƠNG" },
    tacticalPlays: [
      {
        name: { en: "The High-Velocity Hand Dry", vi: "Sấy Tay Thần Tốc" },
        summary: {
          en: "Commit to efficient exit momentum before the conversation boots up.",
          vi: "Giữ đà thoát ra nhanh gọn trước khi cuộc nói chuyện kịp khởi động.",
        },
        script: {
          en: "Dry, fold, nod, depart. Let the airflow do the talking.",
          vi: "Lau, gấp, gật, rời đi. Cứ để tiếng máy sấy nói thay bạn.",
        },
      },
      {
        name: { en: "The Safe Weather Remark", vi: "Một Câu Về Thời Tiết An Toàn" },
        summary: {
          en: "Deploy only if silence is hostile and both of you are stationary.",
          vi: "Chỉ dùng khi sự im lặng quá khó chịu và cả hai đang đứng yên.",
        },
        script: {
          en: "Wild morning out there. The lobby felt like a wind tunnel.",
          vi: "Sáng nay thời tiết ghê thật. Sảnh cứ như một đường hầm gió vậy.",
        },
      },
      {
        name: { en: "The Immediate Mirror Pivot", vi: "Đánh Lái Sang Gương Ngay" },
        summary: {
          en: "Break the line of sight by checking collar, badge, or sleeve as a legitimate task.",
          vi: "Cắt đường giao tiếp mắt bằng cách chỉnh cổ áo, thẻ tên hoặc tay áo như một việc hoàn toàn hợp lý.",
        },
        script: {
          en: "Visual self-audit. Correct one imaginary issue. Exit on completion.",
          vi: "Tự kiểm tra nhanh vẻ ngoài. Sửa một lỗi tưởng tượng. Xong là rời đi.",
        },
      },
    ],
    protocol: {
      en: [
        "Keep your stance angled toward your own station, not fully toward the other person.",
        "Use one sentence maximum while rinsing or drying; never continue into the hallway by accident.",
        "Treat the goodbye as procedural: 'See you upstairs.'",
      ],
      vi: [
        "Đứng chếch về phía khu vực của mình, đừng quay hẳn người đối diện.",
        "Khi đang rửa hoặc lau tay chỉ nên nói tối đa một câu; đừng để cuộc trò chuyện kéo ra cả hành lang.",
        "Kết thúc bằng một câu chào mang tính thủ tục như 'Gặp bạn ở trên nhé.'",
      ],
    },
    escapeClause: {
      en: "If they start a longer topic, step toward the door while answering so your body sets the endpoint.",
      vi: "Nếu họ bắt đầu một chủ đề dài hơn, vừa trả lời vừa bước về phía cửa để cơ thể bạn tự đặt điểm kết thúc.",
    },
  },
  {
    id: "corridor-collision",
    environmentId: "office",
    zoneId: "corridors",
    code: "S-03",
    title: { en: "The Corridor Collision", vi: "Va Chạm Ngoài Hành Lang" },
    subtitle: {
      en: "The 50-meter hallway walk with premature eye contact",
      vi: "Cuộc đi bộ 50 mét với giao tiếp mắt quá sớm",
    },
    location: { en: "OPEN APPROACH", vi: "KHU TIẾP CẬN MỞ" },
    painPoint: {
      en: "Seeing someone too early means both of you must decide when acknowledgment becomes legal.",
      vi: "Nhìn thấy nhau từ quá xa khiến cả hai phải tự quyết định khi nào việc chào hỏi mới là hợp lệ.",
    },
    alertLevel: { en: "MEDIUM", vi: "TRUNG BÌNH" },
    pressure: { en: "00:42 WINDOW", vi: "CỬA SỔ 00:42" },
    signal: { en: "LONG RANGE VISUAL", vi: "NHẬN DIỆN TỪ XA" },
    tacticalPlays: [
      {
        name: { en: "The Dynamic Phone Glance Calibration", vi: "Liếc Điện Thoại Đúng Nhịp" },
        summary: {
          en: "Look down briefly once, then return to natural forward focus at the halfway mark.",
          vi: "Nhìn xuống một lần thật ngắn rồi quay lại ánh nhìn tự nhiên khi đến nửa quãng đường.",
        },
        script: {
          en: "Check screen for exactly one beat. Resume stride. No fake typing required.",
          vi: "Kiểm tra màn hình đúng một nhịp. Bước tiếp bình thường. Không cần giả vờ nhắn tin.",
        },
      },
      {
        name: { en: "The Invisible Wristwatch Check", vi: "Nhìn Đồng Hồ Tưởng Tượng" },
        summary: {
          en: "Create a split-second break in tension without signaling avoidance.",
          vi: "Tạo một nhịp nghỉ nhỏ để giảm căng thẳng mà không khiến bạn trông như đang né tránh.",
        },
        script: {
          en: "Quick time check, then lift your gaze as if you're tracking the next meeting.",
          vi: "Liếc giờ thật nhanh rồi ngẩng lên như thể bạn đang canh giờ cho cuộc họp tiếp theo.",
        },
      },
      {
        name: { en: "The Sudden Right-Angle Turn", vi: "Rẽ Góc Vuông Đột Ngột" },
        summary: {
          en: "Use architecture. If a side room exists, convert awkwardness into purpose.",
          vi: "Tận dụng kiến trúc. Nếu có phòng bên cạnh, biến awkwardness thành một nhiệm vụ có chủ đích.",
        },
        script: {
          en: "Turn into the nearest legitimate doorway like you planned it all along.",
          vi: "Rẽ vào cánh cửa hợp lý gần nhất như thể đó là kế hoạch từ đầu.",
        },
      },
    ],
    protocol: {
      en: [
        "Do not hold a smile for the whole approach. Save acknowledgment for 2-3 meters out.",
        "If you greet, keep walking. Stopping escalates the encounter into a meeting.",
        "Maintain pace after the exchange so both parties are released immediately.",
      ],
      vi: [
        "Đừng giữ nụ cười suốt cả quãng đường. Hãy để phần chào hỏi xảy ra khi chỉ còn 2-3 mét.",
        "Nếu đã chào thì cứ tiếp tục đi. Dừng lại sẽ nâng cấp cuộc gặp thành một cuộc họp.",
        "Giữ nguyên tốc độ sau khi chào để cả hai được giải phóng ngay lập tức.",
      ],
    },
    escapeClause: {
      en: "If the hallway is too long, use the phone glance once. Twice reads evasive.",
      vi: "Nếu hành lang quá dài, chỉ liếc điện thoại một lần. Hai lần sẽ trông như đang né tránh.",
    },
  },
  {
    id: "pantry-trap",
    environmentId: "office",
    zoneId: "break-zone",
    code: "S-04",
    title: { en: "The Pantry Trap", vi: "Cái Bẫy Trong Pantry" },
    subtitle: {
      en: "Making coffee with a talkative VP nearby",
      vi: "Pha cà phê cạnh một vị sếp nói chuyện rất nhiệt tình",
    },
    location: { en: "CAFFEINE BAY", vi: "TRẠM CÀ PHÊ" },
    painPoint: {
      en: "You are pinned beside a kettle while someone senior discovers your availability.",
      vi: "Bạn bị ghim cạnh ấm nước đúng lúc một người cấp cao phát hiện ra bạn đang rảnh.",
    },
    alertLevel: { en: "SEVERE", vi: "NGHIÊM TRỌNG" },
    pressure: { en: "01:20 WINDOW", vi: "CỬA SỔ 01:20" },
    signal: { en: "STATIONARY EXPOSURE", vi: "PHƠI NHIỄM TẠI CHỖ" },
    tacticalPlays: [
      {
        name: { en: "The Urgent Meeting Illusion", vi: "Ảo Giác Về Cuộc Họp Khẩn" },
        summary: {
          en: "Use the clock and your body angle to imply an imminent departure.",
          vi: "Dùng đồng hồ và hướng cơ thể để tạo cảm giác bạn sắp phải đi ngay.",
        },
        script: {
          en: "I'd love to keep this going, but I need to jump into a room in two minutes.",
          vi: "Mình rất muốn nói tiếp, nhưng hai phút nữa phải vào phòng họp rồi.",
        },
      },
      {
        name: { en: "The 'My Cup Is Leaking' Escape", vi: "Thoát Thân Bằng Cái Ly Bị Rò" },
        summary: {
          en: "A low-drama equipment issue gives you a clean reason to move.",
          vi: "Một sự cố nhỏ với đồ dùng sẽ cho bạn lý do hợp lệ để rời vị trí.",
        },
        script: {
          en: "I think this lid is failing me. I should deal with this before it becomes an incident.",
          vi: "Hình như nắp ly này có vấn đề. Mình phải xử lý trước khi nó thành sự cố thật.",
        },
      },
      {
        name: { en: "The Deep Active Listening Nod", vi: "Gật Đầu Nghe Chăm Chú" },
        summary: {
          en: "If exit is impossible, compress your response rate and let them carry the airtime.",
          vi: "Nếu chưa thể thoát, hãy giảm tần suất phản hồi và để họ giữ phần lớn thời lượng nói.",
        },
        script: {
          en: "Nod. Mirror one phrase. Offer one short follow-up. Return to beverage management.",
          vi: "Gật đầu. Nhắc lại một ý. Thêm một câu ngắn. Rồi quay lại với chiếc ly của bạn.",
        },
      },
    ],
    protocol: {
      en: [
        "Stand half-turned toward the machine so your mission stays visually active.",
        "Ask no open-ended questions unless you genuinely have ten extra minutes.",
        "Leave the second your cup is operational. Do not linger to appear polite.",
      ],
      vi: [
        "Đứng xoay nửa người về phía máy để nhiệm vụ pha đồ uống của bạn luôn trông đang diễn ra.",
        "Đừng hỏi câu mở nếu bạn thực sự không có thêm mười phút.",
        "Rời đi ngay khi ly của bạn đã sẵn sàng. Đừng nán lại chỉ để tỏ ra lịch sự.",
      ],
    },
    escapeClause: {
      en: "If they continue after your exit line, add a final smile and physically start walking.",
      vi: "Nếu họ vẫn tiếp tục sau câu thoát thân của bạn, cười thêm một lần cuối rồi bắt đầu bước đi thật.",
    },
  },
  {
    id: "pantry-trap",
    environmentId: "office",
    zoneId: "break-zone",
    code: "S-04",
    title: { en: "The Pantry Trap", vi: "Cái Bẫy Trong Pantry" },
    subtitle: {
      en: "Making coffee with a talkative VP nearby",
      vi: "Pha cà phê cạnh một vị sếp nói chuyện rất nhiệt tình",
    },
    location: { en: "CAFFEINE BAY", vi: "TRẠM CÀ PHÊ" },
    painPoint: {
      en: "You are pinned beside a kettle while someone senior discovers your availability.",
      vi: "Bạn bị ghim cạnh ấm nước đúng lúc một người cấp cao phát hiện ra bạn đang rảnh.",
    },
    alertLevel: { en: "SEVERE", vi: "NGHIÊM TRỌNG" },
    pressure: { en: "01:20 WINDOW", vi: "CỬA SỔ 01:20" },
    signal: { en: "STATIONARY EXPOSURE", vi: "PHƠI NHIỄM TẠI CHỖ" },
    tacticalPlays: [
      {
        name: { en: "The Urgent Meeting Illusion", vi: "Ảo Giác Về Cuộc Họp Khẩn" },
        summary: {
          en: "Use the clock and your body angle to imply an imminent departure.",
          vi: "Dùng đồng hồ và hướng cơ thể để tạo cảm giác bạn sắp phải đi ngay.",
        },
        script: {
          en: "I'd love to keep this going, but I need to jump into a room in two minutes.",
          vi: "Mình rất muốn nói tiếp, nhưng hai phút nữa phải vào phòng họp rồi.",
        },
      },
      {
        name: { en: "The 'My Cup Is Leaking' Escape", vi: "Thoát Thân Bằng Cái Ly Bị Rò" },
        summary: {
          en: "A low-drama equipment issue gives you a clean reason to move.",
          vi: "Một sự cố nhỏ với đồ dùng sẽ cho bạn lý do hợp lệ để rời vị trí.",
        },
        script: {
          en: "I think this lid is failing me. I should deal with this before it becomes an incident.",
          vi: "Hình như nắp ly này có vấn đề. Mình phải xử lý trước khi nó thành sự cố thật.",
        },
      },
      {
        name: { en: "The Deep Active Listening Nod", vi: "Gật Đầu Nghe Chăm Chú" },
        summary: {
          en: "If exit is impossible, compress your response rate and let them carry the airtime.",
          vi: "Nếu chưa thể thoát, hãy giảm tần suất phản hồi và để họ giữ phần lớn thời lượng nói.",
        },
        script: {
          en: "Nod. Mirror one phrase. Offer one short follow-up. Return to beverage management.",
          vi: "Gật đầu. Nhắc lại một ý. Thêm một câu ngắn. Rồi quay lại với chiếc ly của bạn.",
        },
      },
    ],
    protocol: {
      en: [
        "Stand half-turned toward the machine so your mission stays visually active.",
        "Ask no open-ended questions unless you genuinely have ten extra minutes.",
        "Leave the second your cup is operational. Do not linger to appear polite.",
      ],
      vi: [
        "Đứng xoay nửa người về phía máy để nhiệm vụ pha đồ uống của bạn luôn trông đang diễn ra.",
        "Đừng hỏi câu mở nếu bạn thực sự không có thêm mười phút.",
        "Rời đi ngay khi ly của bạn đã sẵn sàng. Đừng nán lại chỉ để tỏ ra lịch sự.",
      ],
    },
    escapeClause: {
      en: "If they continue after your exit line, add a final smile and physically start walking.",
      vi: "Nếu họ vẫn tiếp tục sau câu thoát thân của bạn, cười thêm một lần cuối rồi bắt đầu bước đi thật.",
    },
  },
  {
    id: "pantry-trap",
    environmentId: "office",
    zoneId: "break-zone",
    code: "S-04",
    title: { en: "The Pantry Trap", vi: "Cái Bẫy Trong Pantry" },
    subtitle: {
      en: "Making coffee with a talkative VP nearby",
      vi: "Pha cà phê cạnh một vị sếp nói chuyện rất nhiệt tình",
    },
    location: { en: "CAFFEINE BAY", vi: "TRẠM CÀ PHÊ" },
    painPoint: {
      en: "You are pinned beside a kettle while someone senior discovers your availability.",
      vi: "Bạn bị ghim cạnh ấm nước đúng lúc một người cấp cao phát hiện ra bạn đang rảnh.",
    },
    alertLevel: { en: "SEVERE", vi: "NGHIÊM TRỌNG" },
    pressure: { en: "01:20 WINDOW", vi: "CỬA SỔ 01:20" },
    signal: { en: "STATIONARY EXPOSURE", vi: "PHƠI NHIỄM TẠI CHỖ" },
    tacticalPlays: [
      {
        name: { en: "The Urgent Meeting Illusion", vi: "Ảo Giác Về Cuộc Họp Khẩn" },
        summary: {
          en: "Use the clock and your body angle to imply an imminent departure.",
          vi: "Dùng đồng hồ và hướng cơ thể để tạo cảm giác bạn sắp phải đi ngay.",
        },
        script: {
          en: "I'd love to keep this going, but I need to jump into a room in two minutes.",
          vi: "Mình rất muốn nói tiếp, nhưng hai phút nữa phải vào phòng họp rồi.",
        },
      },
      {
        name: { en: "The 'My Cup Is Leaking' Escape", vi: "Thoát Thân Bằng Cái Ly Bị Rò" },
        summary: {
          en: "A low-drama equipment issue gives you a clean reason to move.",
          vi: "Một sự cố nhỏ với đồ dùng sẽ cho bạn lý do hợp lệ để rời vị trí.",
        },
        script: {
          en: "I think this lid is failing me. I should deal with this before it becomes an incident.",
          vi: "Hình như nắp ly này có vấn đề. Mình phải xử lý trước khi nó thành sự cố thật.",
        },
      },
      {
        name: { en: "The Deep Active Listening Nod", vi: "Gật Đầu Nghe Chăm Chú" },
        summary: {
          en: "If exit is impossible, compress your response rate and let them carry the airtime.",
          vi: "Nếu chưa thể thoát, hãy giảm tần suất phản hồi và để họ giữ phần lớn thời lượng nói.",
        },
        script: {
          en: "Nod. Mirror one phrase. Offer one short follow-up. Return to beverage management.",
          vi: "Gật đầu. Nhắc lại một ý. Thêm một câu ngắn. Rồi quay lại với chiếc ly của bạn.",
        },
      },
    ],
    protocol: {
      en: [
        "Stand half-turned toward the machine so your mission stays visually active.",
        "Ask no open-ended questions unless you genuinely have ten extra minutes.",
        "Leave the second your cup is operational. Do not linger to appear polite.",
      ],
      vi: [
        "Đứng xoay nửa người về phía máy để nhiệm vụ pha đồ uống của bạn luôn trông đang diễn ra.",
        "Đừng hỏi câu mở nếu bạn thực sự không có thêm mười phút.",
        "Rời đi ngay khi ly của bạn đã sẵn sàng. Đừng nán lại chỉ để tỏ ra lịch sự.",
      ],
    },
    escapeClause: {
      en: "If they continue after your exit line, add a final smile and physically start walking.",
      vi: "Nếu họ vẫn tiếp tục sau câu thoát thân của bạn, cười thêm một lần cuối rồi bắt đầu bước đi thật.",
    },
  },
];
