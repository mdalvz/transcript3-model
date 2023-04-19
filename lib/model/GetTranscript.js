"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTranscriptResponseSchema = exports.GetTranscriptRequestSchema = exports.GetTranscriptResource = void 0;
var zod_1 = require("zod");
var Common_1 = require("./Common");
exports.GetTranscriptResource = '/get-transcript';
exports.GetTranscriptRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
    transcriptId: zod_1.z.string(),
});
exports.GetTranscriptResponseSchema = Common_1.TranscriptSchema;
