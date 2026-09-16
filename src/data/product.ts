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
  'https://seguro.final-agora-br.shop/api/public/shopify?product=906962988774&store=9069';

export const product: Product = {
  name: 'Escada Multifuncional Little Giant Conquest 2.0 Modelo 17 - Extra Pesado 136kg, Alcance 5,51m',
  shortName: 'Little Giant Conquest 2.0',
  eyebrow: 'KIT 3 EM 1 • CHAVE DE IMPACTO, FURADEIRA E PARAFUSADEIRA • MOTOR BRUSHLESS 48V',
  description:
    'Kit 3 em 1: chave de impacto elétrica sem fio que também funciona como furadeira e parafusadeira com os adaptadores inclusos. Motor brushless com 350 N.m de torque, painel com 2 modos de uso e encaixe 1/2". Acompanha 2 baterias 48V, carregador bivolt, mandril para furadeira, adaptador para parafusadeira, pontas, brocas, 3 soquetes e maleta reforçada.',
  price: 89.9,
  oldPrice: 249.9,
  checkoutUrl: PRODUCT_CHECKOUT_URL,
  availableVoltages: ['48V'],
  images: [
    {
      src: '/product/escada-conquest-ajuste-pe.png',
      alt: 'Escada Little Giant Conquest 2.0 com ajuste de pé independente para uso em superfícies irregulares',
    },
    {
      src: '/product/escada-conquest-rapid-lock.png',
      alt: 'Escada Little Giant Conquest 2.0 com trava rápida patenteada Rapid Lock: gira, desliza e trava sem ferramentas',
    },
    {
      src: '/product/escada-conquest-pronta-obra.png',
      alt: 'Escada Little Giant Conquest 2.0 Tipo IA Extra Pesado, 136 kg de capacidade, 5,51 m de alcance, pronta para qualquer obra',
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
    '1 mandril adaptador para função furadeira',
    '1 adaptador rápido para função parafusadeira',
    '5 pontas de parafusadeira',
    '2 brocas para furadeira',
    '3 anéis limitadores de torque coloridos',
    '2 baterias de lítio 48V (4.0Ah)',
    '1 carregador bivolt',
    '1 trava de segurança da chave',
    '1 soquete sextavado 19mm',
    '1 soquete sextavado 21mm',
    '1 soquete sextavado 22mm',
    '1 maleta de transporte reforçada',
  ],
  reviews: [
    {
      name: 'Lucas Fraga',
      city: 'SP',
      rating: 5,
      verified: true,
      text: 'Uso na obra todo dia. Super firme e a trava rápida adianta muito o serviço!',
      images: [
        {
          src: '/product/cliente-foto-arvore.png',
          alt: 'Escada Little Giant Conquest 2.0 apoiada em uma árvore no quintal, em posição de extensão',
        },
      ],
    },
    {
      name: 'Rafael Bahia',
      city: 'MG',
      rating: 5,
      verified: true,
      text: 'Comprei pra limpar as calhas de casa e me senti super segura. Não balança nada!',
      images: [
        {
          src: '/product/cliente-foto-parede-branca.png',
          alt: 'Escada Little Giant Conquest 2.0 dobrada e apoiada em parede de obra em construção',
        },
      ],
    },
    {
      name: 'Pedro Campos',
      city: 'RJ',
      rating: 5,
      verified: true,
      text: 'Sou eletricista, a fibra de vidro dá muita segurança. Leve e fácil de levar na picape.',
      images: [
        {
          src: '/product/cliente-foto-trava-detalhe.png',
          alt: 'Detalhe da trava rápida Rapid Lock da escada Little Giant Conquest 2.0',
        },
      ],
    },
    {
      name: 'Thiago Siqueira',
      city: 'BA',
      rating: 5,
      verified: true,
      text: 'Ótima pro dia a dia em casa. Troco lâmpada sem medo de cair. Dobra e guarda fácil.',
      images: [
        {
          src: '/product/cliente-foto-sala.png',
          alt: 'Escada Little Giant Conquest 2.0 dobrada dentro de uma sala',
        },
      ],
    },
    {
      name: 'Mateus Caio',
      city: 'PR',
      rating: 5,
      verified: true,
      text: 'Ajuda demais na oficina. Consigo apoiar nos cantos certinho e as rodinhas quebram um galho.',
      images: [
        {
          src: '/product/cliente-foto-caminhonete.png',
          alt: 'Escada Little Giant Conquest 2.0 dobrada e guardada na caçamba de uma caminhonete',
        },
      ],
    },
    {
      name: 'João Fernandes',
      city: 'PE',
      rating: 5,
      verified: true,
      text: 'Uso no quintal e pra podar árvore. Muito robusta, passa muita confiança pra subir.',
      images: [
        {
          src: '/product/cliente-foto-garagem.png',
          alt: 'Escada Little Giant Conquest 2.0 aberta em modo cavalete dentro de uma garagem',
        },
      ],
    },
    {
      name: 'Marcelo Macedo',
      city: 'CE',
      rating: 5,
      verified: true,
      text: 'Versátil demais para pintura. Vira até andaime, virou minha ferramenta principal. Recomendo!',
      images: [],
    },
  ],
  customerPhotos: [
    {
      src: '/product/cliente-foto-arvore.png',
      alt: 'Escada Little Giant Conquest 2.0 apoiada em uma árvore no quintal, em posição de extensão',
    },
    {
      src: '/product/cliente-foto-parede-branca.png',
      alt: 'Escada Little Giant Conquest 2.0 dobrada e apoiada em parede de obra em construção',
    },
    {
      src: '/product/cliente-foto-trava-detalhe.png',
      alt: 'Detalhe da trava rápida Rapid Lock da escada Little Giant Conquest 2.0',
    },
    {
      src: '/product/cliente-foto-sala.png',
      alt: 'Escada Little Giant Conquest 2.0 dobrada dentro de uma sala',
    },
    {
      src: '/product/cliente-foto-caminhonete.png',
      alt: 'Escada Little Giant Conquest 2.0 dobrada e guardada na caçamba de uma caminhonete',
    },
    {
      src: '/product/cliente-foto-garagem.png',
      alt: 'Escada Little Giant Conquest 2.0 aberta em modo cavalete dentro de uma garagem',
    },
  ],
  faq: [
    {
      question: 'Como funciona o kit 3 em 1?',
      answer:
        'Além de chave de impacto, o kit acompanha um mandril adaptador para função furadeira e um adaptador rápido para função parafusadeira, permitindo furar e parafusar com a mesma ferramenta.',
    },
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
        'Acompanha a chave de impacto, mandril para furadeira, adaptador para parafusadeira, pontas, brocas, 2 baterias 48V, 1 carregador bivolt, 1 trava de segurança, 3 soquetes (19mm, 21mm e 22mm) e 1 maleta de transporte reforçada.',
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
