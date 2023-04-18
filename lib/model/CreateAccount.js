"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountResponseSchema = exports.CreateAccountRequestSchema = exports.CreateAccountResource = void 0;
var zod_1 = require("zod");
exports.CreateAccountResource = '/create-account';
exports.CreateAccountRequestSchema = zod_1.z.object({
    accountEmail: zod_1.z.string().email(),
    accountPassword: zod_1.z.string().min(8),
});
exports.CreateAccountResponseSchema = zod_1.z.object({});
