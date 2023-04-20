import { z } from 'zod';
export declare const GenerateTranscriptResource = "/generate-transcript";
export declare const GenerateTranscriptRequestSchema: z.ZodObject<{
    sessionToken: z.ZodString;
    transcriptId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transcriptId: string;
    sessionToken: string;
}, {
    transcriptId: string;
    sessionToken: string;
}>;
export declare const GenerateTranscriptResponseSchema: z.ZodObject<{
    documentName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    documentName: string;
}, {
    documentName: string;
}>;
export type GenerateTranscriptRequest = z.infer<typeof GenerateTranscriptRequestSchema>;
export type GenerateTranscriptResponse = z.infer<typeof GenerateTranscriptResponseSchema>;
