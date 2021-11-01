import got from "got/dist/source";
import { z } from "zod";
import { printDebugInformations, soundcloudClientId } from "../constants";
import { SoundcloudLikeCollectionSchema } from "../schemas/like-collection";
import { SoundcloudLike } from "../types/like";

export async function getLikes(
  userId: number | string,
  options?: {
    limit?: number;
  }
): Promise<SoundcloudLike[]> {
  const likes: SoundcloudLike[] = [];

  let parsed:
    | {
        next_href: string | null;
        collection: SoundcloudLike[];
      }
    | undefined = undefined;

  do {
    let url =
      parsed?.next_href ||
      `https://api-v2.soundcloud.com/users/${userId}/likes?limit=${
        options?.limit ?? "200"
      }`;

    url += "&client_id=" + soundcloudClientId;
    const resp = await got(url);

    parsed = z
      .object({
        collection: SoundcloudLikeCollectionSchema,
        next_href: z.string().nullable(),
      })
      .parse(JSON.parse(resp.body));

    likes.push(...parsed.collection);

    if (printDebugInformations) {
      console.debug(
        "done a request: " +
          JSON.stringify(
            {
              url,
              next: parsed.next_href,
              next_json: JSON.parse(resp.body).next_href,
              curr_length: parsed.collection.length,
              final_length: likes.length,
            },
            undefined,
            2
          )
      );
    }

    await new Promise<void>((resolve) => setTimeout(resolve, 250));
  } while (parsed.next_href);

  return likes;
}
