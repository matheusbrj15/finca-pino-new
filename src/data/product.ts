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
  customerPhotos: ProductImage[];
  faq: ProductFaq[];
};

// Cole aqui a URL externa de checkout quando ela estiver disponível.
// Todos os CTAs da página consomem esta única configuração.
export const PRODUCT_CHECKOUT_URL: string | null =
  'https://seguro.final-agora-br.shop/api/public/shopify?product=906924912448&store=9069';

export const product: Product = {
  name: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 Profissional',
  shortName: 'Menegotti MMA PRO 1000',
  eyebrow: 'MÁQUINA DE PINTURA AIRLESS • 1000W • 214 BAR • USO PROFISSIONAL',
  description:
    'Máquina de pintura airless Menegotti MMA PRO 1000, com sistema de alta pressão de até 214 bar (21,4 MPa) para pulverização eficiente e acabamento uniforme. Potência de 1000W e fluxo de 2,0L/min a 12 MPa (120 bar) com água, com mangueira de alta pressão de 15 metros e bico de até 0,021" (0,53mm). Indicada para paredes e interiores, fachadas, muros, grades, estruturas e pintura profissional em geral, com aplicação precisa e menor desperdício de tinta. Suporta materiais com viscosidade de até 20.000 MPa.s e temperatura de até 43°C. Acompanha pistola airless, mangueira de 15m, filtro de entrada, óleo lubrificante, prolongador/extensão e anéis de vedação. Garantia de 90 dias contra defeitos de fabricação.',
  price: 89.9,
  oldPrice: 189.9,
  checkoutUrl: PRODUCT_CHECKOUT_URL,
  availableVoltages: ['48V'],
  images: [
    {
      src: '/product/mma-pro1000-principal-1.png',
      alt: 'Máquina de pintura airless com pistola, mangueira de alta pressão, regulador de pressão e acessórios inclusos',
    },
    {
      src: '/product/mma-pro1000-principal-2.png',
      alt: 'Tecnologia airless: alta pressão, aplicação uniforme e maior produtividade na pintura',
    },
    {
      src: '/product/mma-pro1000-principal-3.png',
      alt: 'Máquina de pintura airless feita para diferentes projetos: paredes, telhados, cercas e pinturas profissionais',
    },
  ],
  benefits: [
    {
      title: 'Alta pressão para acabamento uniforme',
      description:
        'Sistema airless com pressão máxima de 214 bar (21,4 MPa) e fluxo de 2,0L/min a 12 MPa (120 bar) com água, para uma pulverização eficiente e um acabamento uniforme.',
    },
    {
      title: 'Alto rendimento em grandes áreas',
      description:
        'Ideal para projetos exigentes como fachadas, muros e grandes paredes, com aplicação precisa que reduz o desperdício de tinta.',
    },
    {
      title: 'Versátil para diferentes projetos',
      description:
        'Serve para paredes e interiores, telhados, cercas, fachadas, muros, grades e estruturas, tanto em uso doméstico quanto profissional.',
    },
    {
      title: 'Kit completo, pronto para usar',
      description:
        'Acompanha pistola airless, mangueira de alta pressão de 15m, filtro de entrada, óleo lubrificante, prolongador/extensão e anéis de vedação.',
    },
  ],
  applications: [
    'Pintura de paredes e interiores',
    'Fachadas e muros',
    'Grades e estruturas',
    'Telhados',
    'Cercas',
    'Construção civil e reformas',
    'Pintura profissional',
  ],
  specifications: [
    { label: 'Marca', value: 'Menegotti' },
    { label: 'Modelo', value: 'MMA PRO 1000' },
    { label: 'Tipo', value: 'Airless (sistema sem ar)' },
    { label: 'Potência', value: '1000W' },
    { label: 'Tensão', value: '127V ou 220V' },
    { label: 'Frequência', value: '60Hz' },
    { label: 'Cabo de alimentação', value: '3x1,5mm² - 6m' },
    { label: 'Pressão máxima de operação', value: '214 bar (21,4 MPa)' },
    { label: 'Fluxo de volume', value: '2,0 L/min a 12 MPa (120 bar) com água' },
    { label: 'Tamanho máximo do bico', value: '0,021" (0,53mm)' },
    { label: 'Viscosidade máxima do material', value: '20.000 MPa.s' },
    { label: 'Temperatura máxima do material a projetar', value: '43°C' },
    { label: 'Nível máximo de pressão sonora', value: '80 dB (A)' },
    { label: 'Peso', value: '15,2 kg' },
    { label: 'Dimensões (C x L x A)', value: '480 x 360 x 405 mm' },
    { label: 'Garantia', value: '90 dias contra defeitos de fabricação' },
  ],
  kitContents: [
    '1x Máquina de Pintura Airless MMA PRO 1000',
    '1x Pistola Airless',
    '1x Mangueira de Alta Pressão (15m)',
    '1x Filtro de Entrada',
    '1x Óleo Lubrificante',
    '1x Prolongador / Extensão',
    '2x Anéis de Vedação',
  ],
  reviews: [
    {
      name: 'Lucas Fraga',
      city: 'São Paulo, SP',
      rating: 5,
      verified: true,
      text: 'Essa máquina nessa configuração custa muito mais caro se for de outra marca. Essa é acessível e vale a pena. Não deixa a desejar.',
      images: [
        {
          src: '/product/mma-pro1000-cliente-06-kit-completo.png',
          alt: 'Kit completo da máquina Menegotti MMA PRO 1000 com mangueira, pistola e acessórios',
        },
      ],
    },
    {
      name: 'Rafael Bahia',
      city: 'Minas Gerais, MG',
      rating: 5,
      verified: true,
      text: 'A airless chegou super rápido, bem embalada, caixa totalmente preservada e mercadoria sem avarias. Não vou usar agora, mas recomendo.',
      images: [
        {
          src: '/product/mma-pro1000-cliente-05-caixa-menegotti.png',
          alt: 'Caixa da máquina Menegotti recebida sem avarias',
        },
      ],
    },
    {
      name: 'Pedro Campos',
      city: 'Rio de Janeiro, RJ',
      rating: 5,
      verified: true,
      text: 'Chegou no prazo, excelente máquina, adorei, super recomendo a compra da mesma.',
      images: [
        {
          src: '/product/mma-pro1000-cliente-04-maquina-caixa.png',
          alt: 'Máquina de pintura airless Menegotti dentro da caixa do produto',
        },
      ],
    },
    {
      name: 'Thiago Siqueira',
      city: 'Bahia, BA',
      rating: 5,
      verified: true,
      text: 'Fiz este muro completamente irregular em meio dia, com 2 demãos. O que seria impossível sem ela.',
      images: [
        {
          src: '/product/mma-pro1000-cliente-03-uso.png',
          alt: 'Cliente usando a máquina para pintar um muro irregular',
        },
      ],
    },
    {
      name: 'Mateus Caio',
      city: 'Paraná, PR',
      rating: 5,
      verified: true,
      text: 'A máquina é excelente, fácil de usar e fácil para limpar também! Com relação ao barulho, ouvi muitos comentários a respeito, no vídeo parece que o barulho é enorme, mas acho que é por conta do vídeo, pois o barulho que ela faz não é tão forte assim! Investimento garantido, comprei, gostei e indico.',
      images: [
        {
          src: '/product/mma-pro1000-cliente-01-pistola-caixa.png',
          alt: 'Pistola airless e acessórios ainda embalados na caixa',
        },
      ],
    },
    {
      name: 'João Fernandes',
      city: 'Pernambuco, PE',
      rating: 5,
      verified: true,
      text: 'Ótimo equipamento, deu um pouco de dor de cabeça na instalação, se atentar na válvula de entrada, estava travada, destravei com um tubo de caneta de plástico.',
      images: [
        {
          src: '/product/mma-pro1000-cliente-02-mangueira-acessorios.png',
          alt: 'Mangueira de alta pressão e acessórios da máquina airless',
        },
      ],
    },
  ],
  customerPhotos: [],
  faq: [
    {
      question: 'Para quais tipos de pintura essa máquina serve?',
      answer:
        'Paredes e interiores, fachadas, muros, grades, estruturas, telhados e cercas, além de uso profissional em construção civil e reformas.',
    },
    {
      question: 'Qual é a pressão máxima da máquina?',
      answer: 'Pressão máxima de operação de 214 bar (21,4 MPa), com fluxo de 2,0 L/min a 12 MPa (120 bar) com água.',
    },
    {
      question: 'O que acompanha o produto?',
      answer:
        'Máquina MMA PRO 1000, pistola airless, mangueira de alta pressão de 15m, filtro de entrada, óleo lubrificante, prolongador/extensão e 2 anéis de vedação.',
    },
    {
      question: 'Em qual voltagem a máquina funciona?',
      answer:
        'A máquina opera em 127V ou 220V, conforme a configuração do equipamento. Confirme a voltagem da sua rede elétrica antes de ligar.',
    },
    {
      question: 'A máquina faz muito barulho?',
      answer:
        'O nível máximo de pressão sonora é de 80 dB(A), próximo ao de um aspirador de pó ou liquidificador em funcionamento.',
    },
    {
      question: 'Qual é o peso e as dimensões da máquina?',
      answer: 'Peso de 15,2 kg e dimensões de 480 x 360 x 405 mm (C x L x A).',
    },
    {
      question: 'Qual a viscosidade máxima de tinta que a máquina suporta?',
      answer:
        'Suporta materiais com viscosidade de até 20.000 MPa.s e temperatura de até 43°C no material a ser projetado.',
    },
    {
      question: 'Qual é a garantia do produto?',
      answer: 'Garantia de 90 dias contra defeitos de fabricação.',
    },
  ],
};
