import type { Config } from "tailwindcss";

/**
 * Tailwind configuration for @repo/ui library
 * 
 * This config should be imported and merged into consuming apps' Tailwind configs.
 * The library components use Tailwind classes that depend on these theme values.
 * 
 * Usage in consuming app:
 * ```ts
 * import uiTailwindConfig from "@repo/ui/tailwind";
 * 
 * export default {
 *   content: [
 *     "./app/**/*.{js,ts,jsx,tsx,mdx}",
 *     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 *     // Include library components
 *     "../../libs/ui/src/**/*.{js,ts,jsx,tsx}",
 *   ],
 *   ...uiTailwindConfig,
 * } satisfies Config;
 * ```
 */
const config: Config = {
  // Note: content is intentionally empty here
  // Each consuming app should specify its own content paths
  content: [],
  theme: {
    extend: {
      // Theme extensions are defined via CSS variables in globals.css
      // This ensures consistent theming across all consuming apps
    },
  },
};

export default config;
