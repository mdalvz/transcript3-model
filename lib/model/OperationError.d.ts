import { z } from 'zod';
export declare enum OperationErrorType {
    REQUEST_FAILED = "REQUEST_FAILED",
    VALIDATION_FAILED = "VALIDATION_FAILED",
    EMAIL_NOT_AVAILABLE = "EMAIL_NOT_AVAILABLE",
    INVALID_CREDENTIALS = "INVALID_CREDENTIALS"
}
export declare const OperationErrorTypeSchema: z.ZodEnum<[OperationErrorType.REQUEST_FAILED, OperationErrorType.VALIDATION_FAILED, OperationErrorType.EMAIL_NOT_AVAILABLE, OperationErrorType.INVALID_CREDENTIALS]>;
export declare class OperationError {
    readonly type: OperationErrorType;
    constructor(type: OperationErrorType);
}
