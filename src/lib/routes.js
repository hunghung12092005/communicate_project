export function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function buildIntroPath() {
  return "/";
}

export function buildEnvironmentPath() {
  return "/environment";
}

export function buildInterviewPath() {
  return "/interview";
}

export function buildZonePath(environmentId) {
  return `/environment/${environmentId}/zones`;
}

export function buildScenarioPath(environmentId, zoneId) {
  return `/environment/${environmentId}/zones/${zoneId}`;
}

export function parsePathname(pathname) {
  const normalized = normalizePathname(pathname);
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0) {
    return { page: "intro" };
  }

  if (segments[0] !== "environment") {
    if (segments[0] === "interview" && segments.length === 1) {
      return { page: "interview" };
    }

    return { page: "invalid" };
  }

  if (segments.length === 1) {
    return { page: "environment" };
  }

  if (segments.length === 3 && segments[2] === "zones") {
    return { page: "zone", environmentId: segments[1] };
  }

  if (segments.length === 4 && segments[2] === "zones") {
    return { page: "scenario", environmentId: segments[1], zoneId: segments[3] };
  }

  return { page: "invalid" };
}
