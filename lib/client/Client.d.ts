import { CreateAccountRequest, CreateAccountResponse } from '../model/CreateAccount';
import { CreateSessionRequest, CreateSessionResponse } from '../model/CreateSession';
import { Operation } from './Operation';
export declare class Client {
    readonly createAccount: Operation<CreateAccountRequest, CreateAccountResponse>;
    readonly createSession: Operation<CreateSessionRequest, CreateSessionResponse>;
    constructor(endpoint: string);
}
