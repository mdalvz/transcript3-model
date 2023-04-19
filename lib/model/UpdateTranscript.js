"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTranscriptResponseSchema = exports.UpdateTranscriptRequestSchema = exports.UpdateTranscriptResource = void 0;
var zod_1 = require("zod");
var Common_1 = require("./Common");
exports.UpdateTranscriptResource = '/update-transcript';
exports.UpdateTranscriptRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
    transcript: Common_1.TranscriptSchema,
});
exports.UpdateTranscriptResponseSchema = Common_1.TranscriptSchema;
