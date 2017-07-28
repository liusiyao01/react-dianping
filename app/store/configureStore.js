/**
 * Created by liusiyao on 2017/6/12.
 */
import { createStore } from 'redux';
import rootRrducer from '../reducers/index';

function configureStore (initialState) {
    const store = createStore(rootRrducer, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
    return store;
};

export default  configureStore;