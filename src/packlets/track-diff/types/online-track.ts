/**
 * An online track is a track that is currently available on Soundcloud
 */
export interface IOnlineTrack {
  /**
   * Soundcloud ID of the track
   */
  id: string;

  /**
   * The last time the track was modified on Soundcloud
   */
  lastModifedDate: Date;
}
