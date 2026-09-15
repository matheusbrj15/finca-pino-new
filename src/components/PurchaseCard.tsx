'use client';

import {
  Heart,
  MessageCircle,
  MessagesSquare,
  Share2,
  ShoppingBag,
  Star,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Product } from '@/src/data/product';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function PurchaseCard({ product }: { product: Product }) {
  const [remainingSeconds, setRemainingSeconds] = useState(10 * 60);
  const originalPrice = product.oldPrice ?? product.price;
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);
  const formattedPriceAmount = product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const installmentPrice = currency.format(product.price / 12);
  const countdown = [
    String(Math.floor(remainingSeconds / 3600)).padStart(2, '0'),
    String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0'),
    String(remainingSeconds % 60).padStart(2, '0'),
  ];

  useEffect(() => {
    const deadline = Date.now() + 10 * 60 * 1000;
    const timer = window.setInterval(() => {
      const nextValue = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemainingSeconds(nextValue);

      if (nextValue === 0) {
        window.clearInterval(timer);
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex min-w-0 flex-col justify-center">
      <div className="grid min-h-[116px] grid-cols-[minmax(0,1fr)_122px] bg-[#fe6232] text-white sm:grid-cols-[minmax(0,1fr)_160px]">
          <div className="flex min-w-0 flex-col justify-center px-3 py-3 sm:px-5">
            <div className="flex items-center gap-2 text-[11px] font-semibold leading-none">
              <span className="line-through text-white/75">{currency.format(originalPrice)}</span>
              <span className="bg-[#ffb000] px-1.5 py-1 text-[9px] font-black text-[#141414] sm:text-[10px]">
                {discount}% OFF
              </span>
            </div>
            <p className="mt-1.5 flex items-baseline gap-1 whitespace-nowrap font-black leading-none tracking-[-0.055em]">
              <span className="text-base tracking-normal sm:text-lg">R$</span>
              <span className="text-[40px] sm:text-[48px]">{formattedPriceAmount}</span>
            </p>
            <p className="mt-1.5 whitespace-nowrap text-[11px] font-semibold text-white/90 sm:text-xs">
              Em até 12x de <strong>{installmentPrice}</strong>
            </p>
          </div>

          <div className="flex flex-col items-end justify-between px-2 py-3 text-right sm:px-4">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap border border-[#ffb000] px-1.5 py-1 text-[8px] uppercase leading-none tracking-[0.01em] text-white sm:px-2 sm:text-[10px]">
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#ffb000] sm:size-5">
                <Zap className="size-2.5 fill-[#141414] text-[#141414] sm:size-3" />
              </span>
              <span>
                <span className="font-black">OFERTAS</span> <span className="font-semibold">RELÂMPAGO</span>
              </span>
            </span>
            <div>
              <span className="text-[8px] font-black uppercase text-white/80 sm:text-[9px]">TERMINA EM:</span>
              <div
                className="mt-1 flex items-center justify-end gap-1"
                aria-label={`${countdown[0]} horas, ${countdown[1]} minutos e ${countdown[2]} segundos`}
              >
                {countdown.map((value, index) => (
                  <span className="contents" key={index}>
                    {index > 0 && <span className="text-[10px] font-black text-white">:</span>}
                    <span className="grid h-6 min-w-6 place-items-center border border-white/50 bg-black/15 px-1 text-[10px] font-black text-white">
                      {value}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
      </div>

        <div className="bg-white px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex flex-col items-start gap-1.5">
            <span className="shrink-0 bg-[#fe6232] px-2 py-1 text-[10px] font-black leading-none text-white">
              INDICADO
            </span>
            <h1 className="text-[14px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#141414] sm:text-base">
              {product.name}
            </h1>
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2 text-sm">
              <span className="whitespace-nowrap text-[16px] tracking-[-0.12em] text-[#ffb000]" aria-label="5 estrelas">★★★★★</span>
              <strong className="text-[#2a2a2a]">4,9</strong>
              <span className="text-[#d6d6d6]">|</span>
              <span className="whitespace-nowrap text-xs text-[#666666]">4,2 mil avaliações</span>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-[#6b6b6b]">
              <button className="grid size-9 place-items-center rounded-full transition hover:bg-[#f2f2f2] hover:text-[#fe6232]" type="button" aria-label="Favoritar produto">
                <Heart className="size-5" />
              </button>
              <button className="grid size-9 place-items-center rounded-full transition hover:bg-[#f2f2f2] hover:text-[#fe6232]" type="button" aria-label="Compartilhar produto">
                <Share2 className="size-5" />
              </button>
              <button className="grid size-9 place-items-center rounded-full text-[#12a83a] transition hover:bg-[#e9f8ee]" type="button" aria-label="Falar pelo WhatsApp">
                <MessageCircle className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-3 border border-[#e2e2e2] bg-white p-3 shadow-[0_5px_16px_rgba(0,0,0,0.06)] sm:p-4">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-[#e2e2e2] bg-white p-0.5">
                <img
                  src="/brand/vitrine-mix-logo-card.png"
                  alt="Logo Vitrine Mix"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-black leading-tight text-[#141414]">Vitrine Mix</p>
                <p className="mt-0.5 text-[11px] text-[#666666]">Loja Oficial</p>
              </div>
            </div>

            <div className="my-2.5 h-px bg-[#ececec]" />

            <div className="grid grid-cols-3 divide-x divide-[#ececec] text-center">
              <div className="min-w-0 px-1.5 sm:px-2">
                <Star className="mx-auto size-4 text-[#fe6232]" />
                <strong className="mt-1.5 block text-xs font-black text-[#1f1f1f] sm:text-sm">4,9</strong>
                <span className="mt-0.5 block text-[9px] leading-tight text-[#7a7a7a] sm:text-[10px]">Avaliações de clientes</span>
              </div>
              <div className="min-w-0 px-1.5 sm:px-2">
                <ShoppingBag className="mx-auto size-4 text-[#fe6232]" />
                <strong className="mt-1.5 block text-[10px] font-black leading-tight text-[#1f1f1f] sm:text-xs">Pedidos enviados</strong>
                <span className="mt-0.5 block text-[9px] leading-tight text-[#7a7a7a] sm:text-[10px]">Clientes atendidos</span>
              </div>
              <div className="min-w-0 px-1.5 sm:px-2">
                <MessagesSquare className="mx-auto size-4 text-[#fe6232]" />
                <strong className="mt-1.5 block text-[10px] font-black leading-tight text-[#1f1f1f] sm:text-xs">Resposta rápida</strong>
                <span className="mt-0.5 block text-[9px] leading-tight text-[#7a7a7a] sm:text-[10px]">Atendimento</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
