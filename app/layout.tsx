import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
// Pixel de atribuição de UTM da Utmify (utmify.com.br). Antes este script vinha
// ofuscado (base64 + XOR) escondendo a URL de destino — mesmo comportamento,
// agora em texto legível para facilitar auditoria e manutenção.
const UTMIFY_PIXEL_ID = '6aac972f4bbf67c27aaddf95';
const UTMIFY_SCRIPT_URL = 'https://cdn.utmify.com.br/scripts/pixel/pixel.js';

// Meta Pixel (Facebook Ads).
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
  title: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 | Vitrine Mix',
  description:
    'Máquina de pintura airless Menegotti MMA PRO 1000, sistema de alta pressão de até 214 bar, 1000W de potência e mangueira de 15m. Ideal para paredes, fachadas, muros e pintura profissional.',
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
    title: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 | Vitrine Mix',
    description:
      'Alta pressão de até 214 bar, 1000W de potência e acabamento uniforme para paredes, fachadas, muros e projetos profissionais.',
    siteName: 'Vitrine Mix',
    images: [
      {
        url: '/product/mma-pro1000-principal-1.png',
        width: 1563,
        height: 1563,
        alt: 'Máquina de Pintura Airless Menegotti MMA PRO 1000',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Máquina de Pintura Airless Menegotti MMA PRO 1000 | Vitrine Mix',
    description:
      'Máquina de pintura airless profissional, alta pressão, acabamento uniforme e kit completo pronto para uso.',
    images: ['/product/mma-pro1000-principal-1.png'],
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
