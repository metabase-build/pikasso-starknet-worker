/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "transaction";

export interface Request {
  id: string;
  update: TransactionUpdate | undefined;
}

export interface Transaction {
  id: string;
  status: string;
  project: string;
}

export interface TransactionUpdate {
  retry?: number | undefined;
  status?: string | undefined;
  error?: string | undefined;
  paymentDetail?: paymentDetailMess | undefined;
  onChainTxHash?: string | undefined;
}

export interface paymentDetailMess {
  estDeployGas?: string | undefined;
  estMintGas?: string | undefined;
  transactionFee?: string | undefined;
  estWithdrawGas?: string | undefined;
}

export const TRANSACTION_PACKAGE_NAME = "transaction";

function createBaseRequest(): Request {
  return { id: "", update: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.update !== undefined) {
      TransactionUpdate.encode(message.update, writer.uint32(18).fork()).ldelim();
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
          message.update = TransactionUpdate.decode(reader, reader.uint32());
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
      update: isSet(object.update) ? TransactionUpdate.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.update !== undefined &&
      (obj.update = message.update ? TransactionUpdate.toJSON(message.update) : undefined);
    return obj;
  },
};

function createBaseTransaction(): Transaction {
  return { id: "", status: "", project: "" };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.project !== "") {
      writer.uint32(26).string(message.project);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.project = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      status: isSet(object.status) ? String(object.status) : "",
      project: isSet(object.project) ? String(object.project) : "",
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined && (obj.status = message.status);
    message.project !== undefined && (obj.project = message.project);
    return obj;
  },
};

function createBaseTransactionUpdate(): TransactionUpdate {
  return {};
}

export const TransactionUpdate = {
  encode(message: TransactionUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.retry !== undefined) {
      writer.uint32(8).int32(message.retry);
    }
    if (message.status !== undefined) {
      writer.uint32(18).string(message.status);
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    if (message.paymentDetail !== undefined) {
      paymentDetailMess.encode(message.paymentDetail, writer.uint32(34).fork()).ldelim();
    }
    if (message.onChainTxHash !== undefined) {
      writer.uint32(42).string(message.onChainTxHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retry = reader.int32();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        case 4:
          message.paymentDetail = paymentDetailMess.decode(reader, reader.uint32());
          break;
        case 5:
          message.onChainTxHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionUpdate {
    return {
      retry: isSet(object.retry) ? Number(object.retry) : undefined,
      status: isSet(object.status) ? String(object.status) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
      paymentDetail: isSet(object.paymentDetail) ? paymentDetailMess.fromJSON(object.paymentDetail) : undefined,
      onChainTxHash: isSet(object.onChainTxHash) ? String(object.onChainTxHash) : undefined,
    };
  },

  toJSON(message: TransactionUpdate): unknown {
    const obj: any = {};
    message.retry !== undefined && (obj.retry = Math.round(message.retry));
    message.status !== undefined && (obj.status = message.status);
    message.error !== undefined && (obj.error = message.error);
    message.paymentDetail !== undefined &&
      (obj.paymentDetail = message.paymentDetail ? paymentDetailMess.toJSON(message.paymentDetail) : undefined);
    message.onChainTxHash !== undefined && (obj.onChainTxHash = message.onChainTxHash);
    return obj;
  },
};

function createBasepaymentDetailMess(): paymentDetailMess {
  return {};
}

export const paymentDetailMess = {
  encode(message: paymentDetailMess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.estDeployGas !== undefined) {
      writer.uint32(10).string(message.estDeployGas);
    }
    if (message.estMintGas !== undefined) {
      writer.uint32(18).string(message.estMintGas);
    }
    if (message.transactionFee !== undefined) {
      writer.uint32(26).string(message.transactionFee);
    }
    if (message.estWithdrawGas !== undefined) {
      writer.uint32(34).string(message.estWithdrawGas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): paymentDetailMess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasepaymentDetailMess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.estDeployGas = reader.string();
          break;
        case 2:
          message.estMintGas = reader.string();
          break;
        case 3:
          message.transactionFee = reader.string();
          break;
        case 4:
          message.estWithdrawGas = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): paymentDetailMess {
    return {
      estDeployGas: isSet(object.estDeployGas) ? String(object.estDeployGas) : undefined,
      estMintGas: isSet(object.estMintGas) ? String(object.estMintGas) : undefined,
      transactionFee: isSet(object.transactionFee) ? String(object.transactionFee) : undefined,
      estWithdrawGas: isSet(object.estWithdrawGas) ? String(object.estWithdrawGas) : undefined,
    };
  },

  toJSON(message: paymentDetailMess): unknown {
    const obj: any = {};
    message.estDeployGas !== undefined && (obj.estDeployGas = message.estDeployGas);
    message.estMintGas !== undefined && (obj.estMintGas = message.estMintGas);
    message.transactionFee !== undefined && (obj.transactionFee = message.transactionFee);
    message.estWithdrawGas !== undefined && (obj.estWithdrawGas = message.estWithdrawGas);
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
