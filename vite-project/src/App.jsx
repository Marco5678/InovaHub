import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServiceCard from './components/ServiceCard'
import HighlightSection from './components/HighlightSection'
import Footer from './components/Footer'
import { heroData, highlightData, services, workflowSteps } from './data/panelData'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <HeroSection {...heroData} />

        <section className="section services-section" id="servicos">
          <div className="section-heading">
            <span className="section-kicker">Catálogo inteligente</span>
            <h2>Serviços digitais prontos para ativar</h2>
            <p>
              Os cards usam dados dinâmicos e recebem conteúdo por props,
              mantendo o mesmo padrão visual em toda a aplicação.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <HighlightSection id="destaques" {...highlightData} />

        <section className="section workflow-section" id="solucoes">
          <div className="workflow-copy">
            <span className="section-kicker">Fluxo de uso</span>
            <h2>Da solicitação ao acompanhamento em poucos passos</h2>
            <p>
              O painel foi pensado para apresentar recursos de uma startup fictícia
              sem perder a sensação de produto real: informação clara, ações
              visíveis e leitura rápida.
            </p>
          </div>

          <div className="workflow-steps" aria-label="Etapas do painel">
            {workflowSteps.map(({ step, label, icon: Icon }) => (
              <div className="workflow-step" key={step}>
                <span>{step}</span>
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
