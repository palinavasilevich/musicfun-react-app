export type AttachmentDto = {
  url: string;
};

export type User = {
  id: string;
  name: string;
};

export type TrackListItemOutputAttributes = {
  title: string;
  attachments: Array<AttachmentDto>;
  user: User;
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListItemOutputAttributes;
};

export type GetTrackListOutput = {
  data: Array<TrackListItemOutput>;
};

export type GetTrackDetailsOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

export type GetTrackDetailsOutput = {
  data: GetTrackDetailsOutputData;
};
