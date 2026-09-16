'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'vitrinemix_utm_params';

// Parâmetros de atribuição que capturamos da URL da landing page e repassamos
// para o link de checkout externo. Como o checkout roda em outro domínio
// (seguro.final-agora-br.shop), cookies/localStorage daqui não chegam lá — a
// forma de não perder a atribuição na troca de domínio é anexar esses
// parâmetros na própria URL do link de "Comprar agora".
const TRACKED_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
] as const;

function readStoredParams(): Record<string, string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function captureAndPersistParams(): Record<string, string> {
  const stored = readStoredParams();
  const currentParams = new URLSearchParams(window.location.search);

  let changed = false;
  for (const key of TRACKED_PARAMS) {
    const value = currentParams.get(key);
    if (value) {
      stored[key] = value;
      changed = true;
    }
  }

  if (changed) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // localStorage indisponível (aba anônima, bloqueio do navegador etc.) —
      // seguimos sem persistir, os parâmetros da URL atual ainda são usados.
    }
  }

  return stored;
}

/**
 * Recebe a URL de checkout fixa do produto e devolve essa mesma URL com os
 * parâmetros de UTM/clique de anúncio (utm_*, fbclid, gclid) anexados, para
 * que a atribuição de campanha sobreviva ao redirecionamento para o domínio
 * externo de checkout.
 */
export function useCheckoutUrlWithUtm(checkoutUrl: string | null): string | null {
  const [trackedUrl, setTrackedUrl] = useState(checkoutUrl);

  useEffect(() => {
    if (!checkoutUrl) {
      setTrackedUrl(checkoutUrl);
      return;
    }

    const params = captureAndPersistParams();
    const keys = Object.keys(params);
    if (keys.length === 0) {
      setTrackedUrl(checkoutUrl);
      return;
    }

    try {
      const url = new URL(checkoutUrl);
      keys.forEach((key) => {
        url.searchParams.set(key, params[key]);
      });
      setTrackedUrl(url.toString());
    } catch {
      setTrackedUrl(checkoutUrl);
    }
  }, [checkoutUrl]);

  return trackedUrl;
}
