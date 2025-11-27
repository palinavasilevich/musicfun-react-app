import { useEffect, useState } from "react";
import { getAllTracks } from "../api/api";
import type { TrackListItemOutput } from "../types";

export const useTracks = () => {
  const [tracks, setTracks] = useState<TrackListItemOutput[] | null>(null);

  useEffect(() => {
    getAllTracks().then((json) => setTracks(json.data));
  }, []);

  return { tracks };
};
