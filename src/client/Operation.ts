import { z } from 'zod';
import { ResponseError, ValidationError } from './Error';

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

  public async invoke(requestBody: TRequest): Promise<TResponse> {
    if (!this.requestSchema.safeParse(requestBody).success) {
      throw new ValidationError('Invalid request body');
    }
    let response = await fetch(this.endpoint + this.resource, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (response.ok) {
      try {
        let x = await response.json();
        console.log(JSON.stringify(x, null, 2));
        let responseBody = this.responseSchema.parse(x);
        return responseBody;
      } catch (_) {
        throw new ValidationError('Invalid response body');
      }
    } else {
      throw new ResponseError(response.status, await response.text());
    }
  }

}
