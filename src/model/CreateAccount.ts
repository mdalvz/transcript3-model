import { z } from 'zod';

export const CreateAccountResource = '/create-account';

export const CreateAccountRequestSchema = z.object({
  accountEmail: z.string().email(),
  accountPassword: z.string().min(8),
});

export const CreateAccountResponseSchema = z.object({});

export type CreateAccountRequest = z.infer<typeof CreateAccountRequestSchema>;

export type CreateAccountResponse = z.infer<typeof CreateAccountResponseSchema>;
