import { Product } from "src/app/shared/models/product";

export const USER_REQUEST_LIST = 'Products request';
export const USER_SUCCESS_LIST = 'Products success request';

export class ProductsRequestAction {
    readonly type = USER_REQUEST_LIST;
}
export class ProductsSuccessAction {
    readonly type = USER_SUCCESS_LIST;
    constructor(public payload?: Product[]) { }
}