/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "order";

export interface Request {
  userId: string;
  walletAddress: string;
  assetAmount: string;
  buyerSignature: string;
  contractAddress: string;
  type: string;
  askNftAmount: string;
  status: string;
}

export interface Order {
  id: string;
  metadataId: string;
}

export interface OrderUpdate {
  id?: string | undefined;
  metadataId?: string | undefined;
}

export const ORDER_PACKAGE_NAME = "order";

function createBaseRequest(): Request {
  return {
    userId: "",
    walletAddress: "",
    assetAmount: "",
    buyerSignature: "",
    contractAddress: "",
    type: "",
    askNftAmount: "",
    status: "",
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.walletAddress !== "") {
      writer.uint32(18).string(message.walletAddress);
    }
    if (message.assetAmount !== "") {
      writer.uint32(26).string(message.assetAmount);
    }
    if (message.buyerSignature !== "") {
      writer.uint32(34).string(message.buyerSignature);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.askNftAmount !== "") {
      writer.uint32(58).string(message.askNftAmount);
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.walletAddress = reader.string();
          break;
        case 3:
          message.assetAmount = reader.string();
          break;
        case 4:
          message.buyerSignature = reader.string();
          break;
        case 5:
          message.contractAddress = reader.string();
          break;
        case 6:
          message.type = reader.string();
          break;
        case 7:
          message.askNftAmount = reader.string();
          break;
        case 8:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      walletAddress: isSet(object.walletAddress) ? String(object.walletAddress) : "",
      assetAmount: isSet(object.assetAmount) ? String(object.assetAmount) : "",
      buyerSignature: isSet(object.buyerSignature) ? String(object.buyerSignature) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      type: isSet(object.type) ? String(object.type) : "",
      askNftAmount: isSet(object.askNftAmount) ? String(object.askNftAmount) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.walletAddress !== undefined && (obj.walletAddress = message.walletAddress);
    message.assetAmount !== undefined && (obj.assetAmount = message.assetAmount);
    message.buyerSignature !== undefined && (obj.buyerSignature = message.buyerSignature);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.type !== undefined && (obj.type = message.type);
    message.askNftAmount !== undefined && (obj.askNftAmount = message.askNftAmount);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
};

function createBaseOrder(): Order {
  return { id: "", metadataId: "" };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.metadataId !== "") {
      writer.uint32(18).string(message.metadataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.metadataId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      metadataId: isSet(object.metadataId) ? String(object.metadataId) : "",
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.metadataId !== undefined && (obj.metadataId = message.metadataId);
    return obj;
  },
};

function createBaseOrderUpdate(): OrderUpdate {
  return {};
}

export const OrderUpdate = {
  encode(message: OrderUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.metadataId !== undefined) {
      writer.uint32(18).string(message.metadataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.metadataId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderUpdate {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      metadataId: isSet(object.metadataId) ? String(object.metadataId) : undefined,
    };
  },

  toJSON(message: OrderUpdate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.metadataId !== undefined && (obj.metadataId = message.metadataId);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
