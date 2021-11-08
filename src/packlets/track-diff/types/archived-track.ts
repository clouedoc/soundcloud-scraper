import { z } from "zod";
import { ArchivedTrackSchema } from "../schemas/archived-track-schema";

/**
 * A track that is being archived.
 */
export type IArchivedTrack = z.infer<typeof ArchivedTrackSchema>;
