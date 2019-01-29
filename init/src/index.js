import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 引入mobx的数据
import store from './store';
import { Provider } from 'mobx-react';

ReactDOM.render(<Provider {...store}>
        <App/>
    </Provider>, document.getElementById('root'));