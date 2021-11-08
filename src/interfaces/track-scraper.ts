import { IScrapedTrack } from "../types/scraped-track";

export interface ITrackScraper<TScrapingInstructions> {
  serviceName: "Soundcloud";

  /**
   * Scrape the given tracks from the service provider.
   * @param instructions scraping instructions (tell the scraper what we want it to scrape)
   * @returns an online track with metadata
   */
  scrapeTracks(instructions: TScrapingInstructions): Promise<IScrapedTrack[]>;
  /**
   * Download the latest version of a given track from the online service.
   * @param trackId the trackId to download.
   */
  downloadTrack(trackId: string): Promise<{
    filename: string;
    data: Buffer;
  }>;
}
