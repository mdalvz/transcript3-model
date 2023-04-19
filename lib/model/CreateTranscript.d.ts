import { z } from 'zod';
export declare const CreateTranscriptResource = "/create-transcript";
export declare const CreateTranscriptRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
}, {
    sessionId: string;
}>;
export declare const CreateTranscriptResponseSchema: z.ZodObject<{
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
    arrangeByGrade: z.ZodBoolean;
    computeWeightedGPA: z.ZodBoolean;
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
    arrangeByGrade: boolean;
    computeWeightedGPA: boolean;
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
    arrangeByGrade: boolean;
    computeWeightedGPA: boolean;
}>;
export type CreateTranscriptRequest = z.infer<typeof CreateTranscriptRequestSchema>;
export type CreateTranscriptResponse = z.infer<typeof CreateTranscriptResponseSchema>;