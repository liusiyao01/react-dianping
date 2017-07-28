/**
 * Created by liusiyao on 2017/7/19.
 */
import {get} from '../get';

export function getDetailInfo(id) {
    const result = get('api/detail/info/' + id);
    return result;
}

export function getDetailComments(page, id) {
    const result = get('api/detail/comments/' + page + '/' + id);
    return result;
}