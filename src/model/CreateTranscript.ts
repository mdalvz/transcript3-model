import { z } from 'zod';
import { TranscriptSchema } from './Common';

export const CreateTranscriptResource = '/create-transcript';

export const CreateTranscriptRequestSchema = z.object({
  sessionId: z.string(),
});

export const CreateTranscriptResponseSchema = TranscriptSchema;

export type CreateTranscriptRequest = z.infer<typeof CreateTranscriptRequestSchema>;

export type CreateTranscriptResponse = z.infer<typeof CreateTranscriptResponseSchema>;
