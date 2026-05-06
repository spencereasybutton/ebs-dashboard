"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { FirstPromoterAffiliateDto } from "../../lib/firstpromoter-dto";

export type AffiliateFirstPromoterContextValue = {
  data: FirstPromoterAffiliateDto;
  isRefetching: boolean;
  refetch: () => Promise<void>;
};

const AffiliateFirstPromoterContext =
  createContext<AffiliateFirstPromoterContextValue | null>(null);

export type AffiliateFirstPromoterProviderProps = {
  children: ReactNode;
  initialData: FirstPromoterAffiliateDto;
};

export function AffiliateFirstPromoterProvider({
  children,
  initialData,
}: AffiliateFirstPromoterProviderProps) {
  const [data, setData] = useState<FirstPromoterAffiliateDto>(initialData);
  const [isRefetching, setIsRefetching] = useState(false);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const refetch = useCallback(async () => {
    setIsRefetching(true);
    try {
      const res = await fetch("/api/affiliate/firstpromoter", {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });
      if (!res.ok) return;
      const json = (await res.json()) as FirstPromoterAffiliateDto;
      setData(json);
    } finally {
      setIsRefetching(false);
    }
  }, []);

  const value = useMemo(
    () => ({ data, isRefetching, refetch }),
    [data, isRefetching, refetch],
  );

  return (
    <AffiliateFirstPromoterContext.Provider value={value}>
      {children}
    </AffiliateFirstPromoterContext.Provider>
  );
}

export function useAffiliateFirstPromoter(): AffiliateFirstPromoterContextValue {
  const ctx = useContext(AffiliateFirstPromoterContext);
  if (!ctx) {
    throw new Error(
      "useAffiliateFirstPromoter must be used within AffiliateFirstPromoterProvider",
    );
  }
  return ctx;
}
