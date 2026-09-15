'use client';

import { Camera, ChevronRight, Star } from 'lucide-react';
import type { ProductReview } from '@/src/data/product';

const reviewHighlights = ['Chegou rápido', 'Chegou no prazo', 'Ótimo produto'];

export function Reviews({ reviews }: { reviews: ProductReview[] }) {
  return (
    <section className="border-y border-[#ececec] bg-white" id="avaliacoes">
      <div className="mx-auto w-full max-w-[780px] px-3 py-9 sm:px-6 sm:py-12 lg:py-14">
        <header>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[15px] font-bold text-[#1a1a1a] sm:text-base">Avaliações do produto</h2>
            <a
              href="#avaliacoes"
              className="inline-flex shrink-0 items-center gap-0.5 text-xs font-medium text-[#fe6232] transition hover:text-[#e05f00] sm:text-sm"
            >
              Ver tudo
              <ChevronRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <div className="flex" aria-label="4,9 de 5 estrelas">
              {Array.from({ length: 5 }, (_, star) => (
                <Star key={star} className="size-3.5 fill-[#ffb000] text-[#ffb000] sm:size-4" aria-hidden="true" />
              ))}
            </div>
            <strong className="text-xs text-[#e89400] sm:text-sm">4,9</strong>
            <span className="text-[11px] text-[#8a8a8a] sm:text-xs">(4,2 mil avaliações)</span>
          </div>

          <div className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Destaques das avaliações">
            {reviewHighlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded bg-[#f0f0f0] px-2 py-1 text-[10px] leading-4 text-[#5c5c5c] sm:text-[11px]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </header>

        {reviews.length > 0 ? (
          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
            {reviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="rounded-[14px] border border-[#e2e2e2] bg-white p-3.5 sm:p-5"
              >
                <header className="flex items-center gap-3">
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-[#141414] text-xs font-bold text-white sm:size-9 sm:text-sm"
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <strong className="block text-sm leading-5 text-[#141414] sm:text-[15px]">{review.name}</strong>
                    <span className="block text-[11px] leading-4 text-[#7a7a7a] sm:text-xs">{review.city}</span>
                  </div>
                </header>

                <div className="mt-2.5 flex" aria-label={`${review.rating} de 5 estrelas`}>
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star
                      key={star}
                      className={`size-3.5 sm:size-4 ${star < review.rating ? 'fill-[#ffb000] text-[#ffb000]' : 'text-[#dcdcdc]'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="mt-2 text-[13px] leading-[1.65] text-[#333333] sm:text-sm sm:leading-6">{review.text}</p>

                {review.images.map((image, imageIndex) => (
                  <figure
                    key={`${image.src}-${imageIndex}`}
                    className="mt-3.5 overflow-hidden rounded-[12px] border border-[#ececec] bg-[#f7f7f7] sm:mt-4"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block h-auto w-full object-contain"
                    />
                  </figure>
                ))}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid min-h-56 place-items-center rounded-[14px] border border-dashed border-[#c9c9c9] bg-white px-6 text-center">
            <div className="max-w-md py-8">
              <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#f2f2f2] text-[#fe6232]">
                <Camera className="size-5" />
              </span>
              <h3 className="mt-4 font-black text-[#141414]">Nenhuma avaliação real cadastrada ainda</h3>
              <p className="mt-2 text-sm leading-6 text-[#666666]">
                O estado vazio é intencional: nomes, comentários e fotos só aparecerão depois de serem fornecidos e validados.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
