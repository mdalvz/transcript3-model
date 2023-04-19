"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClassesResponseSchema = exports.ListClassesRequestSchema = exports.ListClassesResource = void 0;
var zod_1 = require("zod");
var Common_1 = require("./Common");
exports.ListClassesResource = '/list-classes';
exports.ListClassesRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
    transcriptId: zod_1.z.string(),
});
exports.ListClassesResponseSchema = zod_1.z.array(Common_1.ClassSchema);
