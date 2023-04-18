"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationError = exports.OperationErrorTypeSchema = exports.OperationErrorType = void 0;
var zod_1 = require("zod");
var OperationErrorType;
(function (OperationErrorType) {
    //Common
    OperationErrorType["REQUEST_FAILED"] = "REQUEST_FAILED";
    OperationErrorType["VALIDATION_FAILED"] = "VALIDATION_FAILED";
    //CreateAccount
    OperationErrorType["EMAIL_NOT_AVAILABLE"] = "EMAIL_NOT_AVAILABLE";
    //CreateSession
    OperationErrorType["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
})(OperationErrorType = exports.OperationErrorType || (exports.OperationErrorType = {}));
exports.OperationErrorTypeSchema = zod_1.z.enum([
    OperationErrorType.REQUEST_FAILED,
    OperationErrorType.VALIDATION_FAILED,
    OperationErrorType.EMAIL_NOT_AVAILABLE,
    OperationErrorType.INVALID_CREDENTIALS,
]);
var OperationError = /** @class */ (function () {
    function OperationError(type) {
        this.type = type;
    }
    return OperationError;
}());
exports.OperationError = OperationError;
