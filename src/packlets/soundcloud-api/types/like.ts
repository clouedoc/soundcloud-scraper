import { z } from "zod";
import { SoundcloudLikeSchema } from "../schemas/like-collection";

/**
 * A Soundcloud like from a likes collection.
 */
export type SoundcloudLike = z.infer<typeof SoundcloudLikeSchema>;
