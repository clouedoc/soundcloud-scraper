/* eslint-disable @rushstack/typedef-var */
import { z } from "zod";

export const SoundcloudTrackSchema = z
  .object({
    artwork_url: z.string().nullable(),
    id: z.number(),
    likes_count: z.number().nullable(),
    duration: z.number(),
    full_duration: z.number(),
    genre: z.string().nullable(),
    kind: z.literal("track"),
    last_modified: z.string().transform((s) => new Date(s)),
    playback_count: z.number().nullable(),
    public: z.boolean(),
    release_date: z.string().nullable(),
    streamable: z.boolean(),
    title: z.string(),
    permalink_url: z.string(),
    user: z
      .object({
        kind: z.literal("user"),
        permalink: z.string(),
        permalink_url: z.string(),
        username: z.string(),
        verified: z.boolean(),
      })
      .passthrough(),
  })
  .passthrough();
