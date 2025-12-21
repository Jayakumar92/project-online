import Image from 'next/image';

import { APP_NAME, VERSION } from '@repo/core/constants';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="mt-8 flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{'Core Values'}</h1>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold">{'App Name:'}</span> {APP_NAME}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold">{'Version:'}</span> {VERSION}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
