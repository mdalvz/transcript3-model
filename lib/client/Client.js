"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var CreateAccount_1 = require("../model/CreateAccount");
var CreateSession_1 = require("../model/CreateSession");
var Operation_1 = require("./Operation");
var Client = /** @class */ (function () {
    function Client(endpoint) {
        this.createAccount = new Operation_1.Operation(endpoint, CreateAccount_1.CreateAccountResource, CreateAccount_1.CreateAccountRequestSchema, CreateAccount_1.CreateAccountResponseSchema);
        this.createSession = new Operation_1.Operation(endpoint, CreateSession_1.CreateSessionResource, CreateSession_1.CreateSessionRequestSchema, CreateSession_1.CreateSessionResponseSchema);
    }
    return Client;
}());
exports.Client = Client;
