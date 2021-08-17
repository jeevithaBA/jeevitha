import * as types from "./actionTypes";

export function setFirstTimeLoggedIn(isFirstTime) {
    return {
        type: types.LOGIN_FIRST_TIME,
        isFirstTime
    };
}   