import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import 'styles/main.scss';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import store from 'store';

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
