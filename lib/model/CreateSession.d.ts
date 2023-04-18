import { z } from 'zod';
export declare const CreateSessionResource = "/create-session";
export declare const CreateSessionRequestSchema: z.ZodObject<{
    accountEmail: z.ZodString;
    accountPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountEmail: string;
    accountPassword: string;
}, {
    accountEmail: string;
    accountPassword: string;
}>;
export declare const CreateSessionResponseSchema: z.ZodObject<{
    sessionToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionToken: string;
}, {
    sessionToken: string;
}>;
export type CreateSessionRequest = z.infer<typeof CreateSessionRequestSchema>;
export type CreateSessionResponse = z.infer<typeof CreateSessionResponseSchema>;
