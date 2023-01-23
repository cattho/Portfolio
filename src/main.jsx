import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import 'animate.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div className='container-fluid'>
      <App />
    </div>
  </Provider>,
)