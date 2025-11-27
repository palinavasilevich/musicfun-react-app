import { useTracks } from "../../hooks/useTracks";
import { TrackItem } from "../TrackItem/TrackItem";

import cls from "./TrackList.module.css";

type TrackListProps = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string) => void;
};

export function TrackList({ selectedTrackId, onTrackSelect }: TrackListProps) {
  const { tracks } = useTracks();

  return (
    <div>
      {tracks === null && <span>Loading...</span>}
      {tracks && tracks.length === 0 && <span>No tracks...</span>}
      {tracks && tracks.length > 0 && (
        <ul className={cls.tracks}>
          {tracks.map((track) => (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={selectedTrackId === track.id}
              onTrackSelect={onTrackSelect}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
