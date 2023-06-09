"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
var Error_1 = require("./Error");
var Operation = /** @class */ (function () {
    function Operation(endpoint, resource, requestSchema, responseSchema) {
        this.endpoint = endpoint;
        this.resource = resource;
        this.requestSchema = requestSchema;
        this.responseSchema = responseSchema;
    }
    Operation.prototype.invoke = function (requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseBody, _a, _b, _1, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this.requestSchema.safeParse(requestBody).success) {
                            throw new Error_1.ValidationError('Invalid request body');
                        }
                        return [4 /*yield*/, fetch(this.endpoint + this.resource, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(requestBody),
                            })];
                    case 1:
                        response = _e.sent();
                        if (!response.ok) return [3 /*break*/, 6];
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
                        _b = (_a = this.responseSchema).parse;
                        return [4 /*yield*/, response.json()];
                    case 3:
                        responseBody = _b.apply(_a, [_e.sent()]);
                        return [2 /*return*/, responseBody];
                    case 4:
                        _1 = _e.sent();
                        throw new Error_1.ValidationError('Invalid response body');
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        _c = Error_1.ResponseError.bind;
                        _d = [void 0, response.status];
                        return [4 /*yield*/, response.text()];
                    case 7: throw new (_c.apply(Error_1.ResponseError, _d.concat([_e.sent()])))();
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return Operation;
}());
exports.Operation = Operation;
