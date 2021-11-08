import { ITrackStorageBackend } from "../types/storage-backend";

export class GitStorageBackend implements ITrackStorageBackend {
  public get name(): string {
    return "git-storage-backed";
  }

  public async put(name: string, version: string): Promise<void> {
    // TODO:
  }

  public async remove(trackName: string): Promise<void> {
    // TODO:
  }
}
