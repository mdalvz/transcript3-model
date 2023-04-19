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
import { 
  CreateTranscriptRequest, 
  CreateTranscriptRequestSchema, 
  CreateTranscriptResource, 
  CreateTranscriptResponse, 
  CreateTranscriptResponseSchema 
} from '../model/CreateTranscript';
import { 
  DeleteTranscriptRequest, 
  DeleteTranscriptRequestSchema, 
  DeleteTranscriptResource, 
  DeleteTranscriptResponse, 
  DeleteTranscriptResponseSchema 
} from '../model/DeleteTranscript';
import { 
  ListTranscriptsRequest, 
  ListTranscriptsRequestSchema, 
  ListTranscriptsResource, 
  ListTranscriptsResponse, 
  ListTranscriptsResponseSchema 
} from '../model/ListTranscripts';
import { 
  UpdateTranscriptRequest, 
  UpdateTranscriptRequestSchema, 
  UpdateTranscriptResource, 
  UpdateTranscriptResponse, 
  UpdateTranscriptResponseSchema 
} from '../model/UpdateTranscript';
import { 
  GetTranscriptRequest, 
  GetTranscriptRequestSchema, 
  GetTranscriptResource, 
  GetTranscriptResponse, 
  GetTranscriptResponseSchema 
} from '../model/GetTranscript';
import { Operation } from './Operation';

export class Client {

  public readonly createAccount: Operation<CreateAccountRequest, CreateAccountResponse>;

  public readonly createSession: Operation<CreateSessionRequest, CreateSessionResponse>;

  public readonly createTranscript: Operation<CreateTranscriptRequest, CreateTranscriptResponse>;

  public readonly deleteTranscript: Operation<DeleteTranscriptRequest, DeleteTranscriptResponse>;

  public readonly listTranscripts: Operation<ListTranscriptsRequest, ListTranscriptsResponse>;

  public readonly updateTranscript: Operation<UpdateTranscriptRequest, UpdateTranscriptResponse>;

  public readonly getTranscript: Operation<GetTranscriptRequest, GetTranscriptResponse>;

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
    this.createTranscript = new Operation(
      endpoint, 
      CreateTranscriptResource, 
      CreateTranscriptRequestSchema, 
      CreateTranscriptResponseSchema
    );
    this.deleteTranscript = new Operation(
      endpoint, 
      DeleteTranscriptResource, 
      DeleteTranscriptRequestSchema, 
      DeleteTranscriptResponseSchema
    );
    this.listTranscripts = new Operation(
      endpoint, 
      ListTranscriptsResource, 
      ListTranscriptsRequestSchema, 
      ListTranscriptsResponseSchema
    );
    this.updateTranscript = new Operation(
      endpoint, 
      UpdateTranscriptResource, 
      UpdateTranscriptRequestSchema, 
      UpdateTranscriptResponseSchema
    );
    this.getTranscript = new Operation(
      endpoint,
      GetTranscriptResource,
      GetTranscriptRequestSchema,
      GetTranscriptResponseSchema
    );
  }

}
