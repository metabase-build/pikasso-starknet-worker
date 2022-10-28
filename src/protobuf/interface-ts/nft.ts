/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "nft";

export interface Request {
  id: string;
  update: NftUpdate | undefined;
}

export interface Nft {
  id: string;
  metadataId: string;
}

export interface NftUpdate {
  status?: string | undefined;
  metadataId?: string | undefined;
  mintTxHash?: string | undefined;
  nftId?: string | undefined;
  owner?: string | undefined;
  chain?: string | undefined;
}

export const NFT_PACKAGE_NAME = "nft";

function createBaseRequest(): Request {
  return { id: "", update: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.update !== undefined) {
      NftUpdate.encode(message.update, writer.uint32(18).fork()).ldelim();
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
          message.update = NftUpdate.decode(reader, reader.uint32());
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
      update: isSet(object.update) ? NftUpdate.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.update !== undefined && (obj.update = message.update ? NftUpdate.toJSON(message.update) : undefined);
    return obj;
  },
};

function createBaseNft(): Nft {
  return { id: "", metadataId: "" };
}

export const Nft = {
  encode(message: Nft, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.metadataId !== "") {
      writer.uint32(18).string(message.metadataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Nft {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNft();
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

  fromJSON(object: any): Nft {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      metadataId: isSet(object.metadataId) ? String(object.metadataId) : "",
    };
  },

  toJSON(message: Nft): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.metadataId !== undefined && (obj.metadataId = message.metadataId);
    return obj;
  },
};

function createBaseNftUpdate(): NftUpdate {
  return {};
}

export const NftUpdate = {
  encode(message: NftUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      writer.uint32(10).string(message.status);
    }
    if (message.metadataId !== undefined) {
      writer.uint32(18).string(message.metadataId);
    }
    if (message.mintTxHash !== undefined) {
      writer.uint32(26).string(message.mintTxHash);
    }
    if (message.nftId !== undefined) {
      writer.uint32(34).string(message.nftId);
    }
    if (message.owner !== undefined) {
      writer.uint32(42).string(message.owner);
    }
    if (message.chain !== undefined) {
      writer.uint32(50).string(message.chain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NftUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.metadataId = reader.string();
          break;
        case 3:
          message.mintTxHash = reader.string();
          break;
        case 4:
          message.nftId = reader.string();
          break;
        case 5:
          message.owner = reader.string();
          break;
        case 6:
          message.chain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NftUpdate {
    return {
      status: isSet(object.status) ? String(object.status) : undefined,
      metadataId: isSet(object.metadataId) ? String(object.metadataId) : undefined,
      mintTxHash: isSet(object.mintTxHash) ? String(object.mintTxHash) : undefined,
      nftId: isSet(object.nftId) ? String(object.nftId) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : undefined,
    };
  },

  toJSON(message: NftUpdate): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.metadataId !== undefined && (obj.metadataId = message.metadataId);
    message.mintTxHash !== undefined && (obj.mintTxHash = message.mintTxHash);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.chain !== undefined && (obj.chain = message.chain);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
