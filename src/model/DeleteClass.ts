import { z } from 'zod';

export const DeleteClassResource = '/delete-class';

export const DeleteClassRequestSchema = z.object({
  sessionToken: z.string(),
  classId: z.string(),
});

export const DeleteClassResponseSchema = z.object({});

export type DeleteClassRequest = z.infer<typeof DeleteClassRequestSchema>;

export type DeleteClassResponse = z.infer<typeof DeleteClassResponseSchema>;
