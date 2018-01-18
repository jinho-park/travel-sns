import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';
import penderMiddleware from 'redux-pender';
//import loggerMiddleware from './testMiddleWare';

const configureStore = (initialState) => {
    const enhancers = [
        applyMiddleware(
            penderMiddleware()
        )
    ];

    const store = createStore(modules, initialState, compose(...enhancers));

    if(module.hot) {
        module.hot.accept('./modules', () => store.replaceReducer(modules));
    }

    return store;
}

export default configureStore;