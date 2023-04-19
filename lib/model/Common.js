"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassSchema = exports.TranscriptSchema = void 0;
var zod_1 = require("zod");
exports.TranscriptSchema = zod_1.z.object({
    transcriptId: zod_1.z.string(),
    accountEmail: zod_1.z.string(),
    schoolName: zod_1.z.string(),
    schoolAddress: zod_1.z.string(),
    adminTitle: zod_1.z.string(),
    adminName: zod_1.z.string(),
    adminPhone: zod_1.z.string(),
    adminEmail: zod_1.z.string(),
    studentNameFirst: zod_1.z.string(),
    studentNameMiddle: zod_1.z.string(),
    studentNameLast: zod_1.z.string(),
    studentNameSuffix: zod_1.z.string(),
    studentBirthDate: zod_1.z.string(),
    studentGraduationDate: zod_1.z.string(),
    studentAddress: zod_1.z.string(),
    studentPhone: zod_1.z.string(),
    studentEmail: zod_1.z.string(),
    transcriptTitle: zod_1.z.string(),
    transcriptLogo: zod_1.z.string(),
    arrangeByGrade: zod_1.z.number(),
    computeWeightedGPA: zod_1.z.number(),
});
exports.ClassSchema = zod_1.z.object({
    classId: zod_1.z.string(),
    transcriptId: zod_1.z.string(),
    subject: zod_1.z.string(),
    name: zod_1.z.string(),
    level: zod_1.z.number(),
    term: zod_1.z.string(),
    year: zod_1.z.string(),
    provider: zod_1.z.string(),
    type: zod_1.z.string(),
    grade: zod_1.z.string(),
    awarded: zod_1.z.number(),
    attempted: zod_1.z.number(),
});
