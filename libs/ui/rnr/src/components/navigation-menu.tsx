import { forwardRef } from 'react';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import * as NavigationMenuPrimitive from '@rn-primitives/navigation-menu';
import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

const NavigationMenu = forwardRef<
  NavigationMenuPrimitive.RootRef,
  NavigationMenuPrimitive.RootProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = 'NavigationMenu';

const NavigationMenuList = forwardRef<
  NavigationMenuPrimitive.ListRef,
  NavigationMenuPrimitive.ListProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'web:group flex flex-1 flex-row list-none items-center justify-center gap-1',
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = 'NavigationMenuList';

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'web:group web:inline-flex h-10 native:h-12 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium web:transition-colors web:hover:bg-accent web:hover:text-accent-foreground web:focus:bg-accent web:focus:text-accent-foreground web:focus:outline-none web:disabled:pointer-events-none disabled:opacity-50',
);

const NavigationMenuTrigger = forwardRef<
  NavigationMenuPrimitive.TriggerRef,
  NavigationMenuPrimitive.TriggerProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'web:group', className)}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

const NavigationMenuContent = forwardRef<
  NavigationMenuPrimitive.ContentRef,
  NavigationMenuPrimitive.ContentProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'w-full native:border native:border-border native:rounded-lg native:shadow-lg native:bg-popover',
      className,
    )}
    {...props}
  >
    <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)}>
      {children}
    </Animated.View>
  </NavigationMenuPrimitive.Content>
));
NavigationMenuContent.displayName = 'NavigationMenuContent';

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
};
