import { IArchivedTrack, IOnlineTrack } from "../types";

export function isOnlineTrackNewer(
  archived: IArchivedTrack,
  online: IOnlineTrack
): boolean {
  return archived.lastArchivalDate.getTime() < online.lastModifedDate.getTime();
}
