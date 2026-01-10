'use client';

import { APP_NAME_VALID } from '@repo/core/validations';
import { API_FEATURES_AUTH } from '@repo/features/auth/api';
import { useAppStore } from '@repo/store';
import { Button } from '@repo/ui/shadcn/components/button';
import { ifObjectExist } from '@repo/utils/collections';

export default function Home() {
  const theme = useAppStore((state) => state.theme);
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
        <div className="mt-8 flex w-full flex-col items-center gap-4">
          <div className="flex flex-col gap-2 text-center">
            <h1>{APP_NAME_VALID}</h1>
          </div>
          <p>{ifObjectExist({ name: 'John Doe' }) + '' + theme}</p>
          <h3>{API_FEATURES_AUTH}</h3>

          {/* Example UI components from @repo/ui */}
          <Button variant="default">{'Save Changes'}</Button>
          <Button variant="outline">{'Cancel'}</Button>
        </div>
      </main>
    </div>
  );
}
