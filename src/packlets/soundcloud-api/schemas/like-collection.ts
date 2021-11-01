/* eslint-disable @rushstack/typedef-var */
import { z } from "zod";
import { SoundcloudTrackSchema } from "./track";

export const SoundcloudLikeSchema = z.object({
  created_at: z.string().transform((s) => new Date(s)),
  kind: z.literal("like"),
  track: SoundcloudTrackSchema.optional(),
});

export const SoundcloudLikeCollectionSchema = z.array(SoundcloudLikeSchema);
