/**
 * Created by liusiyao on 2017/7/14.
 */
import * as actionTypes from '../constants/userInfo';

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    };
}