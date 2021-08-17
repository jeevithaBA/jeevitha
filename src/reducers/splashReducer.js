/** 
*  This file consists of a splash handler which stores splash details.
* @version 1.0
* @Author [Jeevitha (jeevitha.ba@impelsys.com)]
* @Date 11-12-2019
* @modified [swamy (marulasiddaswamy.bp@impelsys.com)]
* @LastModified 21-1-2020
*/
import createReducer from "@lib/createReducer";
import * as actionTypes from "@actions/actionTypes";

const initialState = {
    isFirstTimeLoggedIn: true
};

export const splashReducer = createReducer(initialState, {

    [actionTypes.LOGIN_FIRST_TIME](state, action) {
        return {
            ...state,
            isFirstTimeLoggedIn: false
        };
    }

});