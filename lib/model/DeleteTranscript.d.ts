import { z } from 'zod';
export declare const DeleteTranscriptResource = "/delete-transcript";
export declare const DeleteTranscriptRequestSchema: z.ZodObject<{
    sessionToken: z.ZodString;
    transcriptId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transcriptId: string;
    sessionToken: string;
}, {
    transcriptId: string;
    sessionToken: string;
}>;
export declare const DeleteTranscriptResponseSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type DeleteTranscriptRequest = z.infer<typeof DeleteTranscriptRequestSchema>;
export type DeleteTranscriptResponse = z.infer<typeof DeleteTranscriptResponseSchema>;
