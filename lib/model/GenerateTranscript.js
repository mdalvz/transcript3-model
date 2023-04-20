"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTranscriptResponseSchema = exports.GenerateTranscriptRequestSchema = exports.GenerateTranscriptResource = void 0;
var zod_1 = require("zod");
exports.GenerateTranscriptResource = '/generate-transcript';
exports.GenerateTranscriptRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
    transcriptId: zod_1.z.string(),
});
exports.GenerateTranscriptResponseSchema = zod_1.z.object({
    documentName: zod_1.z.string(),
});
