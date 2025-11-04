'use client';

import { APP_NAME } from '@repo/core/constants';
import { useAppStore } from '@repo/store';
import { getInitials } from '@repo/utils/strings';

export default function Home() {
  const theme = useAppStore((state) => state.theme);
  return (
    <section className="flex h-dvh w-100 items-center justify-center text-center">
      <h6>{getInitials(APP_NAME)}</h6>
      <h6>{theme}</h6>
    </section>
  );
}
