import {getDateRange} from './formatConcertUtils';

import type {Concert} from './groupConcerts';

/**
 * Calculates Haversine distance (in kilometers) between two concert locations.
 */
export function haversineKm(a: Concert, b: Concert): number {
  const toRad = (deg: number): number => (deg * Math.PI) / 180;
  const R = 6371; // Earth radius in km

  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sinDLat = Math.sin(dLat / 2);
  const sinDLng = Math.sin(dLng / 2);
  const aValue = (sinDLat ** 2) + ((sinDLng ** 2) * Math.cos(lat1) * Math.cos(lat2));

  return R * 2 * Math.atan2(Math.sqrt(aValue), Math.sqrt(1 - aValue));
}

/**
 * Finds the longest and shortest gaps between concerts (in days).
 */
export function getGapStats(concerts: Concert[]): {
  maxGapDays: number;
  maxGapPair: [Concert, Concert] | null;
  minGapDays: number;
  minGapPair: [Concert, Concert] | null;
} {
  const sorted = [...concerts].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  let maxGap = 0;
  let minGap = Infinity;
  let maxPair: [Concert, Concert] | null = null;
  let minPair: [Concert, Concert] | null = null;

  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1].date).getTime();
    // eslint-disable-next-line security/detect-object-injection
    const curr = new Date(sorted[i].date).getTime();
    const diffDays = (curr - prev) / (1000 * 60 * 60 * 24);

    if (diffDays > maxGap) {
      maxGap = diffDays;
      // eslint-disable-next-line security/detect-object-injection
      maxPair = [sorted[i - 1], sorted[i]];
    }

    if (diffDays < minGap) {
      minGap = diffDays;
      // eslint-disable-next-line security/detect-object-injection
      minPair = [sorted[i - 1], sorted[i]];
    }
  }

  return {
    maxGapDays: maxGap,
    maxGapPair: maxPair,
    minGapDays: minGap,
    minGapPair: minPair,
  };
}

/**
 * Finds busiest year, month, and day based on concert frequency.
 */
export function getBusiestPeriods(concerts: Concert[]): {
  year: [string, number];
  month: [string, number];
  day: [string, number];
} {
  const yearMap = new Map<string, number>();
  const monthMap = new Map<string, number>();
  const dayMap = new Map<string, number>();

  for (const c of concerts) {
    const d = new Date(c.date);
    const year = d.getFullYear().toString();
    const month = `${year}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const day = d.toISOString().slice(0, 10);

    yearMap.set(year, (yearMap.get(year) ?? 0) + 1);
    monthMap.set(month, (monthMap.get(month) ?? 0) + 1);
    dayMap.set(day, (dayMap.get(day) ?? 0) + 1);
  }

  const most = (map: Map<string, number>): [string, number] =>
    Array.from(map.entries()).sort((a, b) => b[1] - a[1])[0];

  return {
    year: most(yearMap),
    month: most(monthMap),
    day: most(dayMap),
  };
}

/**
 * Finds concerts that occurred on the same calendar day in future years.
 */
export function findAnniversaryConcerts(
  concerts: Concert[],
  targetYears: number[],
): Array<{
  original: Concert;
  match: Concert;
  yearsLater: number;
}> {
  const byDate = new Map<string, Concert[]>();

  for (const c of concerts) {
    const d = new Date(c.date);
    const key = `${d.getMonth()}-${d.getDate()}`; // month is 0-based
    if (!byDate.has(key)) byDate.set(key, []);
    byDate.get(key)?.push(c);
  }

  const anniversaries: Array<{
    original: Concert;
    match: Concert;
    yearsLater: number;
  }> = [];

  for (const [, list] of byDate.entries()) {
    list.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    for (let i = 0; i < list.length - 1; i++) {
      // eslint-disable-next-line security/detect-object-injection
      const aDate = new Date(list[i].date);
      for (let j = i + 1; j < list.length; j++) {
        // eslint-disable-next-line security/detect-object-injection
        const bDate = new Date(list[j].date);
        const diffYears = bDate.getFullYear() - aDate.getFullYear();
        if (targetYears.includes(diffYears)) {
          anniversaries.push({
            // eslint-disable-next-line security/detect-object-injection
            original: list[i],
            // eslint-disable-next-line security/detect-object-injection
            match: list[j],
            yearsLater: diffYears,
          });
        }
      }
    }
  }

  return anniversaries;
}

/**
 * Generates a summary of a concert tour, including distance and unique values.
 */
export function generateTourSummary(
  tour: string,
  concerts: Concert[],
): {
  tour: string;
  legs: number;
  shows: number;
  duration: { from: Date; to: Date };
  countries: string[];
  uniqueVenues: number;
  totalDistanceKm: number;
} {
  const {first, last} = getDateRange(concerts);
  const countries = new Set(concerts.map((c) => c.country));
  const venues = new Set(concerts.map((c) => c.venue));
  const legs = new Set(concerts.map((c) => c.leg));

  let totalDistance = 0;
  for (let i = 1; i < concerts.length; i++) {
    // eslint-disable-next-line security/detect-object-injection
    totalDistance += haversineKm(concerts[i - 1], concerts[i]);
  }

  return {
    tour,
    legs: legs.size,
    shows: concerts.length,
    duration: {from: first, to: last},
    countries: Array.from(countries),
    uniqueVenues: venues.size,
    totalDistanceKm: Math.round(totalDistance),
  };
}

/**
 * Returns the top N most frequent cities or venues.
 */
export function topOccurrences(
  concerts: Concert[],
  field: 'city' | 'venue',
  topN = 5,
): Array<[string, number]> {
  const count = new Map<string, number>();

  for (const c of concerts) {
    // eslint-disable-next-line security/detect-object-injection
    const key = c[field];
    count.set(key, (count.get(key) ?? 0) + 1);
  }

  return Array.from(count.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN);
}

/**
 * Returns the first concert performed in each country.
 */
export function getFirstConcertsByCountry(concerts: Concert[]): Array<{
  country: string;
  concert: Concert;
}> {
  const map = new Map<string, Concert>();

  for (const c of concerts) {
    const existing = map.get(c.country);
    const cDate = new Date(c.date);
    if (!existing || cDate < new Date(existing.date)) {
      map.set(c.country, c);
    }
  }

  return Array.from(map.entries()).map(([country, concert]) => ({
    country,
    concert,
  }));
}
