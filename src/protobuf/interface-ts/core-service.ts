/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Collection, Request as Request4 } from "./collection";
import { Nft, Request as Request2 } from "./nft";
import { Order, Request as Request3 } from "./order";
import { Project, Request as Request1 } from "./project";
import { Request, Transaction } from "./transaction";

export const protobufPackage = "CoreService";

export interface PingRequest {
  input: string;
}

export interface PingResponse {
  output: string;
}

export const CORE_SERVICE_PACKAGE_NAME = "CoreService";

function createBasePingRequest(): PingRequest {
  return { input: "" };
}

export const PingRequest = {
  encode(message: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input !== "") {
      writer.uint32(10).string(message.input);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.input = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingRequest {
    return { input: isSet(object.input) ? String(object.input) : "" };
  },

  toJSON(message: PingRequest): unknown {
    const obj: any = {};
    message.input !== undefined && (obj.input = message.input);
    return obj;
  },
};

function createBasePingResponse(): PingResponse {
  return { output: "" };
}

export const PingResponse = {
  encode(message: PingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.output !== "") {
      writer.uint32(10).string(message.output);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingResponse {
    return { output: isSet(object.output) ? String(object.output) : "" };
  },

  toJSON(message: PingResponse): unknown {
    const obj: any = {};
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
};

export interface CoreServiceClient {
  updateTransactionById(request: Request, ...rest: any): Observable<Transaction>;

  updateProjectById(request: Request1, ...rest: any): Observable<Project>;

  updateNftById(request: Request2, ...rest: any): Observable<Nft>;

  updateNftByTransactionId(request: Request2, ...rest: any): Observable<Nft>;

  updateBuyOrderById(request: Request3, ...rest: any): Observable<Order>;

  updateCollectionById(request: Request4, ...rest: any): Observable<Collection>;

  ping(request: PingRequest, ...rest: any): Observable<PingResponse>;
}

export interface CoreServiceController {
  updateTransactionById(request: Request, ...rest: any): Promise<Transaction> | Observable<Transaction> | Transaction;

  updateProjectById(request: Request1, ...rest: any): Promise<Project> | Observable<Project> | Project;

  updateNftById(request: Request2, ...rest: any): Promise<Nft> | Observable<Nft> | Nft;

  updateNftByTransactionId(request: Request2, ...rest: any): Promise<Nft> | Observable<Nft> | Nft;

  updateBuyOrderById(request: Request3, ...rest: any): Promise<Order> | Observable<Order> | Order;

  updateCollectionById(request: Request4, ...rest: any): Promise<Collection> | Observable<Collection> | Collection;

  ping(request: PingRequest, ...rest: any): Promise<PingResponse> | Observable<PingResponse> | PingResponse;
}

export function CoreServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "updateTransactionById",
      "updateProjectById",
      "updateNftById",
      "updateNftByTransactionId",
      "updateBuyOrderById",
      "updateCollectionById",
      "ping",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CoreService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CoreService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CORE_SERVICE_NAME = "CoreService";

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
