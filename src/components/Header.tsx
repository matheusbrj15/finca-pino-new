import { Menu, Search, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="bg-[#141414] px-4 py-1.5 text-center text-[11px] font-extrabold text-white sm:text-xs">
        ⚡ Frete Grátis + Envio Imediato
      </div>
      <header className="border-b border-black/10 bg-[#ff6b00] text-white">
        <div className="mx-auto grid h-14 w-full max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center px-2 sm:h-16 sm:px-5 lg:px-8">
          <div className="flex justify-start">
            <button
              className="grid size-10 place-items-center rounded-md text-white transition hover:bg-black/10 focus-visible:bg-black/10"
              type="button"
              aria-label="Abrir menu"
            >
              <Menu className="size-6" strokeWidth={2} />
            </button>
          </div>

          <a className="group inline-flex items-center whitespace-nowrap" href="#top" aria-label="Vitrine Mix — início">
            <span className="text-xl font-black tracking-[-0.05em] sm:text-2xl">
              <span className="text-[#141414]">Vitrine</span><span className="text-white">Mix</span>
            </span>
          </a>

          <div className="flex justify-end">
            <button
              className="grid size-10 place-items-center rounded-md text-white transition hover:bg-black/10 focus-visible:bg-black/10"
              type="button"
              aria-label="Carrinho de compras"
            >
              <ShoppingCart className="size-5" strokeWidth={2} />
            </button>
            <button
              className="grid size-10 place-items-center rounded-md text-white transition hover:bg-black/10 focus-visible:bg-black/10"
              type="button"
              aria-label="Pesquisar"
            >
              <Search className="size-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
