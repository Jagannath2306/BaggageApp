import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as formProducts from "./products-reducer";
import * as formUser from "./user-reducer";

export interface RootReducerState {
    user: formUser.UserReducerState;
    products: formProducts.ProductsReducerState;
}
export const rootReducer: ActionReducerMap<RootReducerState> = {
    user: formUser.UserReducer,
    products: formProducts.ProductsReducer

};
// Root selecter (will use in components)
export const getUserState = (state: RootReducerState) => state.user;

export const getUserLoading = createSelector(getUserState, (state: formUser.UserReducerState) => state.loading);
export const getUserLoaded = createSelector(getUserState, (state: formUser.UserReducerState) => state.loaded);
export const getUserdata = createSelector(getUserState, (state: formUser.UserReducerState) => state.user);

export const getProductsState = (state: RootReducerState) => state.products;

export const getProductsLoading = createSelector(getProductsState, (state: formProducts.ProductsReducerState) => state.loading);
export const getProductsLoaded = createSelector(getProductsState, (state: formProducts.ProductsReducerState) => state.loaded);
export const getProductsdata = createSelector(getProductsState, (state: formProducts.ProductsReducerState) => state.products);