import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers';
import middlewares from './middlewares';

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'; // 
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'messanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messageReducer'],
};

export const history = createBrowserHistory();

export default function initStore() {
    const store = createStore(
        persistReducer(persistConfig, reducers(history)),
        {},
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    const persistor = persistStore(store);

    return { store, persistor };
};

