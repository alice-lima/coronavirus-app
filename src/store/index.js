/* import createSagaMiddleware from "redux-saga"; */
/* import createStore from "./createStore"; */
/* import rootSaga from '../sagas'; */
import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/* const sagaMonitor = */
/*   process.env.NODE_ENV === 'development' */
/*     ? console.tron.createSagaMonitor() */
/*     : null; */
/*  */
/* const sagaMiddleware = createSagaMiddleware({ sagaMonitor }); */

/* const middlewares = [sagaMiddleware]; */

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* sagaMiddleware.run(rootSaga); */

export default store;
