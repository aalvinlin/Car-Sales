import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import baseStatsReducer from "./reducers/baseStatsReducer";
import extrasReducer from "./reducers/extrasReducer";

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootReducer = combineReducers({
    stats: baseStatsReducer,
    extras: extrasReducer
})
const store = createStore(rootReducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
