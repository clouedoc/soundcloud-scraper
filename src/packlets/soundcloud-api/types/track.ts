import { z } from "zod";
import { SoundcloudTrackSchema } from "../schemas/track";

export type ISoundcloudTrack = z.infer<typeof SoundcloudTrackSchema>;
