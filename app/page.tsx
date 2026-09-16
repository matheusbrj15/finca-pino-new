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
            src="/product/escada-conquest-informativo.png"
            alt="Escada Little Giant Conquest 2.0 - versatilidade total, trava rápida Rapid Lock, barra em V integrada, fibra de vidro Hi-Viz, capacidade 136 kg, especificações técnicas completas"
            className="w-full"
          />
        </div>
      </section>
      <Reviews reviews={product.reviews} customerPhotos={product.customerPhotos} />
      <Footer />
      <FloatingBuyButton checkoutUrl={product.checkoutUrl} formattedPrice={formattedPrice} />
    </main>
  );
}
