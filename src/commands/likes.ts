/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/typedef */
import { Command } from "@oclif/command";
import { fetchUserLikes } from "../packlets/soundcloud-api";

export default class Likes extends Command {
  static description =
    "Get the URLs of all the tracks a user likes on Soundcloud";

  static flags = {};

  static args = [{ name: "userId", required: true }];

  async run() {
    const { args } = this.parse(Likes);

    this.log("Fetching likes of user ID " + args.userId);

    const likes = await fetchUserLikes(args.userId);
    const tracks = likes.filter((l) => !!l.track);

    this.log("Printing user likes (" + tracks.length + ")");
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    console.log(tracks.map((t) => t.track!.permalink_url).join("\n"));
  }
}
