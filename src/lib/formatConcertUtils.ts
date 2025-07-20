// src/lib/formatConcertUtils.ts
import type {Concert} from './groupConcerts';

/**
 * Returns the first and last concert dates from a list.
 */
export function getDateRange(concerts: Concert[]): { first: Date; last: Date } {
  if (concerts.length === 0) {
    throw new Error('Concert list is empty');
  }

  const sorted = [...concerts].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return {
    first: new Date(sorted[0].date),
    last: new Date(sorted[sorted.length - 1].date),
  };
}

/**
 * Formats a date like: "Jan 28, 1981"
 */
export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Formats a date like: "Wednesday, January 28, 1981"
 */
export function formatFullDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Converts a coordinate value to DMS (degrees, minutes, seconds) string.
 */
export function formatDMS(value: number, type: 'lat' | 'lng'): string {
  const absolute = Math.abs(value);
  const degrees = Math.floor(absolute);
  const minutesFloat = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = Math.round((minutesFloat - minutes) * 60);

  const direction = (() => {
    if (type === 'lat') {
      return value >= 0 ? 'N' : 'S';
    }
    return value >= 0 ? 'E' : 'W';
  })();

  return `${degrees}°${minutes}'${seconds}" ${direction}`;
}

/**
 * Formats both latitude and longitude in DMS.
 */
export function formatCoordinates(lat: number, lng: number): string {
  return `${formatDMS(lat, 'lat')}  /  ${formatDMS(lng, 'lng')}`;
}
