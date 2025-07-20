import type {Concert} from './groupConcerts';

export interface GeminiResponse {
  content: string;
  era: string;
  keywords: string[];
  notableVenues: string[];
}

export async function fetchGeminiContext(
  concert: Concert,
): Promise<GeminiResponse> {
  // Use environment variable for API URL, fallback to relative path for local development
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({prompt: buildPrompt(concert)}),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `Gemini API error: ${response.status} ${
        response.statusText
      } — ${error}`,
    );
  }

  return (await response.json()) as GeminiResponse;
}

function buildPrompt(concert: Concert): string {
  return `
You are a cultural historian contributing to an interactive archive of U2’s global tours.

Your task is to provide an accurate, region-aware explanation of the political and 
cultural environment for the following concert:

- City: ${concert.city}
- Country: ${concert.country}
- Venue: ${concert.venue}
- Date: ${concert.date}
- Tour: ${concert.tour} (Leg ${concert.leg})

Context:
- Reflect on local political movements, social unrest, or geopolitical tension
  relevant to that place and time.
- Emphasize how these conditions may have shaped the concert’s meaning or reception.
- Optionally mention cultural undercurrents: media, music scenes, religion,
  economic factors.

Respond ONLY with the following JSON (no commentary or code block):

{
  "content": "Cultural and political background in narrative form...",
  "era": "A short label like 'Cold War Europe' or 'Reagan-era America'",
  "keywords": ["string", "string", ...],
  "notableVenues": ["string", "string", ...]
}
`;
}
