import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
// Pixel de atribuição de UTM da Utmify (utmify.com.br). Antes este script vinha
// ofuscado (base64 + XOR) escondendo a URL de destino — mesmo comportamento,
// agora em texto legível para facilitar auditoria e manutenção. ID atualizado
// para o pixel Utmify criado especificamente para este produto (câmera DDPAI).
const UTMIFY_PIXEL_ID = '6aac972f4bbf67c27aaddf95';
const UTMIFY_SCRIPT_URL = 'https://cdn.utmify.com.br/scripts/pixel/pixel.js';

// Meta Pixel (Facebook Ads) criado para este produto.
const META_PIXEL_ID = '1566187347974781';

function getUtmifyScript(pixelId: string, scriptUrl: string) {
  return `window.pixelId = ${JSON.stringify(pixelId)};
var utmifyScript = document.createElement('script');
utmifyScript.setAttribute('async', '');
utmifyScript.setAttribute('defer', '');
utmifyScript.setAttribute('src', ${JSON.stringify(scriptUrl)});
document.head.appendChild(utmifyScript);`;
}

function getMetaPixelScript(pixelId: string) {
  return `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(pixelId)});fbq('track','PageView');`;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'DDPAI Mini Pro Uber Câmera Veicular 4K | Vitrine Mix',
  description:
    'Câmera veicular DDPAI Mini Pro 4K, gravação Ultra HD 3840×2160P, ângulo de 140°, Wi-Fi, visão noturna NightVIS 2.0, sensor G e supercapacitor. Monitoramento de estacionamento 24h com Hardwire Kit (vendido separadamente).',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/brand/vitrine-mix-logo-card.png',
    shortcut: '/brand/vitrine-mix-logo-card.png',
    apple: '/brand/vitrine-mix-logo-card.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'DDPAI Mini Pro Uber Câmera Veicular 4K | Vitrine Mix',
    description:
      'Gravação 4K com visão noturna NightVIS 2.0, ângulo de 140°, Wi-Fi e supercapacitor resistente de -20°C a 70°C.',
    siteName: 'Vitrine Mix',
    images: [
      {
        url: '/product/ddpai-kit-completo.png',
        width: 1186,
        height: 1186,
        alt: 'DDPAI Mini Pro 4K',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDPAI Mini Pro Uber Câmera Veicular 4K | Vitrine Mix',
    description:
      'Câmera veicular 4K com visão noturna, Wi-Fi e supercapacitor, para motoristas de app e uso pessoal.',
    images: ['/product/ddpai-kit-completo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script
          id="utmify-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: getUtmifyScript(UTMIFY_PIXEL_ID, UTMIFY_SCRIPT_URL) }}
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: getMetaPixelScript(META_PIXEL_ID) }}
        />
        <noscript>
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
