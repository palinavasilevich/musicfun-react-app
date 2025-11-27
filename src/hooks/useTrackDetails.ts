import { useEffect, useState } from "react";
import type { GetTrackDetailsOutputData } from "../types";
import { getTrackById } from "../api/api";

export const useTrackDetails = (selectedTrackId: string | null) => {
  const [trackDetails, setTrackDetails] =
    useState<GetTrackDetailsOutputData | null>(null);

  useEffect(() => {
    if (!selectedTrackId) {
      setTrackDetails(null);
      return;
    }

    getTrackById(selectedTrackId).then((json) => setTrackDetails(json.data));
  }, [selectedTrackId]);

  return { trackDetails };
};
