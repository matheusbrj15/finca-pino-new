export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductBenefit = {
  title: string;
  description: string;
};

export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductReview = {
  name: string;
  city: string;
  rating: number;
  verified: boolean;
  text: string;
  images: ProductImage[];
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  price: number;
  oldPrice: number | null;
  checkoutUrl: string | null;
  availableVoltages: readonly ['48V'];
  images: ProductImage[];
  benefits: ProductBenefit[];
  applications: string[];
  specifications: ProductSpecification[];
  kitContents: string[];
  reviews: ProductReview[];
  faq: ProductFaq[];
};

// Cole aqui a URL externa de checkout quando ela estiver disponível.
// Todos os CTAs da página consomem esta única configuração.
export const PRODUCT_CHECKOUT_URL: string | null = null;

export const product: Product = {
  name: 'Kit Chave de Impacto Elétrica Nakasaki Profissional 48V Brushless 1/2" 3 em 1 Com Peças',
  shortName: 'Nakasaki Chave de Impacto 48V',
  eyebrow: 'CHAVE DE IMPACTO ELÉTRICA • MOTOR BRUSHLESS 48V',
  description:
    'Chave de impacto elétrica sem fio, motor brushless com 350 N.m de torque, painel com 2 modos de uso e encaixe 1/2". Acompanha 2 baterias 48V, carregador bivolt, 3 soquetes e maleta reforçada.',
  price: 276.89,
  oldPrice: 309.9,
  checkoutUrl: PRODUCT_CHECKOUT_URL,
  availableVoltages: ['48V'],
  images: [
    {
      src: '/product/chave-impacto-principal.png',
      alt: 'Kit Chave de Impacto Elétrica Nakasaki Profissional 48V em composição principal com maleta, 2 baterias e soquetes',
    },
    {
      src: '/product/chave-impacto-detalhes.png',
      alt: 'Detalhes da Chave de Impacto Nakasaki: encaixe 1/2", bateria 48V 4.0Ah, lanterna LED, chave de rotação e gatilho adaptativo',
    },
    {
      src: '/product/chave-impacto-kit.png',
      alt: 'Itens inclusos: chave de impacto, 2 baterias 48V, carregador, trava de chave e soquetes 19mm, 21mm e 22mm',
    },
    {
      src: '/product/chave-impacto-torque.png',
      alt: 'Potência de torque da Chave de Impacto Nakasaki: até 350 N.m para apertar e soltar porcas e parafusos',
    },
    {
      src: '/product/chave-impacto-aplicacoes.png',
      alt: 'Locais de uso da Chave de Impacto Nakasaki: marcenaria, mecânica, construção e manutenção',
    },
  ],
  benefits: [
    {
      title: 'Motor brushless de alta potência',
      description:
        'Torque máximo de 350 N.m com motor sem escovas (brushless), para mais força, durabilidade e menor desgaste da ferramenta.',
    },
    {
      title: 'Painel inteligente com 2 modos de uso',
      description:
        'Escolha entre rotação contínua para máxima agilidade ou o modo cadenciado, que evita espanar ou danificar parafusos e porcas.',
    },
    {
      title: 'Gatilho adaptativo e alta velocidade',
      description:
        'Velocidade de rotação de até 3300 RPM e impacto de até 2400 BPM, controlados pela pressão exercida no gatilho.',
    },
    {
      title: 'Autonomia com 2 baterias 48V',
      description:
        'Acompanha 2 baterias de lítio 48V 4.0Ah e carregador bivolt, para trocar e continuar o serviço sem esperar recarregar.',
    },
  ],
  applications: [
    'Marcenaria',
    'Mecânica',
    'Construção civil',
    'Manutenção geral',
    'Montagem de móveis',
    'Reparos automotivos',
  ],
  specifications: [
    { label: 'Marca / Linha', value: 'Nakasaki Professional' },
    { label: 'Motor', value: 'Sem escovas (brushless)' },
    { label: 'Torque máximo', value: '350 N.m' },
    { label: 'Velocidade de rotação', value: '0–3300 RPM' },
    { label: 'Velocidade de impacto', value: '0–2400 BPM' },
    { label: 'Encaixe do eixo', value: '1/2" (meia polegada)' },
    { label: 'Bateria', value: '48V Li-Ion 4.0Ah (2 unidades)' },
    { label: 'Carregador', value: 'Bivolt (110V/220V)' },
    { label: 'Sistema de reversão', value: 'Sim (aperta e desaperta)' },
    { label: 'Cor', value: 'Amarelo / preto' },
  ],
  kitContents: [
    '1 Chave de Impacto Elétrica com encaixe 1/2"',
    '2 baterias de lítio 48V (4.0Ah)',
    '1 carregador bivolt',
    '1 trava de segurança da chave',
    '1 soquete sextavado 19mm',
    '1 soquete sextavado 21mm',
    '1 soquete sextavado 22mm',
    '1 maleta de transporte reforçada',
  ],
  reviews: [],
  faq: [
    {
      question: 'Para quais usos essa chave de impacto é indicada?',
      answer:
        'É indicada para marcenaria, mecânica, construção civil e manutenção geral, apertando e desapertando parafusos e porcas com rapidez e segurança.',
    },
    {
      question: 'A chave funciona sem fio, só com bateria?',
      answer:
        'Sim. É uma chave de impacto elétrica sem fio, com motor brushless de 48V, e acompanha 2 baterias de 4.0Ah e 1 carregador bivolt.',
    },
    {
      question: 'É possível controlar a força e o modo de uso?',
      answer:
        'Sim. O painel de controle tem 2 modos: rotação contínua livre e modo cadenciado com parada automática, que ajuda a não danificar a rosca do parafuso ou da porca.',
    },
    {
      question: 'Quantas baterias acompanham o produto?',
      answer:
        'Acompanham 2 baterias de 48V 4.0Ah e 1 carregador bivolt, para revezar e manter o trabalho sem interrupção.',
    },
    {
      question: 'O que vem na caixa?',
      answer:
        'Acompanha a chave de impacto, 2 baterias 48V, 1 carregador bivolt, 1 trava de segurança, 3 soquetes (19mm, 21mm e 22mm) e 1 maleta de transporte reforçada.',
    },
    {
      question: 'Os soquetes podem ser trocados por outros?',
      answer:
        'Sim. O encaixe de 1/2" é o padrão mais comum do mercado e compatível com uma grande variedade de soquetes e ponteiras profissionais.',
    },
    {
      question: 'Qual é a garantia?',
      answer:
        'O prazo e as condições comerciais de garantia deverão ser confirmados no checkout e na documentação da compra. Nenhum prazo não confirmado é exibido nesta página.',
    },
  ],
};
