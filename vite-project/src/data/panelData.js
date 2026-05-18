import {
  ArrowRight,
  BarChart3,
  Blocks,
  CheckCircle2,
  CloudCog,
  DatabaseZap,
  GraduationCap,
  Headphones,
  Layers3,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'

export const heroData = {
  eyebrow: 'Painel de Serviços Digitais',
  title: 'InovaHub centraliza produtos, operações e suporte em um único painel.',
  description:
    'Uma interface moderna para empresas que precisam visualizar recursos digitais, acompanhar métricas e acionar serviços com clareza.',
  primaryAction: 'Explorar serviços',
  secondaryAction: 'Ver indicadores',
  icons: [Rocket, GraduationCap, UsersRound],
}

export const services = [
  {
    icon: CloudCog,
    title: 'Automação em nuvem',
    description:
      'Fluxos digitais para aprovar solicitações, integrar setores e reduzir tarefas repetitivas.',
    tag: 'Operação',
  },
  {
    icon: BarChart3,
    title: 'Analytics executivo',
    description:
      'Indicadores em tempo real para acompanhar metas, gargalos e desempenho dos serviços.',
    tag: 'Dados',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança gerenciada',
    description:
      'Controles de acesso, auditoria de eventos e boas práticas para proteger informações críticas.',
    tag: 'Confiança',
  },
  {
    icon: Headphones,
    title: 'Atendimento omnichannel',
    description:
      'Centralize tickets, chat e histórico do cliente em uma experiência única para a equipe.',
    tag: 'Suporte',
  },
]

export const highlightData = {
  icon: Sparkles,
  title: 'Design system aplicado ao painel',
  description:
    'A interface combina React, Vite, Lucide React, tokens de cor, botões padronizados, cards consistentes e grids responsivos para entregar uma experiência coerente em desktop e celular.',
  metrics: [
    { value: '98%', label: 'SLA de disponibilidade' },
    { value: '42h', label: 'economizadas por semana' },
    { value: '12', label: 'integrações ativas' },
  ],
  advantages: [
    { icon: CheckCircle2, text: 'Componentes padronizados para escalar a interface' },
    { icon: DatabaseZap, text: 'Dados de serviços organizados por props reutilizáveis' },
    { icon: LockKeyhole, text: 'Hierarquia visual pensada para decisão rápida' },
  ],
}

export const workflowSteps = [
  { step: '01', label: 'Escolha o serviço', icon: Blocks },
  { step: '02', label: 'Configure parâmetros', icon: Layers3 },
  { step: '03', label: 'Acompanhe resultados', icon: ArrowRight },
]
