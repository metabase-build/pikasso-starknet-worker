/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";

export const protobufPackage = "user";

/** Register */
export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  error: string[];
}

/** Login */
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
}

/** Validate */
export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  userId: number;
}

export const USER_PACKAGE_NAME = "user";

function createBaseRegisterRequest(): RegisterRequest {
  return { email: "", password: "" };
}

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },
};

function createBaseRegisterResponse(): RegisterResponse {
  return { status: 0, error: [] };
}

export const RegisterResponse = {
  encode(message: RegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterResponse();
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

  fromJSON(object: any): RegisterResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: RegisterResponse): unknown {
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

function createBaseLoginRequest(): LoginRequest {
  return { email: "", password: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.password = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { status: 0, error: [], token: "" };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.error.push(reader.string());
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    if (message.error) {
      obj.error = message.error.map((e) => e);
    } else {
      obj.error = [];
    }
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

function createBaseValidateRequest(): ValidateRequest {
  return { token: "" };
}

export const ValidateRequest = {
  encode(message: ValidateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateRequest {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: ValidateRequest): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },
};

function createBaseValidateResponse(): ValidateResponse {
  return { status: 0, error: [], userId: 0 };
}

export const ValidateResponse = {
  encode(message: ValidateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.error) {
      writer.uint32(18).string(v!);
    }
    if (message.userId !== 0) {
      writer.uint32(24).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.error.push(reader.string());
          break;
        case 3:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidateResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : 0,
      error: Array.isArray(object?.error) ? object.error.map((e: any) => String(e)) : [],
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: ValidateResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = Math.round(message.status));
    if (message.error) {
      obj.error = message.error.map((e) => e);
    } else {
      obj.error = [];
    }
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },
};

export interface UserServiceClient {
  register(request: RegisterRequest, ...rest: any): Observable<RegisterResponse>;

  login(request: LoginRequest, ...rest: any): Observable<LoginResponse>;

  validate(request: ValidateRequest, ...rest: any): Observable<ValidateResponse>;
}

export interface UserServiceController {
  register(
    request: RegisterRequest,
    ...rest: any
  ): Promise<RegisterResponse> | Observable<RegisterResponse> | RegisterResponse;

  login(request: LoginRequest, ...rest: any): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;

  validate(
    request: ValidateRequest,
    ...rest: any
  ): Promise<ValidateResponse> | Observable<ValidateResponse> | ValidateResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["register", "login", "validate"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
