const config = {
  // 1. Core Consistency
  singleQuote: true, // Use single quotes for strings ('')
  jsxSingleQuote: false, // Use double quotes for JSX attributes ("") - Standard for HTML-like syntax
  trailingComma: "all", // Ensures clean, easy-to-read diffs (good for multi-line arrays/objects/imports)
  semi: true, // Keep semicolons at the end of statements
  endOfLine: "lf", // Consistent line endings for cross-platform development

  // 2. Spacing and Readability
  tabWidth: 2, // Standard for JavaScript/React projects
  useTabs: false, // Use spaces, not tabs
  printWidth: 100, // A good balance between the traditional 80 and the wider 120
  arrowParens: "always", // Always include parentheses around a single arrow function parameter ((x) => ...)

  // 3. HTML/JSX Specific (Next.js/React)
  htmlWhitespaceSensitivity: "css", // Default: preserves whitespace only where the browser would render it
};

export default config;
