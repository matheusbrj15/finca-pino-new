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
export const PRODUCT_CHECKOUT_URL: string | null = null;

export const product: Product = {
  name: 'DDPAI Mini Pro Uber Câmera Veicular 4K Ângulo de 140° Dash Cam Wi-Fi Visão Noturna Monitoramento 24h',
  shortName: 'DDPAI Mini Pro 4K',
  eyebrow: 'CÂMERA VEICULAR 4K • WI-FI • VISÃO NOTURNA • ÂNGULO 140° • SUPERCAPACITOR',
  description:
    'Câmera veicular DDPAI Mini Pro 4K com gravação em Ultra HD (3840×2160P), ângulo de visão de 140°, visão noturna NightVIS 2.0 e lente rotativa de 360°. Conecta por Wi-Fi ao aplicativo DDPAI para visualizar, baixar e compartilhar vídeos. Sensor G com gravação de emergência automática em colisões, gravação em loop com sobrescrição automática e supercapacitor, que funciona de -20°C a 70°C sem risco de ignição. Instalação discreta atrás do retrovisor. Necessário cartão microSD Classe 10/U3 (até 256GB, vendido separadamente); o monitoramento de estacionamento 24h exige o Hardwire Kit exclusivo DDPAI (vendido separadamente).',
  price: 89.9,
  oldPrice: 179.9,
  checkoutUrl: PRODUCT_CHECKOUT_URL,
  availableVoltages: ['48V'],
  images: [
    {
      src: '/product/ddpai-kit-completo.png',
      alt: 'Câmera Veicular DDPAI com Wi-Fi, app e visão noturna, e itens inclusos: cabo USB, carregador veicular, manual do usuário e adesivo 3M',
    },
    {
      src: '/product/ddpai-produto-recursos.png',
      alt: 'Câmera veicular DDPAI Mini Pro 2K com recursos: visão noturna, bloqueio de emergência, controle por app, gravação 2K, gravação em loop, monitoramento 24h, supercapacitor e lente rotativa 360°',
    },
    {
      src: '/product/ddpai-mini-pro-2k-banner.png',
      alt: 'DDPAI Mini Pro 2K - controle por aplicativo, Wi-Fi, sensor G, abertura F2.0, visão noturna, gravação em loop, supercapacitor e certificação Anatel',
    },
  ],
  benefits: [
    {
      title: 'Gravação 4K com visão noturna real',
      description:
        'Ultra HD 3840×2160P a 30fps com tecnologia NightVIS 2.0, que preserva os detalhes mesmo sob iluminação fraca ou faróis intensos à noite.',
    },
    {
      title: 'Ângulo de 140° com lente rotativa 360°',
      description:
        'Campo de visão amplo de 105° a 140°, com lente que gira livremente para cobrir uma área maior do trajeto.',
    },
    {
      title: 'Supercapacitor: mais segurança em temperaturas extremas',
      description:
        'Substitui a bateria de lítio por um supercapacitor, sem risco de ignição, com melhor resistência térmica de -20°C a 70°C.',
    },
    {
      title: 'Wi-Fi integrado e controle pelo app DDPAI',
      description:
        'Conecte por Wi-Fi e visualize, reproduza, baixe e compartilhe os vídeos direto do celular, sem precisar retirar o cartão de memória.',
    },
  ],
  applications: [
    'Motoristas de aplicativo (Uber/99)',
    'Uso pessoal no dia a dia',
    'Viagens de estrada',
    'Frotas e táxis',
    'Prova em caso de acidente',
    'Monitoramento de estacionamento (com Hardwire Kit)',
  ],
  specifications: [
    { label: 'Marca', value: 'DDPAI' },
    { label: 'Modelo', value: 'Mini Pro 4K' },
    { label: 'Fabricante do chip', value: 'HiSilicon' },
    { label: 'Pixels', value: '12 megapixels' },
    { label: 'Resolução de vídeo', value: '3840×2160P (4K Ultra HD) @30fps' },
    { label: 'Formato de vídeo', value: 'AVI (H.265/H.264)' },
    { label: 'Ângulo de visão', value: '105° a 140°' },
    { label: 'Cartão de memória', value: 'microSD Classe 10/U3, até 256GB (vendido separadamente)' },
    { label: 'Conectividade', value: 'Wi-Fi 2.4GHz + app DDPAI (Android/iOS)' },
    { label: 'Sensor de gravidade (G-Sensor)', value: 'Sim, com gravação de emergência automática' },
    { label: 'Detecção de movimento', value: 'Sim' },
    { label: 'Gravação em loop', value: 'Sim, com sobrescrição automática' },
    { label: 'Alimentação', value: 'Supercapacitor (-20°C a 70°C)' },
    { label: 'Instalação', value: 'Portátil, atrás do retrovisor' },
    { label: 'Garantia', value: '1 ano' },
  ],
  kitContents: [
    '1 Câmera Veicular DDPAI Mini Pro',
    '1 Pé de cabra (ferramenta de instalação)',
    '1 Cabo de alimentação',
    '1 Carregador veicular',
    '1 Manual do usuário',
    '1 Adesivo 3M',
    '1 Adesivos eletrostáticos',
    'Cartão microSD e Hardwire Kit NÃO inclusos (vendidos separadamente)',
  ],
  reviews: [],
  customerPhotos: [],
  faq: [
    {
      question: 'A câmera vem com cartão de memória incluso?',
      answer:
        'Não. É necessário um cartão microSD Classe 10 ou U3, de até 256GB, vendido separadamente. Evite cartões genéricos ou linhas "Ultra" de outros fornecedores, pois podem não sustentar a gravação em alta resolução.',
    },
    {
      question: 'O monitoramento de estacionamento 24h funciona sem instalar nada extra?',
      answer:
        'Não. Esse recurso exige o Hardwire Kit exclusivo da DDPAI, vendido separadamente. Sem ele, a câmera grava apenas enquanto o veículo estiver ligado.',
    },
    {
      question: 'A câmera tem visão noturna?',
      answer:
        'Sim. A tecnologia NightVIS 2.0 preserva os detalhes da gravação mesmo sob iluminação fraca de postes ou com faróis intensos.',
    },
    {
      question: 'Como faço para ver os vídeos gravados no celular?',
      answer:
        'A câmera tem Wi-Fi integrado. Basta conectar pelo aplicativo DDPAI para visualizar em tempo real, reproduzir, baixar e compartilhar os vídeos.',
    },
    {
      question: 'O que acontece em caso de acidente?',
      answer:
        'O sensor G embutido detecta a colisão e ativa automaticamente a gravação de emergência, protegendo o arquivo daquele momento contra sobrescrição.',
    },
    {
      question: 'Qual é a resolução de gravação?',
      answer: 'Ultra HD 4K (3840×2160P) a 30fps, com sensor de 12 megapixels.',
    },
    {
      question: 'Qual é o ângulo de visão da câmera?',
      answer: 'Ângulo amplo de 105° a 140°, com lente rotativa de 360° para ajustar a cobertura.',
    },
    {
      question: 'Qual é a garantia do produto?',
      answer:
        'O prazo e as condições comerciais de garantia deverão ser confirmados no checkout e na documentação da compra. Nenhum prazo não confirmado é exibido nesta página.',
    },
  ],
};
