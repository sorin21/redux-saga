import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from  'redux-saga';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import {watchAgeUp} from './sagas/saga'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

