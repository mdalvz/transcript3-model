import { z } from 'zod';

export const CreateSessionResource = '/create-session';

export const CreateSessionRequestSchema = z.object({
  accountEmail: z.string().email(),
  accountPassword: z.string().min(8),
});

export const CreateSessionResponseSchema = z.object({
  sessionToken: z.string(),
});

export type CreateSessionRequest = z.infer<typeof CreateSessionRequestSchema>;

export type CreateSessionResponse = z.infer<typeof CreateSessionResponseSchema>;
