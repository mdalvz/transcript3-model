import { z } from 'zod';
export declare const ListTranscriptsResource = "/list-transcripts";
export declare const ListTranscriptsRequestSchema: z.ZodObject<{
    sessionToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionToken: string;
}, {
    sessionToken: string;
}>;
export declare const ListTranscriptsResponseSchema: z.ZodArray<z.ZodObject<{
    transcriptId: z.ZodString;
    accountEmail: z.ZodString;
    schoolName: z.ZodString;
    schoolAddress: z.ZodString;
    adminTitle: z.ZodString;
    adminName: z.ZodString;
    adminPhone: z.ZodString;
    adminEmail: z.ZodString;
    studentNameFirst: z.ZodString;
    studentNameMiddle: z.ZodString;
    studentNameLast: z.ZodString;
    studentNameSuffix: z.ZodString;
    studentBirthDate: z.ZodString;
    studentAddress: z.ZodString;
    studentPhone: z.ZodString;
    studentEmail: z.ZodString;
    transcriptTitle: z.ZodString;
    transcriptLogo: z.ZodString;
    arrangeByGrade: z.ZodNumber;
    computeWeightedGPA: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    transcriptId: string;
    accountEmail: string;
    schoolName: string;
    schoolAddress: string;
    adminTitle: string;
    adminName: string;
    adminPhone: string;
    adminEmail: string;
    studentNameFirst: string;
    studentNameMiddle: string;
    studentNameLast: string;
    studentNameSuffix: string;
    studentBirthDate: string;
    studentAddress: string;
    studentPhone: string;
    studentEmail: string;
    transcriptTitle: string;
    transcriptLogo: string;
    arrangeByGrade: number;
    computeWeightedGPA: number;
}, {
    transcriptId: string;
    accountEmail: string;
    schoolName: string;
    schoolAddress: string;
    adminTitle: string;
    adminName: string;
    adminPhone: string;
    adminEmail: string;
    studentNameFirst: string;
    studentNameMiddle: string;
    studentNameLast: string;
    studentNameSuffix: string;
    studentBirthDate: string;
    studentAddress: string;
    studentPhone: string;
    studentEmail: string;
    transcriptTitle: string;
    transcriptLogo: string;
    arrangeByGrade: number;
    computeWeightedGPA: number;
}>, "many">;
export type ListTranscriptsRequest = z.infer<typeof ListTranscriptsRequestSchema>;
export type ListTranscriptsResponse = z.infer<typeof ListTranscriptsResponseSchema>;
