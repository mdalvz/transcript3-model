"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClassResponseSchema = exports.UpdateClassRequestSchema = exports.UpdateClassResource = void 0;
var zod_1 = require("zod");
var Common_1 = require("./Common");
exports.UpdateClassResource = '/update-class';
exports.UpdateClassRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
    class: Common_1.ClassSchema,
});
exports.UpdateClassResponseSchema = Common_1.ClassSchema;
