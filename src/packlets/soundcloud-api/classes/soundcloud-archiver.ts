import { ITrackScraper } from "../../../interfaces/track-scraper";
import { IScrapedTrack } from "../../../types/scraped-track";
import { fetchUserLikes } from "../functions";
import { ISoundcloudScrapingInstructions } from "../types/archiver-configuration";

export class SoundcloudScraper
  implements ITrackScraper<ISoundcloudScrapingInstructions>
{
  public get serviceName(): "Soundcloud" {
    return "Soundcloud";
  }

  public async scrapeTracks(
    instructions: ISoundcloudScrapingInstructions
  ): Promise<IScrapedTrack[]> {
    const tracks: IScrapedTrack[] = [];

    for (const userId of instructions.userIds) {
      const userLikes = await fetchUserLikes(userId);

      userLikes.forEach((like) => {
        // skip likes without tracks
        if (!like.track) {
          return;
        }

        tracks.push({
          id: like.track.id.toString(),
          lastModifedDate: like.track.last_modified,
          metadata: {
            authorDisplayName: like.track.user.username,
            trackDisplayName: like.track.title,
          },
        });
      });
    }

    return tracks;
  }

  public async downloadTrack(
    trackId: string
  ): Promise<{ filename: string; data: Buffer }> {
    throw new Error("Method not implemented.");
  }
}
