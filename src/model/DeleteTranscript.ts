import { z } from 'zod';

export const DeleteTranscriptResource = '/delete-transcript';

export const DeleteTranscriptRequestSchema = z.object({
  sessionToken: z.string(),
  transcriptId: z.string(),
});

export const DeleteTranscriptResponseSchema = z.object({});

export type DeleteTranscriptRequest = z.infer<typeof DeleteTranscriptRequestSchema>;

export type DeleteTranscriptResponse = z.infer<typeof DeleteTranscriptResponseSchema>;
