
export class ValidationError extends Error {

  constructor(message: string) {
    super(message);
  }

}

export class ResponseError extends Error {

  public readonly code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }

}
