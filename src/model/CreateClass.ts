import { z } from 'zod';
import { ClassSchema } from './Common';

export const CreateClassResource = '/create-class';

export const CreateClassRequestSchema = z.object({
  sessionToken: z.string(),
  transcriptId: z.string(),
});

export const CreateClassResponseSchema = ClassSchema;

export type CreateClassRequest = z.infer<typeof CreateClassRequestSchema>;

export type CreateClassResponse = z.infer<typeof CreateClassResponseSchema>;
