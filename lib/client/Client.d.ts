import { CreateAccountRequest, CreateAccountResponse } from '../model/CreateAccount';
import { CreateSessionRequest, CreateSessionResponse } from '../model/CreateSession';
import { CreateTranscriptRequest, CreateTranscriptResponse } from '../model/CreateTranscript';
import { DeleteTranscriptRequest, DeleteTranscriptResponse } from '../model/DeleteTranscript';
import { ListTranscriptsRequest, ListTranscriptsResponse } from '../model/ListTranscripts';
import { UpdateTranscriptRequest, UpdateTranscriptResponse } from '../model/UpdateTranscript';
import { GetTranscriptRequest, GetTranscriptResponse } from '../model/GetTranscript';
import { CreateClassRequest, CreateClassResponse } from '../model/CreateClass';
import { DeleteClassRequest, DeleteClassResponse } from '../model/DeleteClass';
import { UpdateClassRequest, UpdateClassResponse } from '../model/UpdateClass';
import { ListClassesRequest, ListClassesResponse } from '../model/ListClasses';
import { Operation } from './Operation';
export declare class Client {
    readonly createAccount: Operation<CreateAccountRequest, CreateAccountResponse>;
    readonly createSession: Operation<CreateSessionRequest, CreateSessionResponse>;
    readonly createTranscript: Operation<CreateTranscriptRequest, CreateTranscriptResponse>;
    readonly deleteTranscript: Operation<DeleteTranscriptRequest, DeleteTranscriptResponse>;
    readonly listTranscripts: Operation<ListTranscriptsRequest, ListTranscriptsResponse>;
    readonly updateTranscript: Operation<UpdateTranscriptRequest, UpdateTranscriptResponse>;
    readonly getTranscript: Operation<GetTranscriptRequest, GetTranscriptResponse>;
    readonly createClass: Operation<CreateClassRequest, CreateClassResponse>;
    readonly deleteClass: Operation<DeleteClassRequest, DeleteClassResponse>;
    readonly listClasses: Operation<ListClassesRequest, ListClassesResponse>;
    readonly updateClass: Operation<UpdateClassRequest, UpdateClassResponse>;
    constructor(endpoint: string);
}
