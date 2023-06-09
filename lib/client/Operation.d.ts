import { z } from 'zod';
export declare class Operation<TRequest, TResponse> {
    private readonly endpoint;
    private readonly resource;
    private readonly requestSchema;
    private readonly responseSchema;
    constructor(endpoint: string, resource: string, requestSchema: z.ZodType<TRequest>, responseSchema: z.ZodType<TResponse>);
    invoke(requestBody: TRequest): Promise<TResponse>;
}
