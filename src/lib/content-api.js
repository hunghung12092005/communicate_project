const DEFAULT_APP_DATA_PATH = "/api/app-data";
const DEFAULT_SUPABASE_ENVIRONMENTS_TABLE = "app_environments";
const DEFAULT_SUPABASE_SCENARIOS_TABLE = "app_scenarios";
const DEFAULT_SUPABASE_BOOKS_TABLE = "communication_books";

function trimTrailingSlash(value) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function normalizePath(value) {
  if (!value) {
    return DEFAULT_APP_DATA_PATH;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return value.startsWith("/") ? value : `/${value}`;
}

export function getAppDataUrl() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL?.trim() ?? "";
  const dataPath = normalizePath(import.meta.env.VITE_APP_DATA_PATH?.trim() ?? DEFAULT_APP_DATA_PATH);

  if (/^https?:\/\//i.test(dataPath)) {
    return dataPath;
  }

  if (!baseUrl) {
    return dataPath;
  }

  return `${trimTrailingSlash(baseUrl)}${dataPath}`;
}

function normalizeSupabaseUrl(value) {
  const trimmed = value?.trim() ?? "";
  return trimmed ? trimTrailingSlash(trimmed) : "";
}

function getSupabaseConfig() {
  const url = normalizeSupabaseUrl(import.meta.env.VITE_SUPABASE_URL);
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() ?? "";

  return {
    url,
    anonKey,
    environmentsTable:
      import.meta.env.VITE_SUPABASE_ENVIRONMENTS_TABLE?.trim() ??
      DEFAULT_SUPABASE_ENVIRONMENTS_TABLE,
    scenariosTable:
      import.meta.env.VITE_SUPABASE_SCENARIOS_TABLE?.trim() ?? DEFAULT_SUPABASE_SCENARIOS_TABLE,
    booksTable:
      import.meta.env.VITE_SUPABASE_BOOKS_TABLE?.trim() ?? DEFAULT_SUPABASE_BOOKS_TABLE,
  };
}

function hasSupabaseConfig(config) {
  return Boolean(config.url && config.anonKey);
}

function createSupabaseHeaders(anonKey) {
  return {
    Accept: "application/json",
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
  };
}

function buildSupabaseTableUrl(baseUrl, table) {
  return `${baseUrl}/rest/v1/${table}?select=*`;
}

function sortByOrder(items) {
  return [...items].sort((left, right) => {
    const leftOrder =
      left.sortOrder ?? left.sort_order ?? left.orderIndex ?? left.order_index ?? left.position ?? 0;
    const rightOrder =
      right.sortOrder ?? right.sort_order ?? right.orderIndex ?? right.order_index ?? right.position ?? 0;

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return String(left.id ?? "").localeCompare(String(right.id ?? ""));
  });
}

function normalizePayload(payload) {
  const source = payload?.data ?? payload ?? {};
  const scenarioEnvironments = Array.isArray(source.environments) ? sortByOrder(source.environments) : [];
  const scenarios = Array.isArray(source.scenarios) ? sortByOrder(source.scenarios) : [];
  const books = Array.isArray(source.books) ? sortByOrder(source.books) : [];

  return { scenarioEnvironments, scenarios, books };
}

async function fetchSupabaseTable(baseUrl, anonKey, table, signal) {
  const response = await fetch(buildSupabaseTableUrl(baseUrl, table), {
    method: "GET",
    headers: createSupabaseHeaders(anonKey),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Supabase table "${table}" request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return Array.isArray(payload) ? payload : [];
}

export async function fetchAppData(signal) {
  const supabaseConfig = getSupabaseConfig();

  if (hasSupabaseConfig(supabaseConfig)) {
    const [environments, scenarios, books] = await Promise.all([
      fetchSupabaseTable(
        supabaseConfig.url,
        supabaseConfig.anonKey,
        supabaseConfig.environmentsTable,
        signal,
      ),
      fetchSupabaseTable(
        supabaseConfig.url,
        supabaseConfig.anonKey,
        supabaseConfig.scenariosTable,
        signal,
      ),
      fetchSupabaseTable(
        supabaseConfig.url,
        supabaseConfig.anonKey,
        supabaseConfig.booksTable,
        signal,
      ),
    ]);

    const normalized = normalizePayload({ environments, scenarios, books });

    if (!normalized.scenarioEnvironments.length && !normalized.scenarios.length) {
      throw new Error("Supabase payload is empty or invalid");
    }

    return normalized;
  }

  const response = await fetch(getAppDataUrl(), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`App data request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const normalized = normalizePayload(payload);

  if (!normalized.scenarioEnvironments.length && !normalized.scenarios.length) {
    throw new Error("App data payload is empty or invalid");
  }

  return normalized;
}
