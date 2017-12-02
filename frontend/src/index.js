import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
