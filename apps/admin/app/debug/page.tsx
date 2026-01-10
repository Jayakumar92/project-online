'use client';

export default function DebugPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">CSS Debug Page</h1>
      
      {/* Test 1: Basic Tailwind utilities */}
      <div className="p-4 bg-blue-500 text-white rounded">
        <p>Test 1: If this is blue with white text, basic Tailwind works</p>
      </div>
      
      {/* Test 2: CSS Variables */}
      <div 
        className="p-4 rounded border"
        style={{
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
        }}
      >
        <p>Test 2: If this has colors, CSS variables are defined</p>
        <p className="text-sm mt-2">
          Background: <code>{typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue('--background') : 'check in browser'}</code>
        </p>
      </div>
      
      {/* Test 3: Tailwind with CSS variables */}
      <div className="p-4 bg-background text-foreground border border-border rounded">
        <p>Test 3: If this has proper styling, Tailwind + CSS variables work</p>
      </div>
      
      {/* Test 4: Check if classes from library would work */}
      <div className="p-4 rounded-md border border-transparent bg-clip-padding text-sm font-medium">
        <p>Test 4: If this has rounded corners and padding, Tailwind utilities work</p>
      </div>
      
      {/* Test 5: Component import test */}
      <div className="mt-8">
        <p className="font-bold mb-2">Component Import Test:</p>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
          {`import { Button } from '@repo/ui';`}
        </pre>
        <p className="text-sm text-gray-600 mt-2">
          Check browser console for import errors
        </p>
      </div>
    </div>
  );
}
