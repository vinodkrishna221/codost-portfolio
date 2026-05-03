'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';

export function Counter() {
  const [count, setCount] = useLocalStorage<number>('visit-count', 0);

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">
        This counter uses the{' '}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
          useLocalStorage
        </code>{' '}
        hook:
      </p>
      <p className="mt-2 text-3xl font-bold text-foreground">{count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Increment
      </button>
    </div>
  );
}
