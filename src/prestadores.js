let prestadores = [
  {
    id: 1,
    nome: "Carlos Auto Center",
    categoria: "Mecânica Geral",
    descricao:
      "Mais de 12 anos de experiência em manutenção preventiva e corretiva de veículos nacionais e importados. Especializado em revisão completa, troca de óleo, alinhamento e freios. Valor médio da hora técnica: R$ 95. Revisões gerais levam entre 3 e 5 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 2,
    nome: "Motores Express",
    categoria: "Motores",
    descricao:
      "Oficina especializada em manutenção e retífica de motores flex e diesel. Trabalha com diagnóstico eletrônico e reconstrução completa. Valor médio da hora: R$ 140. Serviços completos de motor levam entre 8 e 20 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 3,
    nome: "Suspensão Forte",
    categoria: "Suspensão",
    descricao:
      "Especialistas em amortecedores, pivôs, bandejas e direção hidráulica. Atendimento rápido e foco em segurança automotiva. Valor médio da hora: R$ 85. Trocas simples costumam durar cerca de 2 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 4,
    nome: "Prime Pinturas Automotivas",
    categoria: "Lanternagem/Pintura",
    descricao:
      "Especializada em recuperação automotiva, polimento técnico e pintura completa. Utiliza cabine profissional e tintas premium. Valor médio da hora: R$ 120. Pinturas parciais levam de 6 a 12 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 5,
    nome: "Oficina Dois Irmãos",
    categoria: "Mecânica Geral",
    descricao:
      "Atendimento especializado em veículos populares e utilitários. Atua com revisão preventiva, sistema de freios e troca de embreagem. Valor médio da hora: R$ 90. Revisões completas levam aproximadamente 4 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 6,
    nome: "Power Motor Garage",
    categoria: "Motores",
    descricao:
      "Especializada em motores turbo e preparação leve para veículos esportivos. Atua há mais de 10 anos no mercado automotivo. Valor médio da hora técnica: R$ 160. Preparações completas podem levar mais de 15 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 7,
    nome: "Center Suspensões",
    categoria: "Suspensão",
    descricao:
      "Serviços de alinhamento, balanceamento e troca de componentes da suspensão. Atendimento rápido com peças homologadas. Valor médio da hora: R$ 80. Serviços básicos levam entre 1 e 3 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 8,
    nome: "Elite Funilaria",
    categoria: "Lanternagem/Pintura",
    descricao:
      "Especializada em funilaria premium, recuperação pós-colisão e pintura automotiva completa. Valor médio da hora: R$ 130. Recuperações estruturais podem levar vários dias.",
    imagemUrl:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 9,
    nome: "Auto Mecânica Nacional",
    categoria: "Mecânica Geral",
    descricao:
      "Atendimento focado em manutenção preventiva de carros nacionais. Especialistas em sistemas de arrefecimento e freios. Valor médio da hora: R$ 88. Serviços comuns levam cerca de 2 a 4 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 10,
    nome: "Retífica Cearense",
    categoria: "Motores",
    descricao:
      "Empresa com tradição em retífica de motores e cabeçotes. Trabalha com veículos leves e utilitários. Valor médio da hora técnica: R$ 150. Retíficas completas levam entre 12 e 24 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 11,
    nome: "Impacto Suspensão",
    categoria: "Suspensão",
    descricao:
      "Especializada em suspensão esportiva e rebaixamento regularizado. Atua também com direção elétrica e hidráulica. Valor médio da hora: R$ 95. Instalações levam em média 3 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 12,
    nome: "Nova Era Pinturas",
    categoria: "Lanternagem/Pintura",
    descricao:
      "Oficina especializada em pintura automotiva, martelinho de ouro e recuperação estética. Atendimento para seguradoras e particulares. Valor médio da hora: R$ 115. Pequenos reparos levam entre 2 e 5 horas.",
    imagemUrl:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=687&auto=format&fit=crop",
  },
];

function getPrestadorById(id) {
  return prestadores.find((prestador) => prestador.id === Number(id));
}
