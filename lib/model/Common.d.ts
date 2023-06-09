import { z } from 'zod';
export declare const TranscriptSchema: z.ZodObject<{
    transcriptId: z.ZodString;
    accountEmail: z.ZodString;
    isK12: z.ZodNumber;
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
    studentGraduationDate: z.ZodString;
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
    isK12: number;
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
    studentGraduationDate: string;
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
    isK12: number;
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
    studentGraduationDate: string;
    studentAddress: string;
    studentPhone: string;
    studentEmail: string;
    transcriptTitle: string;
    transcriptLogo: string;
    arrangeByGrade: number;
    computeWeightedGPA: number;
}>;
export type Transcript = z.infer<typeof TranscriptSchema>;
export declare const ClassSchema: z.ZodObject<{
    classId: z.ZodString;
    transcriptId: z.ZodString;
    subject: z.ZodString;
    name: z.ZodString;
    level: z.ZodNumber;
    term: z.ZodString;
    year: z.ZodString;
    provider: z.ZodString;
    type: z.ZodArray<z.ZodString, "many">;
    grade: z.ZodString;
    awarded: z.ZodNumber;
    attempted: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: string[];
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
    type: string[];
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
export type Class = z.infer<typeof ClassSchema>;
