import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();
const hasValidMetaPixelId = Boolean(metaPixelId && /^\d+$/.test(metaPixelId));
// Pixel de atribuição de UTM da Utmify (utmify.com.br). Antes este script vinha
// ofuscado (base64 + XOR) escondendo a URL de destino — mesmo comportamento,
// agora em texto legível para facilitar auditoria e manutenção.
const UTMIFY_PIXEL_ID = '6a6443d858f1c38088e8658d';
const UTMIFY_SCRIPT_URL = 'https://cdn.utmify.com.br/scripts/pixel/pixel.js';

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
  title: 'Escada Multifuncional Little Giant Conquest 2.0 Modelo 17 | Vitrine Mix',
  description:
    'Escada Little Giant Conquest 2.0, Classificação de Serviço Extra Pesado (Tipo IA), suporta até 136 kg, atende OSHA e ANSI. Ajuste contínuo de 1,37 m a 2,29 m e alcance máximo de 5,51 m.',
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
    title: 'Escada Multifuncional Little Giant Conquest 2.0 Modelo 17 | Vitrine Mix',
    description:
      'Classificação Extra Pesado (Tipo IA), suporta até 136 kg, fibra de vidro Hi-Viz e rodas Tip & Glide.',
    siteName: 'Vitrine Mix',
    images: [
      {
        url: '/product/escada-conquest-resistencia.png',
        width: 1080,
        height: 1080,
        alt: 'Escada Little Giant Conquest 2.0',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escada Little Giant Conquest 2.0 | Vitrine Mix',
    description:
      'Escada multifuncional Tipo IA Extra Pesado, suporta até 136 kg, com fibra de vidro Hi-Viz.',
    images: ['/product/escada-conquest-resistencia.png'],
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
        {hasValidMetaPixelId && metaPixelId ? (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: getMetaPixelScript(metaPixelId) }}
            />
            <noscript>
              <img
                alt=""
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        ) : null}
      </body>
    </html>
  );
}
