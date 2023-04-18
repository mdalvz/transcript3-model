import { z } from 'zod';
export declare const CreateAccountResource = "/create-account";
export declare const CreateAccountRequestSchema: z.ZodObject<{
    accountEmail: z.ZodString;
    accountPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountEmail: string;
    accountPassword: string;
}, {
    accountEmail: string;
    accountPassword: string;
}>;
export declare const CreateAccountResponseSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type CreateAccountRequest = z.infer<typeof CreateAccountRequestSchema>;
export type CreateAccountResponse = z.infer<typeof CreateAccountResponseSchema>;
