import type { GetTrackDetailsOutput, GetTrackListOutput } from "../types";

const BASIC_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

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
