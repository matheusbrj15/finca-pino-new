'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import type { ProductImage } from '@/src/data/product';

type ProductGalleryProps = {
  images: ProductImage[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const carouselImages = [images.at(-1)!, ...images, images[0]];

  const selectRelative = (step: number) => {
    if (isAnimating) return;

    setActiveIndex((current) => (current + step + images.length) % images.length);
    setTrackIndex((current) => current + step);
    setIsAnimating(true);
  };

  const finishTransition = () => {
    const resetIndex = trackIndex === 0
      ? images.length
      : trackIndex === images.length + 1
        ? 1
        : null;

    if (resetIndex === null) {
      setIsAnimating(false);
      return;
    }

    setTransitionEnabled(false);
    setTrackIndex(resetIndex);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
        setIsAnimating(false);
      });
    });
  };

  return (
    <div id="top" className="w-full min-w-0">
      <div
        className="relative touch-pan-y overflow-hidden border-0 bg-[#f6f6f6] shadow-none sm:rounded-[30px] sm:border sm:border-[#e2e2e2] sm:shadow-[0_20px_60px_rgba(0,40,112,0.08)]"
        onTouchStart={(event) => {
          const touch = event.changedTouches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchEnd={(event) => {
          if (!touchStart.current) return;

          const touch = event.changedTouches[0];
          const deltaX = touch.clientX - touchStart.current.x;
          const deltaY = touch.clientY - touchStart.current.y;
          touchStart.current = null;

          if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
            selectRelative(deltaX > 0 ? -1 : 1);
          }
        }}
      >
        <div className="aspect-square w-full overflow-hidden">
          <div
            className="flex h-full w-full"
            style={{
              transform: `translateX(-${trackIndex * 100}%)`,
              transition: transitionEnabled
                ? 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1)'
                : 'none',
            }}
            onTransitionEnd={(event) => {
              if (event.propertyName === 'transform') finishTransition();
            }}
          >
            {carouselImages.map((image, index) => {
              const isClone = index === 0 || index === carouselImages.length - 1;

              return (
                <img
                  key={`${image.src}-${index}`}
                  src={image.src}
                  alt={isClone ? '' : image.alt}
                  aria-hidden={isClone}
                  className="h-full w-full shrink-0 object-contain"
                />
              );
            })}
          </div>
        </div>
        <button
          type="button"
          onClick={() => selectRelative(-1)}
          className="absolute left-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center text-white sm:left-2"
          aria-label="Imagem anterior"
        >
          <span className="grid size-8 place-items-center rounded-full bg-black/65 opacity-85 transition hover:bg-black/75 hover:opacity-100">
            <ChevronLeft className="size-4" />
          </span>
        </button>
        <button
          type="button"
          onClick={() => selectRelative(1)}
          className="absolute right-0 top-1/2 grid size-10 -translate-y-1/2 place-items-center text-white sm:right-2"
          aria-label="Próxima imagem"
        >
          <span className="grid size-8 place-items-center rounded-full bg-black/65 opacity-85 transition hover:bg-black/75 hover:opacity-100">
            <ChevronRight className="size-4" />
          </span>
        </button>
        <span className="absolute bottom-2 right-2 rounded-full bg-[#141414] px-3 py-1 text-xs font-bold text-white sm:bottom-4 sm:right-4">
          {activeIndex + 1}/{images.length}
        </span>
      </div>
    </div>
  );
}
