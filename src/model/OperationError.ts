import { z } from 'zod';

export enum OperationErrorType {

  //Common
  REQUEST_FAILED      = 'REQUEST_FAILED',
  VALIDATION_FAILED   = 'VALIDATION_FAILED',

  //CreateAccount
  EMAIL_NOT_AVAILABLE = 'EMAIL_NOT_AVAILABLE',
  
  //CreateSession
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',

}

export const OperationErrorTypeSchema = z.enum([
  OperationErrorType.REQUEST_FAILED,
  OperationErrorType.VALIDATION_FAILED,
  OperationErrorType.EMAIL_NOT_AVAILABLE,
  OperationErrorType.INVALID_CREDENTIALS,
]);

export class OperationError {

  public readonly type: OperationErrorType;

  public constructor(type: OperationErrorType) {
    this.type = type;
  }

}
