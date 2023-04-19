"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTranscriptResponseSchema = exports.CreateTranscriptRequestSchema = exports.CreateTranscriptResource = void 0;
var zod_1 = require("zod");
var Common_1 = require("./Common");
exports.CreateTranscriptResource = '/create-transcript';
exports.CreateTranscriptRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
});
exports.CreateTranscriptResponseSchema = Common_1.TranscriptSchema;
