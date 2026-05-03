/**
 * Formats a date to a locale-aware string.
 *
 * @param date - The date to format (Date object or ISO string).
 * @param locale - BCP 47 locale string (default: 'en-US').
 * @returns A formatted date string.
 *
 * @example
 * ```ts
 * formatDate(new Date()) // "March 31, 2026"
 * formatDate('2026-01-15', 'en-GB') // "15 January 2026"
 * ```
 */
export function formatDate(
  date: Date | string,
  locale: string = 'en-US'
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Pauses execution for a given number of milliseconds.
 * Useful for debouncing, throttling, or simulating delays in dev.
 *
 * @example
 * ```ts
 * await sleep(1000); // wait 1 second
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a random string ID (not cryptographically secure).
 *
 * @param length - Length of the ID (default: 8).
 * @returns A random alphanumeric string.
 */
export function generateId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
