import { CreateAccountRequest, CreateAccountResponse } from '../model/CreateAccount';
import { CreateSessionRequest, CreateSessionResponse } from '../model/CreateSession';
import { CreateTranscriptRequest, CreateTranscriptResponse } from '../model/CreateTranscript';
import { DeleteTranscriptRequest, DeleteTranscriptResponse } from '../model/DeleteTranscript';
import { ListTranscriptsRequest, ListTranscriptsResponse } from '../model/ListTranscripts';
import { UpdateTranscriptRequest, UpdateTranscriptResponse } from '../model/UpdateTranscript';
import { GetTranscriptRequest, GetTranscriptResponse } from '../model/GetTranscript';
import { Operation } from './Operation';
export declare class Client {
    readonly createAccount: Operation<CreateAccountRequest, CreateAccountResponse>;
    readonly createSession: Operation<CreateSessionRequest, CreateSessionResponse>;
    readonly createTranscript: Operation<CreateTranscriptRequest, CreateTranscriptResponse>;
    readonly deleteTranscript: Operation<DeleteTranscriptRequest, DeleteTranscriptResponse>;
    readonly listTranscripts: Operation<ListTranscriptsRequest, ListTranscriptsResponse>;
    readonly updateTranscript: Operation<UpdateTranscriptRequest, UpdateTranscriptResponse>;
    readonly getTranscript: Operation<GetTranscriptRequest, GetTranscriptResponse>;
    constructor(endpoint: string);
}
