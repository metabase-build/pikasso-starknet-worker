/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "WalletService";

export interface BalanceInput {
  userId: string;
  walletAddress: string;
}

export interface WalletInput {
  userId: string;
  currency: string;
}

export interface Wallet {
  walletAddress: string;
  balance: number;
  currency: string;
}

export interface DepositInput {
  walletAddress: string;
  amount: number;
  currency: string;
  details: string;
  userId: string;
}

export interface DepositResponse {
  status: number;
  error: string[];
}

export interface TransferInput {
  fromAddress: string;
  toAddress: string;
  amount: number;
  currency: string;
  details: string;
  userId: string;
}

export interface TransferResponse {
  status: number;
  error: string[];
}

export interface Balance {
  balance: number;
}

export const WALLET_SERVICE_PACKAGE_NAME = "WalletService";

function createBaseBalanceInput(): BalanceInput {
  return { userId: "", walletAddress: "" };
}

export const BalanceInput = {
  encode(message: BalanceInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BalanceInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalanceInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.walletAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BalanceInput {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      walletAddress: isSet(object.walletAddress) ? String(object.walletAddress) : "",
    };
  },

  toJSON(message: BalanceInput): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    return obj;
  },
};

function createBaseWalletInput(): WalletInput {
  return { userId: "", currency: "" };
}

export const WalletInput = {
  encode(message: WalletInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.currency !== "") {
      writer.uint32(18).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WalletInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWalletInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WalletInput {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: WalletInput): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBaseWallet(): Wallet {
  return { walletAddress: "", balance: 0, currency: "" };
}

export const Wallet = {
  encode(message: Wallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    if (message.balance !== 0) {
      writer.uint32(16).int32(message.balance);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Wallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.balance = reader.int32();
          break;
        case 3:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Wallet {
    return {
      walletAddress: isSet(object.walletAddress) ? String(object.walletAddress) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: Wallet): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBaseDepositInput(): DepositInput {
  return { walletAddress: "", amount: 0, currency: "", details: "", userId: "" };
}

export const DepositInput = {
  encode(message: DepositInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.walletAddress !== "") {
      writer.uint32(10).string(message.walletAddress);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    if (message.details !== "") {
      writer.uint32(34).string(message.details);
    }
    if (message.userId !== "") {
      writer.uint32(42).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.walletAddress = reader.string();
          break;
        case 2:
          message.amount = reader.int32();
          break;
        case 3:
          message.currency = reader.string();
          break;
        case 4:
          message.details = reader.string();
          break;
        case 5:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositInput {
    return {
      walletAddress: isSet(object.walletAddress) ? String(object.walletAddress) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      details: isSet(object.details) ? String(object.details) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: DepositInput): unknown {
    const obj: any = {};
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.currency !== undefined && (obj.currency = message.currency);
    message.details !== undefined && (obj.details = message.details);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },
};

function createBaseDepositResponse(): DepositResponse {
  return { status: 0, error: [] };
}

export const DepositResponse = {
  encode(message: DepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.error.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: DepositResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    if (message.error) {
      obj.error = message.error.map((e) => e);
    } else {
      obj.error = [];
    }
    return obj;
  },
};

function createBaseTransferInput(): TransferInput {
  return { fromAddress: "", toAddress: "", amount: 0, currency: "", details: "", userId: "" };
}

export const TransferInput = {
  encode(message: TransferInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(34).string(message.currency);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    if (message.userId !== "") {
      writer.uint32(50).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount = reader.int32();
          break;
        case 4:
          message.currency = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        case 6:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferInput {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      details: isSet(object.details) ? String(object.details) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: TransferInput): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.currency !== undefined && (obj.currency = message.currency);
    message.details !== undefined && (obj.details = message.details);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },
};

function createBaseTransferResponse(): TransferResponse {
  return { status: 0, error: [] };
}

export const TransferResponse = {
  encode(message: TransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.error.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TransferResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    if (message.error) {
      obj.error = message.error.map((e) => e);
    } else {
      obj.error = [];
    }
    return obj;
  },
};

function createBaseBalance(): Balance {
  return { balance: 0 };
}

export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== 0) {
      writer.uint32(8).int32(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return { balance: isSet(object.balance) ? Number(object.balance) : 0 };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    return obj;
  },
};

export interface WalletServiceClient {
  createWallet(request: WalletInput, ...rest: any): Observable<Wallet>;

  getBalance(request: BalanceInput, ...rest: any): Observable<Balance>;

  depositWallet(request: DepositInput, ...rest: any): Observable<DepositResponse>;

  transferFund(request: TransferInput, ...rest: any): Observable<TransferResponse>;
}

export interface WalletServiceController {
  createWallet(request: WalletInput, ...rest: any): Promise<Wallet> | Observable<Wallet> | Wallet;

  getBalance(request: BalanceInput, ...rest: any): Promise<Balance> | Observable<Balance> | Balance;

  depositWallet(
    request: DepositInput,
    ...rest: any
  ): Promise<DepositResponse> | Observable<DepositResponse> | DepositResponse;

  transferFund(
    request: TransferInput,
    ...rest: any
  ): Promise<TransferResponse> | Observable<TransferResponse> | TransferResponse;
}

export function WalletServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createWallet", "getBalance", "depositWallet", "transferFund"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("WalletService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("WalletService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const WALLET_SERVICE_NAME = "WalletService";

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
