# communicate_project

Docs cho AI và contributor:

- [AI Implementation Guide](./docs/AI_IMPLEMENTATION_GUIDE.md)

## Data source

App hiện ưu tiên lấy data từ Supabase REST nếu có cấu hình:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_ENVIRONMENTS_TABLE`
- `VITE_SUPABASE_SCENARIOS_TABLE`
- `VITE_SUPABASE_BOOKS_TABLE`

Nếu chưa cấu hình Supabase, app sẽ fallback sang local data trong `src/data/*`.

## Supabase shape

Các bảng hiện được kỳ vọng trả về JSON cùng shape mà UI đang dùng:

- `app_environments`: mỗi row là một environment, có `id`, `title`, `subtitle`, `zones`
- `app_scenarios`: mỗi row là một scenario, có `id`, `environmentId`, `zoneId`, `title`, `subtitle`, `location`, `alertLevel`, `pressure`, `painPoint`, `escapeClause`, `tacticalPlays`, `protocol`
- `communication_books`: mỗi row là một book, có `id`, `title`, `author`, `image`

Bạn có thể thêm `sortOrder`, `sort_order`, `orderIndex`, `order_index` hoặc `position` để app tự sort ổn định.
