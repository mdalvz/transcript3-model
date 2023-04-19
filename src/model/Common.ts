import { z } from 'zod';

export const TranscriptSchema = z.object({
  transcriptId: z.string(),
  accountEmail: z.string(),
  schoolName: z.string(),
  schoolAddress: z.string(),
  adminTitle: z.string(),
  adminName: z.string(),
  adminPhone: z.string(),
  adminEmail: z.string(),
  studentNameFirst: z.string(),
  studentNameMiddle: z.string(),
  studentNameLast: z.string(),
  studentNameSuffix: z.string(),
  studentBirthDate: z.string(),
  studentAddress: z.string(),
  studentPhone: z.string(),
  studentEmail: z.string(),
  transcriptTitle: z.string(),
  transcriptLogo: z.string(),
  arrangeByGrade: z.boolean(),
  computeWeightedGPA: z.boolean(),
});

export type Transcript = z.infer<typeof TranscriptSchema>;

export const ClassSchema = z.object({
  classId: z.string(),
  transcriptId: z.string(),
  subject: z.string(),
  name: z.string(),
  level: z.number(),
  year: z.string(),
  provider: z.string(),
  type: z.string(),
  grade: z.string(),
  awarded: z.number(),
  attempted: z.number(),
});

export type Class = z.infer<typeof ClassSchema>;