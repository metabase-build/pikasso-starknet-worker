/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "collection";

export interface Request {
  id: string;
  update: CollectionUpdate | undefined;
}

export interface Collection {
  id: string;
  owner?: string | undefined;
  project?: string | undefined;
  masterAccount?: masterAccountMess | undefined;
  status?: string | undefined;
  nftContractAddress?: string | undefined;
  chain?: string | undefined;
  transactionFee?: string | undefined;
}

export interface CollectionUpdate {
  id?: string | undefined;
  owner?: string | undefined;
  project?: string | undefined;
  masterAccount?: masterAccountMess | undefined;
  status?: string | undefined;
  nftContractAddress?: string | undefined;
  chain?: string | undefined;
  transactionFee?: string | undefined;
}

export interface masterAccountMess {
  publicKey?: string | undefined;
  privateKey?: string | undefined;
}

export const COLLECTION_PACKAGE_NAME = "collection";

function createBaseRequest(): Request {
  return { id: "", update: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.update !== undefined) {
      CollectionUpdate.encode(message.update, writer.uint32(18).fork()).ldelim();
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
          message.id = reader.string();
          break;
        case 2:
          message.update = CollectionUpdate.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? String(object.id) : "",
      update: isSet(object.update) ? CollectionUpdate.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.update !== undefined && (obj.update = message.update ? CollectionUpdate.toJSON(message.update) : undefined);
    return obj;
  },
};

function createBaseCollection(): Collection {
  return { id: "" };
}

export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== undefined) {
      writer.uint32(18).string(message.owner);
    }
    if (message.project !== undefined) {
      writer.uint32(26).string(message.project);
    }
    if (message.masterAccount !== undefined) {
      masterAccountMess.encode(message.masterAccount, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(42).string(message.status);
    }
    if (message.nftContractAddress !== undefined) {
      writer.uint32(50).string(message.nftContractAddress);
    }
    if (message.chain !== undefined) {
      writer.uint32(58).string(message.chain);
    }
    if (message.transactionFee !== undefined) {
      writer.uint32(66).string(message.transactionFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.project = reader.string();
          break;
        case 4:
          message.masterAccount = masterAccountMess.decode(reader, reader.uint32());
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.nftContractAddress = reader.string();
          break;
        case 7:
          message.chain = reader.string();
          break;
        case 8:
          message.transactionFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : undefined,
      project: isSet(object.project) ? String(object.project) : undefined,
      masterAccount: isSet(object.masterAccount) ? masterAccountMess.fromJSON(object.masterAccount) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      nftContractAddress: isSet(object.nftContractAddress) ? String(object.nftContractAddress) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : undefined,
      transactionFee: isSet(object.transactionFee) ? String(object.transactionFee) : undefined,
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.project !== undefined && (obj.project = message.project);
    message.masterAccount !== undefined &&
      (obj.masterAccount = message.masterAccount ? masterAccountMess.toJSON(message.masterAccount) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.nftContractAddress !== undefined && (obj.nftContractAddress = message.nftContractAddress);
    message.chain !== undefined && (obj.chain = message.chain);
    message.transactionFee !== undefined && (obj.transactionFee = message.transactionFee);
    return obj;
  },
};

function createBaseCollectionUpdate(): CollectionUpdate {
  return {};
}

export const CollectionUpdate = {
  encode(message: CollectionUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== undefined) {
      writer.uint32(18).string(message.owner);
    }
    if (message.project !== undefined) {
      writer.uint32(26).string(message.project);
    }
    if (message.masterAccount !== undefined) {
      masterAccountMess.encode(message.masterAccount, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(42).string(message.status);
    }
    if (message.nftContractAddress !== undefined) {
      writer.uint32(50).string(message.nftContractAddress);
    }
    if (message.chain !== undefined) {
      writer.uint32(58).string(message.chain);
    }
    if (message.transactionFee !== undefined) {
      writer.uint32(66).string(message.transactionFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.project = reader.string();
          break;
        case 4:
          message.masterAccount = masterAccountMess.decode(reader, reader.uint32());
          break;
        case 5:
          message.status = reader.string();
          break;
        case 6:
          message.nftContractAddress = reader.string();
          break;
        case 7:
          message.chain = reader.string();
          break;
        case 8:
          message.transactionFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionUpdate {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : undefined,
      project: isSet(object.project) ? String(object.project) : undefined,
      masterAccount: isSet(object.masterAccount) ? masterAccountMess.fromJSON(object.masterAccount) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      nftContractAddress: isSet(object.nftContractAddress) ? String(object.nftContractAddress) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : undefined,
      transactionFee: isSet(object.transactionFee) ? String(object.transactionFee) : undefined,
    };
  },

  toJSON(message: CollectionUpdate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.project !== undefined && (obj.project = message.project);
    message.masterAccount !== undefined &&
      (obj.masterAccount = message.masterAccount ? masterAccountMess.toJSON(message.masterAccount) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.nftContractAddress !== undefined && (obj.nftContractAddress = message.nftContractAddress);
    message.chain !== undefined && (obj.chain = message.chain);
    message.transactionFee !== undefined && (obj.transactionFee = message.transactionFee);
    return obj;
  },
};

function createBasemasterAccountMess(): masterAccountMess {
  return {};
}

export const masterAccountMess = {
  encode(message: masterAccountMess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      writer.uint32(10).string(message.publicKey);
    }
    if (message.privateKey !== undefined) {
      writer.uint32(18).string(message.privateKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): masterAccountMess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasemasterAccountMess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = reader.string();
          break;
        case 2:
          message.privateKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): masterAccountMess {
    return {
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : undefined,
      privateKey: isSet(object.privateKey) ? String(object.privateKey) : undefined,
    };
  },

  toJSON(message: masterAccountMess): unknown {
    const obj: any = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.privateKey !== undefined && (obj.privateKey = message.privateKey);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
