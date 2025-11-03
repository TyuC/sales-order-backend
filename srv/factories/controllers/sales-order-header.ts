import { SalesOrderHeaderControllerImpl } from "srv/controllers/customer/sales-order-header/implementations";
import { SalesOrderHeaderController } from "srv/controllers/customer/sales-order-header/protocols";
import { salesOrderHeaderService } from "../services/sales-order-header";

export const makeSalesOrderHeaderController = (): SalesOrderHeaderController => {
    return new SalesOrderHeaderControllerImpl(salesOrderHeaderService);
}

export const salesOrderHeaderController = makeSalesOrderHeaderController();