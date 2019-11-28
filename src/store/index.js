import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import localForage from "localforage";
import {CookieStorage} from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';

import {authReducer, defaultReducer} from './reducers';
import rootSaga from './sagas';

const authPersistConfig = {
    key: 'auth',
    storage: new CookieStorage(Cookies, {
        expiration: {
            'default': 10 * 86400 // Cookies expire after one year
        }
    }),
    stateReconciler(inboundState, originalState) {
        // Ignore state from cookies, only use preloadedState from window object
        return originalState
    }
};

localForage.config({
    driver: [localForage.WEBSQL, localForage.INDEXEDDB, localForage.LOCALSTORAGE],
    name: 'Panel',
    storeName: 'panel'
});

const defaultPersistConfig = {
    key: 'default',
    keyPrefix: 'panel:',
    storage: localForage,
    blacklist: ['auth'],
    // throttle: 2000
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createStore(combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    default: persistReducer(defaultPersistConfig, defaultReducer),
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default () => {
    let store = rootReducer;
    let persistor = persistStore(store);
    return {store, persistor}
}