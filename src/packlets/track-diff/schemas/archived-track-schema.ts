/* eslint-disable @rushstack/typedef-var */
import { z } from "zod";

export const ArchivedTrackSchema = z.object({
  /**
   * The Soundcloud ID of the track.
   */
  id: z.string(),
  /**
   * The last time the track was downloaded and archived.
   */
  lastArchivalDate: z.date(),
});
