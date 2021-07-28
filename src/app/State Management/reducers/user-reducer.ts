import { InitialState } from "@ngrx/store/src/models";
import { User } from "src/app/shared/models/User";
import { Action } from "../actions";
import { USER_REQUEST, USER_SUCCESS } from "../actions/user-action";

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    user: {};
}
const initialState: UserReducerState = {
    loading: false,
    loaded: false,
    user: {}
}
export function UserReducer(state = initialState, action: Action): UserReducerState {
    switch (action.type) {
        case USER_REQUEST: {
            return { ...state, loading: true };
        }
        case USER_SUCCESS: {
            const updatedUser = action.payload;
            //const updatedUser = state.user;
            return { ...state, loading: false, loaded: true, user: updatedUser };
        }
        default: {
            return state;
        }
    }
}

// Selecter
export const getLoading = (state: UserReducerState) => {
    state.loading;
}
export const getLoaded = (state: UserReducerState) => {
    state.loaded;
}
export const getUser = (state: UserReducerState) => {
    state.user;
}