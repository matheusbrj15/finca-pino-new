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
  availableVoltages: readonly ['21V'];
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
  name: 'Serra Circular Elétrica Tecepo Profissional Sem Fio 150mm 21V',
  shortName: 'Tecepo Serra Circular 21V',
  eyebrow: 'SERRA CIRCULAR SEM FIO • MOTOR BRUSHLESS',
  description:
    'Serra circular elétrica sem fio, motor brushless de alta potência, disco de 150mm e duas baterias 21V inclusas para cortes profissionais em madeira, metal, PVC e azulejos.',
  price: 559,
  oldPrice: 799,
  checkoutUrl: PRODUCT_CHECKOUT_URL,
  availableVoltages: ['21V'],
  images: [
    {
      src: '/product/serra-tecepo-principal.png',
      alt: 'Serra Circular Elétrica Tecepo Profissional Sem Fio 150mm em composição principal',
    },
    {
      src: '/product/serra-tecepo-performance.png',
      alt: 'Especificações da Serra Tecepo: motor brushless 1280W, 7200 RPM, disco 150mm, bateria 21V',
    },
    {
      src: '/product/serra-tecepo-aplicacoes.png',
      alt: 'Serra Tecepo em uso: corte em metal, PVC, madeira e azulejos',
    },
    {
      src: '/product/serra-tecepo-kit.png',
      alt: 'O que vem na caixa: serra, 2 baterias 21V, carregador, 2 lâminas reserva, óculos e luvas',
    },
  ],
  benefits: [
    {
      title: 'Motor brushless de alta potência',
      description:
        '1280 W com motor sem escovas (brushless), para mais durabilidade, menos manutenção e maior aproveitamento da bateria.',
    },
    {
      title: 'Cortes precisos em múltiplos materiais',
      description:
        'Disco de 150 mm (furo 20 mm) apto para madeira, metal, PVC e azulejos, com profundidade de corte de até 54 mm a 90°.',
    },
    {
      title: 'Ajuste de ângulo de inclinação',
      description:
        'Inclinação regulável de 0° a 45° para cortes angulados com precisão em diferentes espessuras de material.',
    },
    {
      title: 'Autonomia para o dia todo',
      description:
        'Acompanha 2 baterias 21V 4.0Ah e carregador, para trocar e continuar o serviço sem esperar recarregar.',
    },
  ],
  applications: [
    'Madeira',
    'Metal',
    'PVC',
    'Azulejos',
    'Compensado',
    'MDF',
  ],
  specifications: [
    { label: 'Marca / Linha', value: 'Tecepo Professional' },
    { label: 'Modelo', value: 'M14-4519' },
    { label: 'Motor', value: 'Sem escovas (brushless)' },
    { label: 'Potência', value: '1280 W (1,28 kW)' },
    { label: 'Tensão', value: 'DC 21V' },
    { label: 'Velocidade sem carga', value: '0–7200 rpm' },
    { label: 'Diâmetro da lâmina', value: '150 mm (furo 20 mm)' },
    { label: 'Profundidade de corte a 90°', value: '54 mm' },
    { label: 'Profundidade de corte a 45°', value: '32 mm' },
    { label: 'Ajuste de inclinação', value: '0–45°' },
    { label: 'Cor', value: 'Verde-limão' },
  ],
  kitContents: [
    '1 serra circular Tecepo 21V',
    '2 baterias 21V 4.0Ah',
    '1 carregador rápido',
    '2 lâminas de reserva 150 mm',
    '1 óculos de proteção',
    '1 par de luvas',
  ],
  reviews: [],
  faq: [
    {
      question: 'Para quais materiais essa serra é indicada?',
      answer:
        'A Tecepo Professional é indicada para cortes em madeira, metal, PVC e azulejos, entre outros materiais compatíveis com a lâmina de 150 mm.',
    },
    {
      question: 'A serra funciona sem fio, só com bateria?',
      answer:
        'Sim. É uma serra circular elétrica sem fio, com motor brushless de 21V, e acompanha duas baterias 4.0Ah e um carregador.',
    },
    {
      question: 'É possível ajustar o ângulo de corte?',
      answer:
        'Sim. A inclinação é regulável de 0° a 45°, com profundidade máxima de 54 mm a 90° e 32 mm a 45°.',
    },
    {
      question: 'Quantas baterias acompanham o produto?',
      answer:
        'Acompanham 2 baterias de 21V 4.0Ah e 1 carregador, para revezar e manter o trabalho sem interrupção.',
    },
    {
      question: 'O que vem na caixa?',
      answer:
        'Acompanha a serra, 2 baterias 21V 4.0Ah, 1 carregador, 2 lâminas de reserva de 150 mm, 1 óculos de proteção e 1 par de luvas.',
    },
    {
      question: 'A lâmina pode ser trocada?',
      answer:
        'Sim. O produto já acompanha 2 lâminas de reserva de 150 mm (furo de 20 mm), compatíveis com o disco original.',
    },
    {
      question: 'Qual é a garantia?',
      answer:
        'O prazo e as condições comerciais de garantia deverão ser confirmados no checkout e na documentação da compra. Nenhum prazo não confirmado é exibido nesta página.',
    },
  ],
};
