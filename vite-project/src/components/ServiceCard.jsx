import { ArrowUpRight } from 'lucide-react'

function ServiceCard({ icon: Icon, title, description, tag }) {
  return (
    <article className="service-card">
      <div className="card-header">
        <span className="service-icon">
          <Icon size={24} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="service-tag">{tag}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#destaques" aria-label={`Ver detalhes de ${title}`}>
        Ver detalhes
        <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
      </a>
    </article>
  )
}

export default ServiceCard
