import { z } from 'zod';
import { TranscriptSchema } from './Common';

export const GetTranscriptResource = '/get-transcript';

export const GetTranscriptRequestSchema = z.object({
  sessionToken: z.string(),
  transcriptId: z.string(),
});

export const GetTranscriptResponseSchema = TranscriptSchema;

export type GetTranscriptRequest = z.infer<typeof GetTranscriptRequestSchema>;

export type GetTranscriptResponse = z.infer<typeof GetTranscriptResponseSchema>;
