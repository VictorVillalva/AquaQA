import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { storee } from './Store/storee.js';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={storee}>
            <App></App>
        </Provider>
    </React.StrictMode>
)
