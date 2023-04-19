export declare class ValidationError extends Error {
    constructor(message: string);
}
export declare class ResponseError extends Error {
    readonly code: number;
    constructor(code: number, message: string);
}
