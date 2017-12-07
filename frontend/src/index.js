import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css'
import reducer from './reducer'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import middleware from './middleware'

const store = createStore(reducer,applyMiddleware(middleware));

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
