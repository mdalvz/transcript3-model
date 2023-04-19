"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClassResponseSchema = exports.DeleteClassRequestSchema = exports.DeleteClassResource = void 0;
var zod_1 = require("zod");
exports.DeleteClassResource = '/delete-class';
exports.DeleteClassRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
    classId: zod_1.z.string(),
});
exports.DeleteClassResponseSchema = zod_1.z.object({});
