import { z } from 'zod';
export declare const DeleteTranscriptResource = "/delete-transcript";
export declare const DeleteTranscriptRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
    transcriptId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transcriptId: string;
    sessionId: string;
}, {
    transcriptId: string;
    sessionId: string;
}>;
export declare const DeleteTranscriptResponseSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type DeleteTranscriptRequest = z.infer<typeof DeleteTranscriptRequestSchema>;
export type DeleteTranscriptResponse = z.infer<typeof DeleteTranscriptResponseSchema>;
