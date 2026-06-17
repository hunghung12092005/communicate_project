function BrandMark({ compact = false, invert = false, className = "" }) {
  return (
    <span className={`brand-mark ${compact ? "brand-mark-compact" : ""} ${invert ? "brand-mark-invert" : ""} ${className}`.trim()}>
      <span className="brand-mark-emblem" aria-hidden="true">
        <span className="brand-mark-dot" />
        <span className="brand-mark-stem" />
      </span>
      <span className="brand-mark-copy">
        <strong>daily</strong>
        <span className="brand-mark-divider" aria-hidden="true" />
        <em>dialogue</em>
      </span>
    </span>
  );
}

export default BrandMark;
