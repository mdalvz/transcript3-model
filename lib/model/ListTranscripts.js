"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTranscriptsResponseSchema = exports.ListTranscriptsRequestSchema = exports.ListTranscriptsResource = void 0;
var zod_1 = require("zod");
var Common_1 = require("./Common");
exports.ListTranscriptsResource = '/list-transcripts';
exports.ListTranscriptsRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
});
exports.ListTranscriptsResponseSchema = zod_1.z.array(Common_1.TranscriptSchema);
