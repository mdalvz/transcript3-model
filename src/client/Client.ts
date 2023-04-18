import { 
  CreateAccountRequest, 
  CreateAccountRequestSchema, 
  CreateAccountResource, 
  CreateAccountResponse, 
  CreateAccountResponseSchema 
} from '../model/CreateAccount';
import { 
  CreateSessionRequest, 
  CreateSessionRequestSchema, 
  CreateSessionResource, 
  CreateSessionResponse, 
  CreateSessionResponseSchema 
} from '../model/CreateSession';
import { Operation } from './Operation';

export class Client {

  public readonly createAccount: Operation<CreateAccountRequest, CreateAccountResponse>;

  public readonly createSession: Operation<CreateSessionRequest, CreateSessionResponse>;

  public constructor(endpoint: string) {
    this.createAccount = new Operation(
      endpoint, 
      CreateAccountResource, 
      CreateAccountRequestSchema, 
      CreateAccountResponseSchema
    );
    this.createSession = new Operation(
      endpoint,
      CreateSessionResource,
      CreateSessionRequestSchema,
      CreateSessionResponseSchema
    );
  }

}
