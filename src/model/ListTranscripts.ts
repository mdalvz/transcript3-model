import { z } from 'zod';
import { TranscriptSchema } from './Common';

export const ListTranscriptsResource = '/list-transcripts';

export const ListTranscriptsRequestSchema = z.object({
  sessionId: z.string(),
});

export const ListTranscriptsResponseSchema = z.array(TranscriptSchema);

export type ListTranscriptsRequest = z.infer<typeof ListTranscriptsRequestSchema>;

export type ListTranscriptsResponse = z.infer<typeof ListTranscriptsResponseSchema>;
