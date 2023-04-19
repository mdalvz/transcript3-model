"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var CreateAccount_1 = require("../model/CreateAccount");
var CreateSession_1 = require("../model/CreateSession");
var CreateTranscript_1 = require("../model/CreateTranscript");
var DeleteTranscript_1 = require("../model/DeleteTranscript");
var ListTranscripts_1 = require("../model/ListTranscripts");
var UpdateTranscript_1 = require("../model/UpdateTranscript");
var GetTranscript_1 = require("../model/GetTranscript");
var Operation_1 = require("./Operation");
var Client = /** @class */ (function () {
    function Client(endpoint) {
        this.createAccount = new Operation_1.Operation(endpoint, CreateAccount_1.CreateAccountResource, CreateAccount_1.CreateAccountRequestSchema, CreateAccount_1.CreateAccountResponseSchema);
        this.createSession = new Operation_1.Operation(endpoint, CreateSession_1.CreateSessionResource, CreateSession_1.CreateSessionRequestSchema, CreateSession_1.CreateSessionResponseSchema);
        this.createTranscript = new Operation_1.Operation(endpoint, CreateTranscript_1.CreateTranscriptResource, CreateTranscript_1.CreateTranscriptRequestSchema, CreateTranscript_1.CreateTranscriptResponseSchema);
        this.deleteTranscript = new Operation_1.Operation(endpoint, DeleteTranscript_1.DeleteTranscriptResource, DeleteTranscript_1.DeleteTranscriptRequestSchema, DeleteTranscript_1.DeleteTranscriptResponseSchema);
        this.listTranscripts = new Operation_1.Operation(endpoint, ListTranscripts_1.ListTranscriptsResource, ListTranscripts_1.ListTranscriptsRequestSchema, ListTranscripts_1.ListTranscriptsResponseSchema);
        this.updateTranscript = new Operation_1.Operation(endpoint, UpdateTranscript_1.UpdateTranscriptResource, UpdateTranscript_1.UpdateTranscriptRequestSchema, UpdateTranscript_1.UpdateTranscriptResponseSchema);
        this.getTranscript = new Operation_1.Operation(endpoint, GetTranscript_1.GetTranscriptResource, GetTranscript_1.GetTranscriptRequestSchema, GetTranscript_1.GetTranscriptResponseSchema);
    }
    return Client;
}());
exports.Client = Client;
