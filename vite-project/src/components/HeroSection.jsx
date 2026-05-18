import { ArrowRight, PlayCircle } from 'lucide-react'

function HeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  icons,
}) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#servicos">
            {primaryAction}
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#destaques">
            <PlayCircle size={18} strokeWidth={2.2} aria-hidden="true" />
            {secondaryAction}
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Resumo do painel NexaFlow">
        <div className="panel-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="panel-summary">
          <div>
            <span>Operações ativas</span>
            <strong>184</strong>
          </div>
          <div>
            <span>Tempo médio</span>
            <strong>2.4h</strong>
          </div>
        </div>
        <div className="panel-chart">
          <span style={{ height: '44%' }}></span>
          <span style={{ height: '72%' }}></span>
          <span style={{ height: '56%' }}></span>
          <span style={{ height: '88%' }}></span>
          <span style={{ height: '64%' }}></span>
        </div>
        <div className="panel-tiles">
          {icons.map((Icon, index) => (
            <div className="panel-tile" key={index}>
              <Icon size={24} strokeWidth={2} aria-hidden="true" />
              <span>{['Lançamentos', 'Treinamentos', 'Usuários'][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
