/**
 * Created by liusiyao on 2017/7/18.
 */
import { get } from '../get';

export function getCity() {
    const result = get('/api/citylist');
    return result;
}