import { familyScenarios } from "./family";
import { officeScenarios } from "./office";
import { schoolScenarios } from "./school";

export const scenarios = [...officeScenarios, ...schoolScenarios, ...familyScenarios];

export const scenarioEnvironments = [
  {
    id: "office",
    title: { en: "Office", vi: "Công sở" },
    subtitle: {
      en: "Meetings, hallways, pantry runs, and elevator diplomacy.",
      vi: "Họp, hành lang, pantry và những cuộc gặp bất ngờ trong văn phòng.",
    },
    zones: [
      {
        id: "all",
        title: { en: "All zones", vi: "Tất cả khu vực" },
        subtitle: {
          en: "See the full office map first.",
          vi: "Xem toàn bộ bản đồ công sở trước.",
        },
      },
      {
        id: "vertical-transit",
        title: { en: "Elevators", vi: "Thang máy" },
        subtitle: {
          en: "Tight spaces with nowhere to look.",
          vi: "Không gian hẹp, rất ít đường lui.",
        },
      },
      {
        id: "corridors",
        title: { en: "Hallways", vi: "Hành lang" },
        subtitle: {
          en: "Long-range eye contact and passing greetings.",
          vi: "Chạm mặt từ xa và những lời chào bắt buộc.",
        },
      },
      {
        id: "shared-utilities",
        title: { en: "Restroom & sink", vi: "Bồn rửa & nhà vệ sinh" },
        subtitle: {
          en: "Awkward pauses in shared utility areas.",
          vi: "Những khoảng lặng khó xử ở khu dùng chung.",
        },
      },
      {
        id: "break-zone",
        title: { en: "Pantry & coffee", vi: "Pantry & cà phê" },
        subtitle: {
          en: "Small talk while your drink traps you in place.",
          vi: "Trò chuyện xã giao khi ly nước giữ chân bạn lại.",
        },
      },
    ],
  },
  {
    id: "school",
    title: { en: "School", vi: "Trường học" },
    subtitle: {
      en: "Classrooms, canteens, corridors, and group-work tension.",
      vi: "Lớp học, canteen, hành lang và những tình huống làm việc nhóm.",
    },
    zones: [
      {
        id: "all",
        title: { en: "All zones", vi: "Tất cả khu vực" },
        subtitle: {
          en: "Start with the full campus map.",
          vi: "Bắt đầu từ bản đồ tổng thể trong trường.",
        },
      },
      {
        id: "classrooms",
        title: { en: "Classrooms", vi: "Lớp học" },
        subtitle: {
          en: "Presentations, cold calls, and seat-neighbor moments.",
          vi: "Thuyết trình, bị gọi bất ngờ và những khoảnh khắc với bạn cùng bàn.",
        },
      },
      {
        id: "campus-corridors",
        title: { en: "Campus corridors", vi: "Hành lang trường" },
        subtitle: {
          en: "Crossing paths between classes.",
          vi: "Chạm mặt giữa các tiết học.",
        },
      },
      {
        id: "canteen",
        title: { en: "Canteen", vi: "Căng tin" },
        subtitle: {
          en: "Queueing, finding seats, and joining tables.",
          vi: "Xếp hàng, tìm chỗ ngồi và nhập bàn.",
        },
      },
    ],
  },
  {
    id: "family",
    title: { en: "Family", vi: "Gia đình" },
    subtitle: {
      en: "Living rooms, dinner tables, and extended-family visits.",
      vi: "Phòng khách, bàn ăn và những buổi gặp mặt người thân.",
    },
    zones: [
      {
        id: "all",
        title: { en: "All zones", vi: "Tất cả khu vực" },
        subtitle: {
          en: "Preview the whole family setting.",
          vi: "Xem tổng thể các bối cảnh trong gia đình.",
        },
      },
      {
        id: "dining-table",
        title: { en: "Dining table", vi: "Bàn ăn" },
        subtitle: {
          en: "Questions, comparisons, and loaded silences.",
          vi: "Những câu hỏi, so sánh và khoảng lặng đầy sức ép.",
        },
      },
      {
        id: "living-room",
        title: { en: "Living room", vi: "Phòng khách" },
        subtitle: {
          en: "Unexpected guests and long-form catchups.",
          vi: "Khách đến bất ngờ và những cuộc hỏi han kéo dài.",
        },
      },
      {
        id: "family-gathering",
        title: { en: "Gatherings", vi: "Họp mặt gia đình" },
        subtitle: {
          en: "Large-group conversations and polite escapes.",
          vi: "Trò chuyện đông người và những lối thoát lịch sự.",
        },
      },
    ],
  },
];
