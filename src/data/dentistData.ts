import { ServiceItem, ResultCase, ClinicInfo } from '../types';

export const WHATSAPP_BASE_URL = 'https://api.whatsapp.com/send?phone=5582988191366&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dr%C2%AA.Katherine%20Cavalcante!&utm_source=ig&utm_medium=social&utm_content=link_in_bio';

export const MAPS_LOCATION_URL = 'https://share.google/lYD88dieEThnJI4k9';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Dra. Katherine Cavalcante',
  subtitle: 'Odontologia & Estética Orofacial',
  doctorName: 'Dra. Katherine Cavalcante',
  crmCro: 'CRO-AL Especialista',
  phone: '5582988191366',
  phoneDisplay: '(82) 98819-1366',
  whatsappUrl: WHATSAPP_BASE_URL,
  mapsUrl: MAPS_LOCATION_URL,
  address: {
    street: 'Edifício Harmony Trade Center, Av. Dr. Antônio Gomes de Barros',
    neighborhood: 'Jatiúca',
    city: 'Maceió',
    state: 'AL',
  },
  hours: {
    weekdays: 'Segunda a Sexta: 08:00 às 18:00',
    saturday: 'Sábado: 08:00 às 12:00 (com agendamento)',
    sunday: 'Domingo: Fechado',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'aparelho-autoligado',
    badge: 'Aparelho Autoligado: O sorriso perfeito ao seu alcance!',
    shortTitle: 'Aparelho Autoligado',
    subtitle: 'Tecnologia ortodôntica sem borrachinhas para movimentos rápidos e confortáveis',
    description:
      'O aparelho autoligado é uma opção moderna de tratamento ortodôntico que dispensa o uso de elásticos ou ligaduras para segurar os fios. Com design avançado, ele proporciona maior conforto e eficiência, permitindo movimentos mais precisos. Ideal para quem busca um sorriso perfeito de forma prática e rápida.',
    bulletPoints: [
      'Tecnologia avançada que utiliza fio termoativado para resultados mais rápidos.',
      'Menor frequência de consultas com manutenção a cada 60 dias.',
      'Tratamento 30% mais rápido do que o aparelho convencional e menos doloroso.',
      'Praticidade na higiene com menos acúmulo de sujeira em comparação aos aparelhos convencionais.',
    ],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Paciente com aparelho autoligado estético e sorriso alinhado',
    iconName: 'bracket',
    whatsappCta: 'Quero saber mais sobre Aparelho Autoligado',
  },
  {
    id: 'aparelho-invisivel',
    badge: 'Aparelho Invisível: Um sorriso discreto e radiante!',
    shortTitle: 'Aparelho Invisível',
    subtitle: 'Alinhadores transparentes sob medida com máximo conforto e discrição',
    description:
      'O aparelho invisível é uma opção discreta e estética para correção dos dentes. Feito de material transparente, ele é praticamente imperceptível durante o uso. Proporciona conforto e eficiência no alinhamento dental, permitindo um sorriso bonito sem interferir na aparência.',
    bulletPoints: [
      'Removível, permitindo maior liberdade e praticidade para os pacientes poderem comer o que quiserem.',
      'Quase invisível, oferecendo discrição durante todo o tratamento.',
      'Resultados estéticos superiores, proporcionando um sorriso mais bonito.',
      'Confeccionado a partir de um planejamento virtual personalizado e individualizado para cada cliente.',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Alinhador invisível transparente e sorriso estético',
    iconName: 'aligner',
    whatsappCta: 'Quero agendar avaliação para Aparelho Invisível',
  },
  {
    id: 'clareamento',
    badge: 'Clareamento Dental: Dentes brancos com brilho natural!',
    shortTitle: 'Clareamento',
    subtitle: 'Luminosidade e rejuvenescimento do sorriso com máxima proteção ao esmalte',
    description:
      'O clareamento dental é o procedimento ideal para devolver a vitalidade e a cor natural aos dentes. Desenvolvido com protocolos seguros e substâncias de alta tecnologia, elimina pigmentos de café, vinho e alimentos sem causar sensibilidade ou desgaste.',
    bulletPoints: [
      'Protocolos modernos de clareamento a laser em consultório ou caseiro supervisionado.',
      'Fórmula exclusiva com dessensibilizantes que garantem total conforto durante o tratamento.',
      'Sorriso visivelmente mais claro, luminoso e rejuvenescido desde a primeira sessão.',
      'Planejamento personalizado conforme a tonalidade desejada e tom de pele do paciente.',
    ],
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Clareamento dental estético e sorriso branco radiante',
    iconName: 'whitening',
    whatsappCta: 'Quero agendar sessão de Clareamento Dental',
  },
  {
    id: 'preenchimento-facial-labial',
    badge: 'Preenchimento Facial e Labial: Contorno e hidratação com elegância!',
    shortTitle: 'Preenchimento Facial e Labial',
    subtitle: 'Realce da arquitetura labial e contornos com ácido hialurônico de alta pureza',
    description:
      'O preenchimento com ácido hialurônico visa restabelecer o volume, a hidratação e a definição anatômica dos lábios e da face. Cada planejamento é estritamente personalizado para respeitar suas proporções únicas, garantindo elegância e naturalidade.',
    bulletPoints: [
      'Definição do arco do cupido, contorno e hidratação profunda dos lábios.',
      'Harmonização de queixo, mandíbula e maçãs do rosto para suporte e jovialidade.',
      'Substância 100% biocompatível e absorvível com alto perfil de segurança.',
      'Técnicas anestésicas exclusivas da odontologia para máximo conforto.',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Preenchimento labial sutil e contorno facial harmônico',
    iconName: 'lips',
    whatsappCta: 'Quero agendar avaliação de Preenchimento Labial',
  },
];

export const CLINICAL_RESULTS: ResultCase[] = [
  {
    id: 'caso-1-autoligado-ruivo',
    title: 'Ortodontia com Aparelho Autoligado & Alinhamento',
    category: 'Ortodontia Integrada & Aparelho Autoligado',
    description: 'Tratamento de correção de apinhamento severo e mordida desalinhada em paciente jovem ruivo. Nivelamento e alinhamento com tecnologia autoligada sem extrações, conferindo sorriso harmônico e iluminado.',
    timeframe: 'Evolução clínica monitorada a cada 60 dias',
    beforeImage: '',
    afterImage: '',
    patientName: 'Caso Clínico 01 - Aparelho Autoligado',
    doctorTag: 'Dra. Katherine Cavalcante - CRO/AL Especialista',
  },
  {
    id: 'caso-2-reabilitacao-homem',
    title: 'Reabilitação Oral Estética & Facetas',
    category: 'Reabilitação Oral & Prótese Estética',
    description: 'Reabilitação estética e funcional do arco superior em paciente adulto. Resgate da anatomia dental, dimensão vertical correta e sorriso amplo com tonalidade branca natural e equilíbrio oclusal.',
    timeframe: 'Planejamento digital do sorriso',
    beforeImage: '',
    afterImage: '',
    patientName: 'Caso Clínico 02 - Reabilitação Oral',
    doctorTag: 'Dra. Katherine Cavalcante - CRO/AL Especialista',
  },
  {
    id: 'caso-3-harmonizacao-dupla',
    title: 'Transformação do Sorriso & Harmonização Orofacial',
    category: 'Harmonização Orofacial & Estética Dental',
    description: 'Resultados de alta precisão estética: sorriso masculino alinhado e natural combinado com sorriso feminino de dentes perfeitamente esculpidos e contorno labial harmônico.',
    timeframe: 'Protocolo integrado personalizado',
    beforeImage: '',
    afterImage: '',
    patientName: 'Caso Clínico 03 - HOF & Estética',
    doctorTag: 'Dra. Katherine Cavalcante - CRO/AL Especialista',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Juliana Medeiros',
    role: 'Paciente de Alinhador Invisível',
    text: 'A Dra. Katherine é impecável! O tratamento com os alinhadores foi super confortável, ninguém percebia que eu estava usando e o resultado final superou todas as minhas expectativas. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Carlos Eduardo Ramos',
    role: 'Paciente de Aparelho Autoligado',
    text: 'Procurei a clínica para colocar o aparelho autoligado e a diferença para o tradicional é impressionante. Muito menos dor e as manutenções a cada 60 dias facilitaram demais minha rotina.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Renata Albuquerque',
    role: 'Paciente de Harmonização & Clareamento',
    text: 'Fiz clareamento e preenchimento labial com a Dra. Katherine. Ela tem uma mão extremamente leve e um senso estético muito apurado. Ficou extremamente natural, do jeito que eu sempre quis!',
    rating: 5,
  },
];

export const CLINIC_DIFFERENTIALS = [
  {
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos digitais modernos para diagnósticos precisos e tratamentos mais rápidos e confortáveis.',
  },
  {
    title: 'Atendimento Humanizado',
    description: 'Cuidado personalizado e acolhedor em cada consulta, priorizando sua tranquilidade e bem-estar.',
  },
  {
    title: 'Planejamento Sob Medida',
    description: 'Cada sorriso é único. Seus tratamentos são planejados individualmente para atender suas necessidades e metas.',
  },
  {
    title: 'Biossegurança Rigorosa',
    description: 'Protocolos hospitalares de esterilização e higienização para a total proteção de sua saúde.',
  },
];
