import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from "redux";
import { connect, Provider } from "react-redux";

import statsReducer, { addFeature, removeFeature } from "./reducers/statsReducer";
// import extrasReducer from "./reducers/extrasReducer";

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// const rootReducer = combineReducers({
//     stats: baseStatsReducer,
//     extras: extrasReducer
// })

const rootReducer = statsReducer;
const store = createStore(rootReducer);

function mapStateToProps(state) {
    return {
        additionalPrice: state.additionalPrice,
        car: state.car,
        additionalFeatures: state.additionalFeatures
    }
}

const mapDispatchToProps = { addFeature, removeFeature };

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        {connect(mapStateToProps, mapDispatchToProps)(App)}
    </Provider>
    , rootElement);
