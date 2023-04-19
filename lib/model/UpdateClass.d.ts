import { z } from 'zod';
export declare const UpdateClassResource = "/update-class";
export declare const UpdateClassRequestSchema: z.ZodObject<{
    sessionToken: z.ZodString;
    class: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    class: {
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
    };
    sessionToken: string;
}, {
    class: {
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
    };
    sessionToken: string;
}>;
export declare const UpdateClassResponseSchema: z.ZodObject<{
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
}>;
export type UpdateClassRequest = z.infer<typeof UpdateClassRequestSchema>;
export type UpdateClassResponse = z.infer<typeof UpdateClassResponseSchema>;
