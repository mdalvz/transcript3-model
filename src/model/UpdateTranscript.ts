import { z } from 'zod';
import { TranscriptSchema } from './Common';

export const UpdateTranscriptResource = '/update-transcript';

export const UpdateTranscriptRequestSchema = z.object({
  sessionId: z.string(),
  transcript: TranscriptSchema,
});

export const UpdateTranscriptResponseSchema = TranscriptSchema;

export type UpdateTranscriptRequest = z.infer<typeof UpdateTranscriptRequestSchema>;

export type UpdateTranscriptResponse = z.infer<typeof UpdateTranscriptResponseSchema>;
