import { ITrackScraper } from "../interfaces/track-scraper";
import { ITrackStorageBackend } from "../packlets/track-storage-backend/types";

export class Archiver<TScrapingInstruction> {
  private _scraper: ITrackScraper<TScrapingInstruction>;
  private _store: ITrackStorageBackend;

  public constructor(
    scraper: ITrackScraper<TScrapingInstruction>,
    storageBackend: ITrackStorageBackend
  ) {
    this._scraper = scraper;
    this._store = storageBackend;
  }
}
