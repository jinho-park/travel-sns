import { createStore, compose } from 'redux';
import modules from './modules';

const configureStore = (initialState) => {
    const store = createStore(modules, initialState);

    if(module.hot) {
        module.hot.accept('./modules', () => store.replaceReducer(modules));
    }

    return store;
}

export default configureStore;