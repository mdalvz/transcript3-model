import { z } from 'zod';
import { ClassSchema } from './Common';

export const UpdateClassResource = '/update-class';

export const UpdateClassRequestSchema = z.object({
  sessionToken: z.string(),
  class: ClassSchema,
});

export const UpdateClassResponseSchema = ClassSchema;

export type UpdateClassRequest = z.infer<typeof UpdateClassRequestSchema>;

export type UpdateClassResponse = z.infer<typeof UpdateClassResponseSchema>;
