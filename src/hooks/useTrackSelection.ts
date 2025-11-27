import { useState } from "react";

export const useTrackSelection = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

  return { selectedTrackId, setSelectedTrackId };
};
