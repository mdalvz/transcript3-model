"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionResponseSchema = exports.CreateSessionRequestSchema = exports.CreateSessionResource = void 0;
var zod_1 = require("zod");
exports.CreateSessionResource = '/create-session';
exports.CreateSessionRequestSchema = zod_1.z.object({
    accountEmail: zod_1.z.string().email(),
    accountPassword: zod_1.z.string().min(8),
});
exports.CreateSessionResponseSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
});
