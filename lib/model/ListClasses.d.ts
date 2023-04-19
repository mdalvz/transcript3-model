import { z } from 'zod';
export declare const ListClassesResource = "/list-classes";
export declare const ListClassesRequestSchema: z.ZodObject<{
    sessionToken: z.ZodString;
    transcriptId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transcriptId: string;
    sessionToken: string;
}, {
    transcriptId: string;
    sessionToken: string;
}>;
export declare const ListClassesResponseSchema: z.ZodArray<z.ZodObject<{
    classId: z.ZodString;
    transcriptId: z.ZodString;
    subject: z.ZodString;
    name: z.ZodString;
    level: z.ZodNumber;
    term: z.ZodString;
    year: z.ZodString;
    provider: z.ZodString;
    type: z.ZodString;
    grade: z.ZodString;
    awarded: z.ZodNumber;
    attempted: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    year: string;
    transcriptId: string;
    classId: string;
    subject: string;
    level: number;
    term: string;
    provider: string;
    grade: string;
    awarded: number;
    attempted: number;
}, {
    type: string;
    name: string;
    year: string;
    transcriptId: string;
    classId: string;
    subject: string;
    level: number;
    term: string;
    provider: string;
    grade: string;
    awarded: number;
    attempted: number;
}>, "many">;
export type ListClassesRequest = z.infer<typeof ListClassesRequestSchema>;
export type ListClassesResponse = z.infer<typeof ListClassesResponseSchema>;
