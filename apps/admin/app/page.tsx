'use client';

import { APP_ADMIN_NAME } from '@repo/core/constants';
import { API_FEATURES_AUTH } from '@repo/features/auth/api';
import { useAppStore } from '@repo/store';
import { ifObjectExist } from '@repo/utils/collections';

export default function Home() {
  const theme = useAppStore((state) => state.theme);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-col gap-2 text-center">
            <h1>{APP_ADMIN_NAME}</h1>
          </div>
          <p>{ifObjectExist({ name: 'John Doe' }) + '' + theme}</p>
          <h3>{API_FEATURES_AUTH}</h3>
        </div>
      </main>
    </div>
  );
}
