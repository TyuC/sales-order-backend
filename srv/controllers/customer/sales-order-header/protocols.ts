import { SalesOrderHeader } from "@models/sales";

export type CreationPayloadValidationResult = {
    hasError: boolean;
    totalAmount?: number;
    error?: Error;
};

export interface SalesOrderHeaderController {
    beforCreate(params: SalesOrderHeader): Promise<CreationPayloadValidationResult>;
}