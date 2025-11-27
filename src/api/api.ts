import type { GetTrackDetailsOutput, GetTrackListOutput } from "../types";

const API_KEY = "c5979a0f-1886-4e63-9bc2-3546b075c045";
const BASIC_URL = "https://musicfun.it-incubator.app/api/1.0";

export const getAllTracks = async (): Promise<GetTrackListOutput> => {
  const response = await fetch(`${BASIC_URL}/playlists/tracks`, {
    headers: {
      "Content-Type": "application/json",
      "api-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

export const getTrackById = async (
  trackId: string
): Promise<GetTrackDetailsOutput> => {
  const response = await fetch(`${BASIC_URL}/playlists/tracks/${trackId}`, {
    headers: {
      "Content-Type": "application/json",
      "api-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
