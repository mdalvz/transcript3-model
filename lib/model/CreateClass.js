"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClassResponseSchema = exports.CreateClassRequestSchema = exports.CreateClassResource = void 0;
var zod_1 = require("zod");
var Common_1 = require("./Common");
exports.CreateClassResource = '/create-class';
exports.CreateClassRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
    transcriptId: zod_1.z.string(),
});
exports.CreateClassResponseSchema = Common_1.ClassSchema;
