"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountResponseSchema = exports.GetAccountRequestSchema = exports.GetAccountResource = void 0;
var zod_1 = require("zod");
exports.GetAccountResource = '/get-account';
exports.GetAccountRequestSchema = zod_1.z.object({
    sessionToken: zod_1.z.string(),
});
exports.GetAccountResponseSchema = zod_1.z.object({
    accountEmail: zod_1.z.string(),
    accountActivated: zod_1.z.boolean(),
});
