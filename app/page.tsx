import { Header } from '@/src/components/Header';
import { FloatingBuyButton } from '@/src/components/FloatingBuyButton';
import { Footer } from '@/src/components/Footer';
import { ProductGallery } from '@/src/components/ProductGallery';
import { PurchaseCard } from '@/src/components/PurchaseCard';
import { Reviews } from '@/src/components/Reviews';
import { product } from '@/src/data/product';

export default function Home() {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <main>
      <Header />
      <section className="border-b border-[#e2e2e2] bg-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-0 px-0 py-0 sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(370px,0.92fr)] lg:gap-12 lg:px-8 lg:py-14">
          <ProductGallery images={product.images} />
          <PurchaseCard product={product} />
        </div>
      </section>
      <section aria-label="Informações completas do produto" className="bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-0 sm:px-6 sm:py-4 lg:px-8">
          <img
            src="/product/ddpai-informativo.png"
            alt="DDPAI Mini Pro 2K - principais diferenciais: 2K Ultra HD, ângulo 140°, visão noturna NightVIS 2.0, Wi-Fi + app, lente rotativa 360° e sensor G; conectividade e controle pelo app DDPAI; instalação compacta e discreta; monitoramento de estacionamento 24h (requer Hardwire Kit vendido separadamente); supercapacitor -20°C a 70°C; gravação em loop; dimensões e itens inclusos"
            className="w-full"
          />
        </div>
      </section>
      <Reviews reviews={product.reviews} customerPhotos={product.customerPhotos} />
      <Footer />
      <FloatingBuyButton
        checkoutUrl={product.checkoutUrl}
        formattedPrice={formattedPrice}
        price={product.price}
        productName={product.name}
      />
    </main>
  );
}
