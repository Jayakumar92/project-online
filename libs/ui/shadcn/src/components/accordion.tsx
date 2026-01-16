'use client';

import type { ComponentProps } from 'react';

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ArrowDown01Icon, ArrowUp01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { cn } from '../lib/utils';

type AccordionPropsSingle = Omit<
  ComponentProps<typeof AccordionPrimitive.Root>,
  'type' | 'defaultValue'
> & {
  type: 'single';
  defaultValue?: string;
  collapsible?: boolean;
};

type AccordionPropsMultiple = Omit<
  ComponentProps<typeof AccordionPrimitive.Root>,
  'type' | 'defaultValue'
> & {
  type: 'multiple';
  defaultValue?: string[];
  collapsible?: boolean;
};

type AccordionProps = AccordionPropsSingle | AccordionPropsMultiple;

function Accordion({ className, collapsible, ...props }: AccordionProps) {
  // Destructure collapsible to prevent it from being spread to DOM
  // collapsible is handled internally by the accordion component when type="single"
  // We don't need to pass it explicitly as it's not a valid DOM attribute
  const rootProps = props as ComponentProps<typeof AccordionPrimitive.Root>;

  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn('flex w-full flex-col', className)}
      {...rootProps}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('not-last:border-b', className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground group/accordion-trigger relative flex flex-1 items-start justify-between rounded-md border border-transparent py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4',
          className,
        )}
        {...props}
      >
        {children}
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          strokeWidth={2}
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <HugeiconsIcon
          icon={ArrowUp01Icon}
          strokeWidth={2}
          data-slot="accordion-trigger-icon"
          className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          '[&_a]:hover:text-foreground h-(--accordion-panel-height) pt-0 pb-4 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
