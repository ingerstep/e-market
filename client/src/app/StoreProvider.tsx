'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { AppStore } from '@/store/types';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
