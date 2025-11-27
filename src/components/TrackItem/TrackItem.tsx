import clsx from "clsx";
import type { TrackListItemOutput } from "../../types";
import cls from "./TrackItem.module.css";

type TrackItemProps = {
  track: TrackListItemOutput;
  isSelected: boolean;
  onTrackSelect: (trackId: string) => void;
};

export function TrackItem({
  track,
  isSelected,
  onTrackSelect,
}: TrackItemProps) {
  const handleClick = () => onTrackSelect?.(track.id);

  const className = clsx({ [cls.card]: true, [cls.selected]: isSelected });

  return (
    <li
      // className={`${cls.card} ${isSelected ? cls.selected : ""}`}
      className={className}
      onClick={handleClick}
    >
      <h3 className={cls.title}>{track.attributes.title}</h3>
      <p>{track.attributes.user.name}</p>
      <audio controls src={track.attributes.attachments[0].url}></audio>
    </li>
  );
}
