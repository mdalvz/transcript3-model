import { z } from 'zod';
export declare const GetAccountResource = "/get-account";
export declare const GetAccountRequestSchema: z.ZodObject<{
    sessionToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionToken: string;
}, {
    sessionToken: string;
}>;
export declare const GetAccountResponseSchema: z.ZodObject<{
    accountEmail: z.ZodString;
    accountActivated: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    accountEmail: string;
    accountActivated: boolean;
}, {
    accountEmail: string;
    accountActivated: boolean;
}>;
export type GetAccountRequest = z.infer<typeof GetAccountRequestSchema>;
export type GetAccountResponse = z.infer<typeof GetAccountResponseSchema>;
