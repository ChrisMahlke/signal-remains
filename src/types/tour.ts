// src/types/tour.ts
import type {ReactNode} from 'react';

export interface MarkerStyle {
  width: number;
  height: number;
  backgroundColor: string;
  border: string;
  boxShadow: string;
  borderRadius: string;
  transition: string;
  transform?: string;
  opacity?: number;
}

export interface ClickableTextSegment {
  text: string;
  lat: number;
  lng: number;
}

export interface CulturalContextItem {
  title: string;
  description: Array<string | ClickableTextSegment>;
  icon: ReactNode;
  color: string;
}

export interface LegData {
  legNumber: number;
  mapId: string;
  markerStyle?: MarkerStyle;
  culturalContext?: CulturalContextItem[];
}

export interface TourData {
  step: number;
  tour: string;
  title: string;
  description: string;
  period: string;
  imageUrl: string;
  mapStyle: string;
  designPhilosophy: string;
  historicalContext: string;
  visualElements: string[];
  culturalInfluences: string[];
  tourMapId: string;
  defaultMarkerStyle: MarkerStyle;
  legs: LegData[];
}
