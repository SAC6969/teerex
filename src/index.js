import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import storeItem from './reducer';
import { Provider } from 'react-redux';


// ,applyMiddleware(logger,thunk)
const store = createStore(storeItem);
// console.log('state',store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
