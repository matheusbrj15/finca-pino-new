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
  availableVoltages: readonly ['127V', '220V'];
  images: ProductImage[];
  benefits: ProductBenefit[];
  applications: string[];
  specifications: ProductSpecification[];
  kitContents: string[];
  reviews: ProductReview[];
  faq: ProductFaq[];
};

// Cole aqui a URL externa da Zedy quando ela estiver disponível.
// Todos os CTAs da página consomem esta única configuração.
export const PRODUCT_CHECKOUT_URL: string | null = null;

export const product: Product = {
  name: 'Fixadora Finca Pino Profissional Ação Direta 27mm Reforçada',
  shortName: 'Menegotti MMA PRO 1000',
  eyebrow: 'AIRLESS PROFISSIONAL • 1000 W',
  description:
    'Alta pressão e maior produtividade para aplicar tintas com acabamento uniforme em diferentes tipos de projeto.',
  price: 79.9,
  oldPrice: 189.9,
  checkoutUrl: PRODUCT_CHECKOUT_URL,
  availableVoltages: ['127V', '220V'],
  images: [
    {
      src: '/product/finca-pino-principal.png',
      alt: 'Fixadora Finca Pino Profissional Ação Direta 27mm em composição principal',
    },
    {
      src: '/product/finca-pino-performance.png',
      alt: 'Especificações da Fixadora Finca Pino: 27mm, ação direta, kits de 50/100/200 pinos',
    },
    {
      src: '/product/finca-pino-aplicacoes.png',
      alt: 'Fixadora Finca Pino em uso: madeira, rodapé, molduras, gesso e MDF',
    },
    {
      src: '/product/finca-pino-kit.png',
      alt: 'O que vem na caixa: fixadora, kit de pinos, óculos de proteção e maleta com acessórios',
    },
  ],
  benefits: [
    {
      title: 'Alta pressão para produzir mais',
      description:
        'Pressão máxima de 214 bar e vazão máxima de 2,0 L/min para aplicações profissionais.',
    },
    {
      title: 'Controle durante a aplicação',
      description:
        'Regulador de pressão integrado para adequar o trabalho ao material e ao acabamento desejado.',
    },
    {
      title: 'Versátil para diferentes materiais',
      description:
        'Indicada para tinta acrílica, látex, verniz e PU, sempre respeitando a viscosidade recomendada.',
    },
    {
      title: 'Alcance para projetos maiores',
      description:
        'Acompanha mangueira de 15 m e prolongador de 50 cm para ampliar a mobilidade no trabalho.',
    },
  ],
  applications: [
    'Paredes',
    'Telhados',
    'Pisos',
    'Cercas',
    'Garagens',
    'Móveis',
    'Contêineres',
  ],
  specifications: [
    { label: 'Potência', value: '1000 W' },
    { label: 'Pressão máxima', value: '214 bar (21,4 MPa)' },
    { label: 'Vazão máxima', value: '2,0 L/min' },
    { label: 'Mangueira', value: '15 m' },
    { label: 'Bico máximo', value: '0,021” (0,53 mm)' },
    { label: 'Peso', value: '15,2 kg' },
    { label: 'Dimensões', value: '480 × 360 × 405 mm' },
    { label: 'Voltagens', value: '127 V ou 220 V' },
  ],
  kitContents: [
    '2 anéis de vedação',
    '2 chaves fixas 17 × 19 mm',
    '1 prolongador para pistola de 50 cm',
    '1 pistola de projeção com bico 519 e filtro branco malha 50',
    '1 bisnaga de óleo',
    '1 mangueira de 15 m',
  ],
  // Aguardando avaliações reais de clientes para preencher esta seção.
  reviews: [],
  faq: [
    {
      question: 'Para quais tipos de pintura ela é indicada?',
      answer:
        'O manual técnico indica aplicações em paredes, telhados, pisos, cercas, garagens, móveis e contêineres, entre outros trabalhos compatíveis.',
    },
    {
      question: 'A máquina é indicada para uso profissional?',
      answer:
        'Sim. A Menegotti classifica a MMA PRO 1000 para aplicações profissionais mais pesadas, respeitando os limites técnicos e as instruções do manual.',
    },
    {
      question: 'Quais tipos de tinta podem ser utilizados?',
      answer:
        'A fabricante informa compatibilidade com tintas acrílicas, látex, vernizes e PU. A viscosidade e a diluição indicadas pelo fabricante da tinta devem ser verificadas antes do uso.',
    },
    {
      question: 'É possível ajustar a pressão?',
      answer:
        'Sim. O equipamento possui regulador de pressão. O ajuste deve seguir o material, o bico utilizado e as orientações do manual técnico.',
    },
    {
      question: 'O que acompanha o produto?',
      answer:
        'Acompanha mangueira de 15 m, pistola com bico 519 e filtro, prolongador de 50 cm, dois anéis de vedação, duas chaves fixas e uma bisnaga de óleo.',
    },
    {
      question: 'Existem versões 127 V e 220 V?',
      answer:
        'Sim. A MMA PRO 1000 possui modelos de 127 V e 220 V. A seleção da voltagem será adicionada quando o checkout do produto estiver disponível.',
    },
    {
      question: 'Qual é a garantia?',
      answer:
        'O prazo e as condições comerciais de garantia deverão ser confirmados no checkout e na documentação da compra. Nenhum prazo não confirmado é exibido nesta página.',
    },
  ],
};
