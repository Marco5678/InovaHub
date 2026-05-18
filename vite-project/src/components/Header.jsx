import { Menu, MonitorCog } from 'lucide-react'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="InovaHub inicio">
        <span className="brand-mark">
          <MonitorCog size={22} strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span>InovaHub</span>
      </a>

      <nav className="nav-links" aria-label="Navegacao principal">
        <a href="#servicos">Serviços</a>
        <a href="#destaques">Destaques</a>
        <a href="#solucoes">Soluções</a>
      </nav>

      <div className="header-actions">
        <a className="button button-ghost" href="#destaques">
          Indicadores
        </a>
        <button className="icon-button" type="button" aria-label="Abrir menu">
          <Menu size={22} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default Header
