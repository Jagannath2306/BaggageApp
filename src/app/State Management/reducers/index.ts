import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as formUser from "./user-reducer";

export interface RootReducerState {
    user: formUser.UserReducerState;
}
export const rootReducer: ActionReducerMap<RootReducerState> = {
    user: formUser.UserReducer

};
// Root selecter (will use in components)
export const getUserState = (state: RootReducerState) => state.user;

export const getUserLoading = createSelector(getUserState, (state: formUser.UserReducerState) => state.loading);
export const getUserLoaded = createSelector(getUserState, (state: formUser.UserReducerState) => state.loaded);
export const getUserdata = createSelector(getUserState, (state: formUser.UserReducerState) => state.user);