import { useTrackDetails } from "../../hooks/useTrackDetails";

import cls from "./TrackDetails.module.css";

type TrackDetailsProps = {
  selectedTrackId: string | null;
};

export function TrackDetails({ selectedTrackId }: TrackDetailsProps) {
  const { trackDetails } = useTrackDetails(selectedTrackId);

  return (
    <section className={cls.section}>
      <div className={cls.container}>
        <h2>Track Details</h2>
        <div>
          {!selectedTrackId && !trackDetails && "Track is not selected"}

          {!trackDetails && selectedTrackId && <span>Loading...</span>}

          {trackDetails &&
            selectedTrackId &&
            trackDetails.id !== selectedTrackId && <span>Loading...</span>}
          {trackDetails && (
            <>
              <h3>{trackDetails?.attributes.title}</h3>
              <div>
                <h3>Lyrics</h3>
                <p>{trackDetails?.attributes.lyrics ?? "No Lyrics"}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
