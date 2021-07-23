import { User } from "src/app/shared/models/User";

export const USER_REQUEST = 'User request';
export const USER_SUCCESS = 'User success request';

export class UserRequestAction {
    readonly type = USER_REQUEST;
}
export class UserSuccessAction {
    readonly type = USER_SUCCESS;
    constructor(public payload?: {}) { }
}