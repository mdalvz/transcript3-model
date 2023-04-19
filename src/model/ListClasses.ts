import { z } from 'zod';
import { ClassSchema } from './Common';

export const ListClassesResource = '/list-classes';

export const ListClassesRequestSchema = z.object({
  sessionToken: z.string(),
  transcriptId: z.string(),
});

export const ListClassesResponseSchema = z.array(ClassSchema);

export type ListClassesRequest = z.infer<typeof ListClassesRequestSchema>;

export type ListClassesResponse = z.infer<typeof ListClassesResponseSchema>;
