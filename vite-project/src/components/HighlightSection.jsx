function HighlightSection({ id, icon: Icon, title, description, metrics, advantages }) {
  return (
    <section className="section highlight-section" id={id}>
      <div className="highlight-copy">
        <span className="highlight-icon">
          <Icon size={26} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="section-kicker">Padrão visual</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric-item" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="advantages-list">
        {advantages.map(({ icon: AdvantageIcon, text }) => (
          <div className="advantage-item" key={text}>
            <AdvantageIcon size={20} strokeWidth={2.2} aria-hidden="true" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HighlightSection
