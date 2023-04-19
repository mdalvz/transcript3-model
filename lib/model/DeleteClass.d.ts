import { z } from 'zod';
export declare const DeleteClassResource = "/delete-class";
export declare const DeleteClassRequestSchema: z.ZodObject<{
    sessionToken: z.ZodString;
    classId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    classId: string;
    sessionToken: string;
}, {
    classId: string;
    sessionToken: string;
}>;
export declare const DeleteClassResponseSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type DeleteClassRequest = z.infer<typeof DeleteClassRequestSchema>;
export type DeleteClassResponse = z.infer<typeof DeleteClassResponseSchema>;
