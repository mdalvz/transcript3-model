import { z } from 'zod';

export const GetAccountResource = '/get-account';

export const GetAccountRequestSchema = z.object({
  sessionToken: z.string(),
});

export const GetAccountResponseSchema = z.object({
  accountEmail: z.string(),
  accountActivated: z.boolean(),
});

export type GetAccountRequest = z.infer<typeof GetAccountRequestSchema>;

export type GetAccountResponse = z.infer<typeof GetAccountResponseSchema>;
