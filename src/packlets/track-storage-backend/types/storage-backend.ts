/**
 * A storage backend for storing tracks.
 * The storage backend should handle versioning of tracks.
 */
export interface ITrackStorageBackend {
  name: string;

  put(trackId: string, trackVersion: string): Promise<void>;
  remove(trackId: string): Promise<void>;
}
