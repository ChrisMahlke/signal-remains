// src/lib/groupConcerts.ts
export interface Concert {
  lat: number;
  lng: number;
  date: string;
  city: string;
  state: string;
  country: string;
  event: string;
  tour: string;
  leg: number;
  venue: string;
}

export interface GroupedConcerts {
  [tourName: string]: {
    [legNumber: string]: Concert[];
  };
}

export interface FilterOptions {
  includeTours?: string[];
  includeLegs?: number[];
  includeLegsByTour?: Record<string, number[]>;
}

/**
 * Groups concerts by tour and leg, with optional filtering by tour or leg.
 */
export async function getGroupedConcerts(
  filters?: FilterOptions,
): Promise<GroupedConcerts> {
  const res = await fetch('/data/u2-concerts.json');
  if (!res.ok) {
    throw new Error(`Failed to fetch concerts: ${res.statusText}`);
  }

  const concerts = await res.json() as Concert[];
  const grouped: GroupedConcerts = {};

  for (const concert of concerts) {
    const {tour, leg} = concert;

    // --- Apply filters ---
    if (
      (filters?.includeTours && !filters.includeTours.includes(tour)) ||
      (filters?.includeLegs && !filters.includeLegs.includes(leg)) ||
      (filters?.includeLegsByTour &&
        // eslint-disable-next-line security/detect-object-injection
        !filters.includeLegsByTour[tour]?.includes(leg))
    ) {
      continue;
    }

    const legKey = String(leg);
    // eslint-disable-next-line security/detect-object-injection
    grouped[tour] ??= {};
    // eslint-disable-next-line security/detect-object-injection
    grouped[tour][legKey] ??= [];
    // eslint-disable-next-line security/detect-object-injection
    grouped[tour][legKey].push(concert);
  }

  // --- Sort concerts in each leg by date ---
  for (const tour of Object.keys(grouped)) {
    // eslint-disable-next-line security/detect-object-injection
    for (const leg of Object.keys(grouped[tour])) {
      // eslint-disable-next-line security/detect-object-injection
      grouped[tour][leg].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
    }
  }

  return grouped;
}

/**
 * Returns a dictionary of available tours and their leg numbers.
 */
export async function getToursAndLegs(): Promise<Record<string, number[]>> {
  const res = await fetch('/data/u2-concerts.json');
  if (!res.ok) {
    throw new Error(`Failed to fetch concerts: ${res.statusText}`);
  }

  const concerts = await res.json() as Concert[];
  const result: Record<string, Set<number>> = {};

  for (const {tour, leg} of concerts) {
    // eslint-disable-next-line security/detect-object-injection
    result[tour] ??= new Set();
    // eslint-disable-next-line security/detect-object-injection
    result[tour].add(leg);
  }

  // Convert Set<number> to sorted number[]
  const output: Record<string, number[]> = {};
  for (const tour in result) {
    // eslint-disable-next-line security/detect-object-injection
    output[tour] = Array.from(result[tour]).sort((a, b) => a - b);
  }

  return output;
}
