/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "project";

export interface Request {
  id: string;
  update: ProjectUpdate | undefined;
}

export interface Project {
  id: string;
  name: string;
  description?: string | undefined;
  chain: string;
  masterAddress?: string | undefined;
  masterPrivateKey?: string | undefined;
  contract721Address?: string | undefined;
  l1Mnemonic: string;
  image?: string | undefined;
  blockchain?: string | undefined;
  status?: string | undefined;
  apiSecret?: string | undefined;
  contract1155Address?: string | undefined;
  contractMarketplaceAddress?: string | undefined;
  webhook?: string | undefined;
}

export interface ProjectUpdate {
  id?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  chain?: string | undefined;
  masterAddress?: string | undefined;
  masterPrivateKey?: string | undefined;
  contract721Address?: string | undefined;
  l1Mnemonic?: string | undefined;
  image?: string | undefined;
  blockchain?: string | undefined;
  status?: string | undefined;
  apiSecret?: string | undefined;
  contract1155Address?: string | undefined;
  contractMarketplaceAddress?: string | undefined;
  webhook?: string | undefined;
}

export const PROJECT_PACKAGE_NAME = "project";

function createBaseRequest(): Request {
  return { id: "", update: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.update !== undefined) {
      ProjectUpdate.encode(message.update, writer.uint32(18).fork()).ldelim();
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
          message.update = ProjectUpdate.decode(reader, reader.uint32());
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
      update: isSet(object.update) ? ProjectUpdate.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.update !== undefined && (obj.update = message.update ? ProjectUpdate.toJSON(message.update) : undefined);
    return obj;
  },
};

function createBaseProject(): Project {
  return { id: "", name: "", chain: "", l1Mnemonic: "" };
}

export const Project = {
  encode(message: Project, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.chain !== "") {
      writer.uint32(34).string(message.chain);
    }
    if (message.masterAddress !== undefined) {
      writer.uint32(42).string(message.masterAddress);
    }
    if (message.masterPrivateKey !== undefined) {
      writer.uint32(50).string(message.masterPrivateKey);
    }
    if (message.contract721Address !== undefined) {
      writer.uint32(58).string(message.contract721Address);
    }
    if (message.l1Mnemonic !== "") {
      writer.uint32(66).string(message.l1Mnemonic);
    }
    if (message.image !== undefined) {
      writer.uint32(74).string(message.image);
    }
    if (message.blockchain !== undefined) {
      writer.uint32(82).string(message.blockchain);
    }
    if (message.status !== undefined) {
      writer.uint32(90).string(message.status);
    }
    if (message.apiSecret !== undefined) {
      writer.uint32(98).string(message.apiSecret);
    }
    if (message.contract1155Address !== undefined) {
      writer.uint32(106).string(message.contract1155Address);
    }
    if (message.contractMarketplaceAddress !== undefined) {
      writer.uint32(114).string(message.contractMarketplaceAddress);
    }
    if (message.webhook !== undefined) {
      writer.uint32(122).string(message.webhook);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Project {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.chain = reader.string();
          break;
        case 5:
          message.masterAddress = reader.string();
          break;
        case 6:
          message.masterPrivateKey = reader.string();
          break;
        case 7:
          message.contract721Address = reader.string();
          break;
        case 8:
          message.l1Mnemonic = reader.string();
          break;
        case 9:
          message.image = reader.string();
          break;
        case 10:
          message.blockchain = reader.string();
          break;
        case 11:
          message.status = reader.string();
          break;
        case 12:
          message.apiSecret = reader.string();
          break;
        case 13:
          message.contract1155Address = reader.string();
          break;
        case 14:
          message.contractMarketplaceAddress = reader.string();
          break;
        case 15:
          message.webhook = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Project {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : "",
      masterAddress: isSet(object.masterAddress) ? String(object.masterAddress) : undefined,
      masterPrivateKey: isSet(object.masterPrivateKey) ? String(object.masterPrivateKey) : undefined,
      contract721Address: isSet(object.contract721Address) ? String(object.contract721Address) : undefined,
      l1Mnemonic: isSet(object.l1Mnemonic) ? String(object.l1Mnemonic) : "",
      image: isSet(object.image) ? String(object.image) : undefined,
      blockchain: isSet(object.blockchain) ? String(object.blockchain) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      apiSecret: isSet(object.apiSecret) ? String(object.apiSecret) : undefined,
      contract1155Address: isSet(object.contract1155Address) ? String(object.contract1155Address) : undefined,
      contractMarketplaceAddress: isSet(object.contractMarketplaceAddress)
        ? String(object.contractMarketplaceAddress)
        : undefined,
      webhook: isSet(object.webhook) ? String(object.webhook) : undefined,
    };
  },

  toJSON(message: Project): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.chain !== undefined && (obj.chain = message.chain);
    message.masterAddress !== undefined && (obj.masterAddress = message.masterAddress);
    message.masterPrivateKey !== undefined && (obj.masterPrivateKey = message.masterPrivateKey);
    message.contract721Address !== undefined && (obj.contract721Address = message.contract721Address);
    message.l1Mnemonic !== undefined && (obj.l1Mnemonic = message.l1Mnemonic);
    message.image !== undefined && (obj.image = message.image);
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.status !== undefined && (obj.status = message.status);
    message.apiSecret !== undefined && (obj.apiSecret = message.apiSecret);
    message.contract1155Address !== undefined && (obj.contract1155Address = message.contract1155Address);
    message.contractMarketplaceAddress !== undefined &&
      (obj.contractMarketplaceAddress = message.contractMarketplaceAddress);
    message.webhook !== undefined && (obj.webhook = message.webhook);
    return obj;
  },
};

function createBaseProjectUpdate(): ProjectUpdate {
  return {};
}

export const ProjectUpdate = {
  encode(message: ProjectUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    if (message.chain !== undefined) {
      writer.uint32(34).string(message.chain);
    }
    if (message.masterAddress !== undefined) {
      writer.uint32(42).string(message.masterAddress);
    }
    if (message.masterPrivateKey !== undefined) {
      writer.uint32(50).string(message.masterPrivateKey);
    }
    if (message.contract721Address !== undefined) {
      writer.uint32(58).string(message.contract721Address);
    }
    if (message.l1Mnemonic !== undefined) {
      writer.uint32(66).string(message.l1Mnemonic);
    }
    if (message.image !== undefined) {
      writer.uint32(74).string(message.image);
    }
    if (message.blockchain !== undefined) {
      writer.uint32(82).string(message.blockchain);
    }
    if (message.status !== undefined) {
      writer.uint32(90).string(message.status);
    }
    if (message.apiSecret !== undefined) {
      writer.uint32(98).string(message.apiSecret);
    }
    if (message.contract1155Address !== undefined) {
      writer.uint32(106).string(message.contract1155Address);
    }
    if (message.contractMarketplaceAddress !== undefined) {
      writer.uint32(114).string(message.contractMarketplaceAddress);
    }
    if (message.webhook !== undefined) {
      writer.uint32(122).string(message.webhook);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProjectUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.chain = reader.string();
          break;
        case 5:
          message.masterAddress = reader.string();
          break;
        case 6:
          message.masterPrivateKey = reader.string();
          break;
        case 7:
          message.contract721Address = reader.string();
          break;
        case 8:
          message.l1Mnemonic = reader.string();
          break;
        case 9:
          message.image = reader.string();
          break;
        case 10:
          message.blockchain = reader.string();
          break;
        case 11:
          message.status = reader.string();
          break;
        case 12:
          message.apiSecret = reader.string();
          break;
        case 13:
          message.contract1155Address = reader.string();
          break;
        case 14:
          message.contractMarketplaceAddress = reader.string();
          break;
        case 15:
          message.webhook = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProjectUpdate {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      chain: isSet(object.chain) ? String(object.chain) : undefined,
      masterAddress: isSet(object.masterAddress) ? String(object.masterAddress) : undefined,
      masterPrivateKey: isSet(object.masterPrivateKey) ? String(object.masterPrivateKey) : undefined,
      contract721Address: isSet(object.contract721Address) ? String(object.contract721Address) : undefined,
      l1Mnemonic: isSet(object.l1Mnemonic) ? String(object.l1Mnemonic) : undefined,
      image: isSet(object.image) ? String(object.image) : undefined,
      blockchain: isSet(object.blockchain) ? String(object.blockchain) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      apiSecret: isSet(object.apiSecret) ? String(object.apiSecret) : undefined,
      contract1155Address: isSet(object.contract1155Address) ? String(object.contract1155Address) : undefined,
      contractMarketplaceAddress: isSet(object.contractMarketplaceAddress)
        ? String(object.contractMarketplaceAddress)
        : undefined,
      webhook: isSet(object.webhook) ? String(object.webhook) : undefined,
    };
  },

  toJSON(message: ProjectUpdate): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.chain !== undefined && (obj.chain = message.chain);
    message.masterAddress !== undefined && (obj.masterAddress = message.masterAddress);
    message.masterPrivateKey !== undefined && (obj.masterPrivateKey = message.masterPrivateKey);
    message.contract721Address !== undefined && (obj.contract721Address = message.contract721Address);
    message.l1Mnemonic !== undefined && (obj.l1Mnemonic = message.l1Mnemonic);
    message.image !== undefined && (obj.image = message.image);
    message.blockchain !== undefined && (obj.blockchain = message.blockchain);
    message.status !== undefined && (obj.status = message.status);
    message.apiSecret !== undefined && (obj.apiSecret = message.apiSecret);
    message.contract1155Address !== undefined && (obj.contract1155Address = message.contract1155Address);
    message.contractMarketplaceAddress !== undefined &&
      (obj.contractMarketplaceAddress = message.contractMarketplaceAddress);
    message.webhook !== undefined && (obj.webhook = message.webhook);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
