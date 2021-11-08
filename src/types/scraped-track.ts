import { IOnlineTrack } from "../packlets/track-diff";
import { ITrackMetadata } from "../packlets/track-diff/types/track-metadata";

/**
 * A track that has been scraped.
 * Contains metadata.
 */
export type IScrapedTrack = IOnlineTrack & {
  metadata: ITrackMetadata;
};
