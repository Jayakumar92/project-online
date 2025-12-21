'use client';

import { useAppStore } from '@repo/store';

export default function Home() {
  const theme = useAppStore((state) => state.theme);
  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center bg-slate-100 text-center text-3xl">
      <h6>{'Web Application'}</h6>
      <h6>{theme}</h6>
    </section>
  );
}
