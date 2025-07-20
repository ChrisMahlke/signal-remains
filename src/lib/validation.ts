// Validation utilities for data integrity
export interface ValidationError {
  field: string;
  message: string;
  value?: unknown;
}

export interface Concert {
  date: string;
  venue: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  tour?: string;
}

export interface Tour {
  step: number;
  tour: string;
  title: string;
  period: string;
  description: string;
  imageUrl: string;
  tourMapId: string;
  defaultMarkerStyle: {
    width: number;
    height: number;
    backgroundColor: string;
    border: string;
    boxShadow: string;
    borderRadius: string;
    transition: string;
  };
  legs: Array<{
    legNumber: number;
    mapId?: string;
    markerStyle?: {
      width: number;
      height: number;
      backgroundColor: string;
      border: string;
      boxShadow: string;
      borderRadius: string;
      transition: string;
    };
    culturalContext?: Array<{
      title: string;
      description: Array<string | { text: string; lat?: number; lng?: number }>;
      icon: React.ReactNode;
      color: string;
    }>;
  }>;
}

// Validate concert data
export const validateConcert = (data: unknown): Concert | null => {
  if (!data || typeof data !== 'object') {
    return null;
  }

  const concert = data as Record<string, unknown>;

  // Required fields
  const requiredFields = ['date', 'venue', 'city', 'country', 'lat', 'lng'];
  for (const field of requiredFields) {
    if (!(field in concert)) {
      return null;
    }
  }

  // Type validation
  if (
    typeof concert.date !== 'string' ||
    typeof concert.venue !== 'string' ||
    typeof concert.city !== 'string' ||
    typeof concert.country !== 'string' ||
    typeof concert.lat !== 'number' ||
    typeof concert.lng !== 'number'
  ) {
    return null;
  }

  // Value validation
  if (
    concert.date.length === 0 ||
    concert.venue.length === 0 ||
    concert.city.length === 0 ||
    concert.country.length === 0 ||
    concert.lat < -90 || concert.lat > 90 ||
    concert.lng < -180 || concert.lng > 180
  ) {
    return null;
  }

  return concert as unknown as Concert;
};

// Validate tour data
export const validateTour = (data: unknown): Tour | null => {
  if (!data || typeof data !== 'object') {
    return null;
  }

  const tour = data as Record<string, unknown>;

  // Required fields
  const requiredFields = ['step', 'tour', 'title', 'period', 'description', 'imageUrl', 'tourMapId'];
  for (const field of requiredFields) {
    if (!(field in tour)) {
      return null;
    }
  }

  // Type validation
  if (
    typeof tour.step !== 'number' ||
    typeof tour.tour !== 'string' ||
    typeof tour.title !== 'string' ||
    typeof tour.period !== 'string' ||
    typeof tour.description !== 'string' ||
    typeof tour.imageUrl !== 'string' ||
    typeof tour.tourMapId !== 'string'
  ) {
    return null;
  }

  // Value validation
  if (
    tour.step < 1 ||
    tour.tour.length === 0 ||
    tour.title.length === 0 ||
    tour.period.length === 0 ||
    tour.description.length === 0 ||
    tour.imageUrl.length === 0 ||
    tour.tourMapId.length === 0
  ) {
    return null;
  }

  // Validate defaultMarkerStyle
  if (!tour.defaultMarkerStyle || typeof tour.defaultMarkerStyle !== 'object') {
    return null;
  }

  const markerStyle = tour.defaultMarkerStyle as Record<string, unknown>;
  const markerStyleFields = ['width', 'height', 'backgroundColor', 'border', 'boxShadow', 'borderRadius', 'transition'];

  for (const field of markerStyleFields) {
    if (!(field in markerStyle) || typeof markerStyle[field] !== 'string') {
      return null;
    }
  }

  // Validate legs array
  if (!Array.isArray(tour.legs)) {
    return null;
  }

  for (const leg of tour.legs) {
    if (!leg || typeof leg !== 'object') {
      return null;
    }

    const legObj = leg as Record<string, unknown>;
    if (typeof legObj.legNumber !== 'number' || legObj.legNumber < 1) {
      return null;
    }
  }

  return tour as unknown as Tour;
};

// Validate grouped concerts response
export const validateApiResponse = (response: unknown): { isValid: boolean; errors: ValidationError[] } => {
  const errors: ValidationError[] = [];

  if (!response || typeof response !== 'object') {
    errors.push({field: 'response', message: 'Invalid response format'});
    return {isValid: false, errors};
  }

  const data = response as Record<string, unknown>;

  // Check if response is a grouped concerts object
  if (Object.keys(data).length === 0) {
    errors.push({field: 'response', message: 'Empty response data'});
    return {isValid: false, errors};
  }

  // Validate each tour
  for (const tourName of Object.keys(data)) {
    const tourData = data[tourName];
    if (!tourData || typeof tourData !== 'object') {
      errors.push({
        field: `tour[${tourName}]`,
        message: 'Invalid tour data structure',
        value: tourData,
      });
      continue;
    }

    const tour = tourData as Record<string, unknown>;

    // Validate each leg in the tour
    for (const legNumber of Object.keys(tour)) {
      const legData = tour[legNumber];
      if (!Array.isArray(legData)) {
        errors.push({
          field: `tour[${tourName}].leg[${legNumber}]`,
          message: 'Invalid leg data - expected array',
          value: legData,
        });
        continue;
      }

      // Validate each concert in the leg
      const concerts = legData as unknown[];
      for (let i = 0; i < concerts.length; i++) {
        const concert = validateConcert(concerts[i]);
        if (!concert) {
          errors.push({
            field: `tour[${tourName}].leg[${legNumber}].concert[${i}]`,
            message: 'Invalid concert data',
            value: concerts[i],
          });
        }
      }
    }
  }

  return {isValid: errors.length === 0, errors};
};

// Sanitize user input
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};

// Validate coordinates
export const validateCoordinates = (lat: number, lng: number): boolean => {
  return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
};

// Validate date string
export const validateDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && date.getTime() > 0;
};
