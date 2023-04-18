import { z } from 'zod';
import { OperationErrorType, OperationErrorTypeSchema } from '../model/OperationError';

export class Operation<TRequest, TResponse> {

  private readonly endpoint: string;

  private readonly resource: string;

  private readonly requestSchema: z.ZodType<TRequest>;

  private readonly responseSchema: z.ZodType<TResponse>;

  public constructor(
    endpoint: string, 
    resource: string, 
    requestSchema: z.ZodType<TRequest>, 
    responseSchema: z.ZodType<TResponse>) {
    
    this.endpoint = endpoint;
    this.resource = resource;
    this.requestSchema = requestSchema;
    this.responseSchema = responseSchema;
  }

  public async invoke(requestBody: TRequest): Promise<[TResponse?, OperationErrorType?]> {
    if (!this.requestSchema.safeParse(requestBody).success) {
      return [undefined, OperationErrorType.VALIDATION_FAILED];
    }
    try {
      let response = await fetch(this.endpoint + this.resource, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        try {
          let responseBody = this.responseSchema.parse(await response.json());
          return [responseBody, undefined];
        } catch (_) {
          return [undefined, OperationErrorType.VALIDATION_FAILED];
        }
      } else {
        try {
          let errorType = OperationErrorTypeSchema.parse(await response.json());
          return [undefined, errorType];
        } catch (_) {
          return [undefined, OperationErrorType.VALIDATION_FAILED];
        }
      }
    } catch (_) {
      return [undefined, OperationErrorType.REQUEST_FAILED];
    }
  }

}
