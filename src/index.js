import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import  { DragSystem }  from "./redux/reducer"
import { Provider } from 'react-redux';
let store = createStore(DragSystem);



ReactDOM.render(<Provider store={store}>
    <App />
   </Provider>, document.getElementById('root'));