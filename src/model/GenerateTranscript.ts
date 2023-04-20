import { z } from 'zod';

export const GenerateTranscriptResource = '/generate-transcript';

export const GenerateTranscriptRequestSchema = z.object({
  sessionToken: z.string(),
  transcriptId: z.string(),
});

export const GenerateTranscriptResponseSchema = z.object({
  documentName: z.string(),
});

export type GenerateTranscriptRequest = z.infer<typeof GenerateTranscriptRequestSchema>;

export type GenerateTranscriptResponse = z.infer<typeof GenerateTranscriptResponseSchema>;
