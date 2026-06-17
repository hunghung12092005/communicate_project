# AI Implementation Guide

Tài liệu này được viết cho AI/contributor mới vào repo để đọc thật nhanh.

Mục tiêu:

- biết app đang ở phase nào
- biết mở folder nào trước
- biết từng page hiện có gì
- biết sửa đúng chỗ mà không phá flow

Tài liệu này phản ánh trạng thái code hiện tại.

## 1. Product snapshot

Project là một app React + Vite để tra cứu và luyện xử lý các tình huống giao tiếp khó xử.

Flow chính:

1. vào intro
2. chọn `môi trường`
3. chọn `khu vực`
4. xem `danh sách tình huống`
5. mở modal chi tiết

Tone UI hiện tại:

- light mode
- paper / notebook / book-inspired
- editorial nhưng vẫn phải dễ dùng
- ưu tiên clarity hơn màu mè

## 2. Tech snapshot

### Runtime

- `react`
- `react-dom`
- `gsap`
- `@gsap/react`
- `lucide-react`

### Build

- `vite`
- `@vitejs/plugin-react`
- `tailwindcss`
- `@tailwindcss/vite`

### Styling

- utility classes kiểu Tailwind v4
- visual system lớn nằm trong [src/index.css](/home/hung/code/Project/communicate_project/src/index.css)

## 3. Repo structure

```text
src/
  App.jsx
  main.jsx
  index.css
  lib/
    routes.js
  data/
    ui-copy.js
    books.js
    scenarios/
      index.js
      office.js
      school.js
      family.js
  pages/
    intro/
    environment/
    zone/
    scenario/
  components/
    app-header/
    app-footer/
    intro-rhythm-section/
    intro-field-notes-section/
    library-ribbon/
    environment-selector/
    zone-selector/
    scenario-card-grid/
    step-landing/
    SurvivalModal.jsx
docs/
  AI_IMPLEMENTATION_GUIDE.md
```

## 4. Phases

AI nên hiểu project theo `phase`, không nên đọc repo như một đống file rời.

### Phase 1: App shell and routing

Mục tiêu:

- app boot được
- URL phản ánh đúng page
- header/footer/global control hoạt động

Folder và file chính:

- [src/App.jsx](/home/hung/code/Project/communicate_project/src/App.jsx)
- [src/lib/routes.js](/home/hung/code/Project/communicate_project/src/lib/routes.js)
- [src/components/app-header/index.jsx](/home/hung/code/Project/communicate_project/src/components/app-header/index.jsx)
- [src/components/app-footer/index.jsx](/home/hung/code/Project/communicate_project/src/components/app-footer/index.jsx)

Trách nhiệm:

- `App.jsx`
  - sync route từ `window.location.pathname`
  - state `lang`
  - boot overlay
  - modal open/close
  - floating top button
  - render page theo route
  - mount global header/footer
- `routes.js`
  - build path
  - parse path
  - normalize path
- `app-header`
  - desktop nav
  - mobile compact menu
  - language switch
- `app-footer`
  - production footer global
  - navigation
  - system info
  - legal/support blocks

### Phase 2: Intro / landing experience

Mục tiêu:

- tạo cảm giác product world
- dẫn user vào flow chính
- không làm landing quá nặng chữ

Folder và file chính:

- [src/pages/intro/index.jsx](/home/hung/code/Project/communicate_project/src/pages/intro/index.jsx)
- [src/components/library-ribbon/index.jsx](/home/hung/code/Project/communicate_project/src/components/library-ribbon/index.jsx)
- [src/components/intro-rhythm-section/index.jsx](/home/hung/code/Project/communicate_project/src/components/intro-rhythm-section/index.jsx)
- [src/components/intro-field-notes-section/index.jsx](/home/hung/code/Project/communicate_project/src/components/intro-field-notes-section/index.jsx)

Trách nhiệm:

- `pages/intro`
  - assemble landing
  - giữ thứ tự section
- `library-ribbon`
  - ribbon sách trượt ngang
  - showcase reference books
- `intro-rhythm-section`
  - section ngắn về rhythm hội thoại
- `intro-field-notes-section`
  - section notebook / field notes
  - giữ visual sách và hiệu ứng lá sách
  - background lá vở chỉ là decorative

### Phase 3: Guided selection flow

Mục tiêu:

- chia decision theo tầng
- tránh hiện quá nhiều choice cùng lúc

Folder và file chính:

- [src/pages/environment/index.jsx](/home/hung/code/Project/communicate_project/src/pages/environment/index.jsx)
- [src/pages/zone/index.jsx](/home/hung/code/Project/communicate_project/src/pages/zone/index.jsx)
- [src/pages/scenario/index.jsx](/home/hung/code/Project/communicate_project/src/pages/scenario/index.jsx)
- [src/components/step-landing/index.jsx](/home/hung/code/Project/communicate_project/src/components/step-landing/index.jsx)
- [src/components/environment-selector/index.jsx](/home/hung/code/Project/communicate_project/src/components/environment-selector/index.jsx)
- [src/components/zone-selector/index.jsx](/home/hung/code/Project/communicate_project/src/components/zone-selector/index.jsx)
- [src/components/scenario-card-grid/index.jsx](/home/hung/code/Project/communicate_project/src/components/scenario-card-grid/index.jsx)

Trách nhiệm:

- `environment`
  - user chọn môi trường
- `zone`
  - user chọn khu vực trong môi trường
- `scenario`
  - user xem danh sách tình huống đã lọc
- `step-landing`
  - layout wrapper cho environment / zone / scenario
- `selectors`
  - render choice UI
- `scenario-card-grid`
  - render cards + pointer effect hooks

### Phase 4: Detail / modal layer

Mục tiêu:

- mở chi tiết scenario nhanh
- giữ user trong current context

Folder và file chính:

- [src/components/SurvivalModal.jsx](/home/hung/code/Project/communicate_project/src/components/SurvivalModal.jsx)

Trách nhiệm:

- hiển thị detail scenario
- show alert level, protocol, tactical plays, escape clause

### Phase 5: Data / content layer

Mục tiêu:

- tách data khỏi UI
- dễ thêm scenario mới
- dễ đổi copy song ngữ

Folder và file chính:

- [src/lib/content-api.js](/home/hung/code/Project/communicate_project/src/lib/content-api.js)
- [src/data/ui-copy.js](/home/hung/code/Project/communicate_project/src/data/ui-copy.js)
- [src/data/books.js](/home/hung/code/Project/communicate_project/src/data/books.js)
- [src/data/scenarios/index.js](/home/hung/code/Project/communicate_project/src/data/scenarios/index.js)
- [src/data/scenarios/office.js](/home/hung/code/Project/communicate_project/src/data/scenarios/office.js)
- [src/data/scenarios/school.js](/home/hung/code/Project/communicate_project/src/data/scenarios/school.js)
- [src/data/scenarios/family.js](/home/hung/code/Project/communicate_project/src/data/scenarios/family.js)

Trách nhiệm:

- `content-api.js`
  - load app data từ Supabase REST hoặc API endpoint thường
  - normalize payload cho UI
  - fallback-friendly để UI không phụ thuộc cứng vào local mock
- `ui-copy.js`
  - copy song ngữ cho UI
- `books.js`
  - fallback metadata sách
  - hiện dùng cover thật từ Open Library
- `scenarios/index.js`
  - fallback metadata environment
  - fallback scenarios
- `office/school/family.js`
  - scenario data theo từng môi trường

### Phase 6: Visual system / motion layer

Mục tiêu:

- giữ visual language nhất quán
- tránh AI drift

Folder và file chính:

- [src/index.css](/home/hung/code/Project/communicate_project/src/index.css)

Trách nhiệm:

- paper shell
- grain
- book animations
- notebook decorative background
- marquee animation
- footer/button polish

Không nên tản các motif lớn sang nhiều file CSS nhỏ khi chưa cần.

## 5. Structure by folder

### `src/`

- `App.jsx`
  - root app shell
- `main.jsx`
  - app mount
- `index.css`
  - toàn bộ visual system chính

### `src/lib/`

- `routes.js`
  - helpers cho route

### `src/pages/`

- page chỉ nên làm nhiệm vụ compose layout + pass props
- không nên nhét logic visual lớn lặp lại nhiều nơi vào page nếu có thể tách component

### `src/components/`

Nguyên tắc:

- component tái dùng hoặc có identity rõ thì tách folder riêng
- intro-specific section giữ riêng thay vì nhét vào page
- global component ở `app-*`

### `src/data/`

Nguyên tắc:

- data tách khỏi component
- copy tách khỏi JSX nếu là copy UI chính
- scenario data chia theo environment

## 6. Current page map

### Intro page

Hiện có:

1. hero
2. library ribbon
3. rhythm section
4. field notes section

### Environment page

Hiện có:

- step landing
- environment selector

### Zone page

Hiện có:

- step landing
- zone selector

### Scenario page

Hiện có:

- step landing
- scenario card grid
- modal trigger

## 7. Routing map

```text
/                                      -> intro
/environment                           -> environment
/environment/:environmentId/zones      -> zone
/environment/:environmentId/zones/:zoneId -> scenario
```

Luật đã chốt:

- không flatten flow
- không hiện full scenario list từ đầu
- intro không thay thế flow chọn bước

## 8. Important UI decisions already locked

Đừng vô tình revert các quyết định này:

- mobile navbar là compact menu
- intro hero đã rút chữ và thu scale
- `IntroRhythmSection` và `IntroFieldNotesSection` là component riêng
- `LibraryRibbon` là marquee trượt ngang
- `books.js` đang dùng cover thật
- `IntroFieldNotesSection` giữ hiệu ứng lá sách ở phần book
- background notebook chỉ là decorative
- footer là global production footer
- nút `lên đầu trang` là floating button góc phải
- display serif là chủ đích, không phải bug

## 9. Current visual language

### Typography

- body: `Manrope`
- display: `Cormorant Garamond`

### Color

- warm light neutral
- paper-like surfaces
- dark panels chỉ dùng có chọn lọc

### Motifs không nên phá

- `paper-shell`
- `paper-grain`
- `section-ornament`
- `book-shell`
- `book-page-*`
- notebook sheets
- hero reveal rhythm

## 10. Animation map

### GSAP

Trong `App.jsx`:

- boot scramble
- hero reveal
- modal enter
- scenario card hover tilt

Trong `library-ribbon`:

- section reveal

### CSS animations

Trong `index.css`:

- book drift
- page flip
- marquee scroll

## 11. Data rules

### Khi thêm copy

- ưu tiên sửa ở `src/data/ui-copy.js`

### Khi thêm environment mới

1. tạo file mới trong `src/data/scenarios/`
2. export scenario array
3. import vào `src/data/scenarios/index.js`
4. thêm metadata environment + zones

### Khi thêm scenario mới

Phải đảm bảo:

- `environmentId` hợp lệ
- `zoneId` hợp lệ
- text song ngữ đủ nếu UI đang dùng song ngữ

## 12. Read order for AI

Nếu AI mới vào, đọc theo thứ tự này:

1. [src/App.jsx](/home/hung/code/Project/communicate_project/src/App.jsx)
2. [src/lib/routes.js](/home/hung/code/Project/communicate_project/src/lib/routes.js)
3. [src/pages/intro/index.jsx](/home/hung/code/Project/communicate_project/src/pages/intro/index.jsx)
4. [src/components/intro-field-notes-section/index.jsx](/home/hung/code/Project/communicate_project/src/components/intro-field-notes-section/index.jsx)
5. [src/components/library-ribbon/index.jsx](/home/hung/code/Project/communicate_project/src/components/library-ribbon/index.jsx)
6. [src/components/app-footer/index.jsx](/home/hung/code/Project/communicate_project/src/components/app-footer/index.jsx)
7. [src/data/ui-copy.js](/home/hung/code/Project/communicate_project/src/data/ui-copy.js)
8. [src/data/scenarios/index.js](/home/hung/code/Project/communicate_project/src/data/scenarios/index.js)
9. [src/index.css](/home/hung/code/Project/communicate_project/src/index.css)

## 13. Safe edit guide

### Nếu sửa flow

- sửa ở `App.jsx` + `routes.js`

### Nếu sửa landing

- bắt đầu từ `pages/intro/index.jsx`
- sau đó vào từng intro component

### Nếu sửa visual lớn

- đọc `src/index.css` trước

### Nếu sửa data

- `ui-copy.js`
- `data/scenarios/*`
- `books.js`

## 14. Checklist before commit

- `npm run build` pass
- flow `environment -> zone -> scenario` còn nguyên
- mobile navbar không phình lại
- footer global còn đầy đủ
- floating top button còn đúng góc phải
- book animation không mất
- notebook decorative background không đè nội dung
- text mới có được đưa về đúng data file chưa

## 15. Next sensible tasks

- hoàn thiện data `school` và `family`
- cho floating top button chỉ hiện sau khi scroll đủ xa
- tách legal disclosure của footer thành modal/page riêng nếu cần
- polish thêm motion nhẹ cho intro sections
- viết thêm `AI_QUICKSTART.md` siêu ngắn nếu muốn onboarding AI còn nhanh hơn nữa
