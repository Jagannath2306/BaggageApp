import { InitialState } from "@ngrx/store/src/models";
import { Product } from "src/app/shared/models/product";
import { Action } from "../actions";
import { USER_REQUEST_LIST, USER_SUCCESS_LIST } from "../actions/products-action";

export interface ProductsReducerState {
    loading: boolean;
    loaded: boolean;
    products: Product[];
}
const initialState: ProductsReducerState = {
    loading: false,
    loaded: false,
    products: []
}
export function ProductsReducer(state = initialState, action: Action): ProductsReducerState {
    switch (action.type) {
        case USER_REQUEST_LIST: {
            return { ...state, loading: true };
        }
        case USER_SUCCESS_LIST: {
            // const updatedProducts = action.payload.data;
            const updatedProducts = action.payload;
            return { ...state, loading: false, loaded: true, products: updatedProducts };
        }
        default: {
            return state;
        }
    }
}

// Selecter
export const getLoading = (state: ProductsReducerState) => {
    state.loading;
}
export const getLoaded = (state: ProductsReducerState) => {
    state.loaded;
}
export const getProducts = (state: ProductsReducerState) => {
    state.products;
}