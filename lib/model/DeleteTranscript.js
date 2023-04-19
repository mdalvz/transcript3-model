"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTranscriptResponseSchema = exports.DeleteTranscriptRequestSchema = exports.DeleteTranscriptResource = void 0;
var zod_1 = require("zod");
exports.DeleteTranscriptResource = '/delete-transcript';
exports.DeleteTranscriptRequestSchema = zod_1.z.object({
    sessionId: zod_1.z.string(),
    transcriptId: zod_1.z.string(),
});
exports.DeleteTranscriptResponseSchema = zod_1.z.object({});
