'use client';

import { useState } from 'react';

import { Button } from '@repo/ui-shadcn/components/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@repo/ui-shadcn/components/collapsible';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between px-16 py-32 sm:items-start">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex w-[350px] flex-col gap-2"
        >
          <div className="flex items-center justify-between gap-4 px-4">
            <h4 className="text-sm font-semibold">{'@peduarte starred 3 repositories'}</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <span className="sr-only">{'Toggle'}</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            {'@radix-ui/primitives'}
          </div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              {'@radix-ui/colors'}
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">{'@stitches/react'}</div>
          </CollapsibleContent>
        </Collapsible>
      </main>
    </div>
  );
}
