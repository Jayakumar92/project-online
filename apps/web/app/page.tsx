'use client';

import { APP_NAME } from '@repo/core/constants';
import { useAppStore } from '@repo/store';

export default function Home() {
  const theme = useAppStore((state) => state.theme);
  return (
    <section className="flex h-dvh w-100 items-center justify-center bg-sky-200 text-center text-3xl">
      <h6>{APP_NAME}</h6>
      <h6>{theme}</h6>
    </section>
  );
}
