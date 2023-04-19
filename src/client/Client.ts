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
import { 
  CreateClassRequest, 
  CreateClassRequestSchema, 
  CreateClassResource, 
  CreateClassResponse, 
  CreateClassResponseSchema 
} from '../model/CreateClass';
import { 
  DeleteClassRequest, 
  DeleteClassRequestSchema, 
  DeleteClassResource, 
  DeleteClassResponse, 
  DeleteClassResponseSchema 
} from '../model/DeleteClass';
import { 
  UpdateClassRequest, 
  UpdateClassRequestSchema, 
  UpdateClassResource, 
  UpdateClassResponse, 
  UpdateClassResponseSchema 
} from '../model/UpdateClass';
import { 
  ListClassesRequest, 
  ListClassesRequestSchema, 
  ListClassesResource, 
  ListClassesResponse, 
  ListClassesResponseSchema 
} from '../model/ListClasses';
import { Operation } from './Operation';

export class Client {

  public readonly createAccount: Operation<CreateAccountRequest, CreateAccountResponse>;

  public readonly createSession: Operation<CreateSessionRequest, CreateSessionResponse>;

  public readonly createTranscript: Operation<CreateTranscriptRequest, CreateTranscriptResponse>;

  public readonly deleteTranscript: Operation<DeleteTranscriptRequest, DeleteTranscriptResponse>;

  public readonly listTranscripts: Operation<ListTranscriptsRequest, ListTranscriptsResponse>;

  public readonly updateTranscript: Operation<UpdateTranscriptRequest, UpdateTranscriptResponse>;

  public readonly getTranscript: Operation<GetTranscriptRequest, GetTranscriptResponse>;

  public readonly createClass: Operation<CreateClassRequest, CreateClassResponse>;

  public readonly deleteClass: Operation<DeleteClassRequest, DeleteClassResponse>;

  public readonly listClasses: Operation<ListClassesRequest, ListClassesResponse>;

  public readonly updateClass: Operation<UpdateClassRequest, UpdateClassResponse>;

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
    this.createClass = new Operation(
      endpoint,
      CreateClassResource,
      CreateClassRequestSchema,
      CreateClassResponseSchema
    );
    this.deleteClass = new Operation(
      endpoint,
      DeleteClassResource,
      DeleteClassRequestSchema,
      DeleteClassResponseSchema
    );
    this.updateClass = new Operation(
      endpoint,
      UpdateClassResource,
      UpdateClassRequestSchema,
      UpdateClassResponseSchema
    );
    this.listClasses = new Operation(
      endpoint,
      ListClassesResource,
      ListClassesRequestSchema,
      ListClassesResponseSchema
    );
  }

}
