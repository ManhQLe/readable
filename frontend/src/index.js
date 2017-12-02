import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers'
import {creatStore, createStore} from 'redux'
import {Provider} from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
