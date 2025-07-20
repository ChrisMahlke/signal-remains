export interface StyleInsight {
  tour: string;
  legNumber: number;
  mapId: string;
  themeName: string;
  visualSummary: string;
  rationale: StyleInsightBlock[];
}

export interface StyleInsightBlock {
  label: string;
  featureType: string;
  elementType: string;
  color?: string;
  meaning: string;
}
