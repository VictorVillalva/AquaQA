import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'
import { Provider } from 'react-redux'
import { storee } from './Store/storee'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={storee}>
 <App></App>
        </Provider>
      
    </React.StrictMode>
)
