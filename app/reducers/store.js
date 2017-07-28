/**
 * Created by liusiyao on 2017/7/20.
 */
import * as actionTypes from '../constants/store';

export default function store(state = [], action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_ADD:
            state.unshift(action.data);
            return state;
        case actionTypes.STORE_RM:
            return state.filter((item) => {
                if(item.id !== action.data.id)
                    return item;
            });
        default:
            return state;
    }
}